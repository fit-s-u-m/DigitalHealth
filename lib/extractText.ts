'use client';
import { GenerativeModel, GoogleGenerativeAI, Part } from '@google/generative-ai';

const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString()); // Return the base64 string
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = reject; // Reject on error
    reader.readAsDataURL(file); // Converts the file to base64
  });
};

export default async function ExtractText(file: File) {
  const base64Image = await convertToBase64(file);
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    console.error('API key is missing.');
    return null; // Or handle the error appropriately
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash', // or "gemini-1.5-pro"
    systemInstruction: `
You are assigned to convert patient information from images into a structured digital format. Your task is to extract both personal information and medical information from the provided image and return them in a structured JSON format.

### Formatting Rules:
1. **Predefined Keys:**
   - Use consistent key names for specific types of personal and medical information.
   - If a label in the image differs from the predefined key, convert it to the correct key.

2. **Free Format Keys:**
   - Any additional information found in the image that does not match a predefined key should be included as a separate key using camelCase formatting.
   - If there is a title and a corresponding text, either:
     - Make the title the key and the text the value.
     - Use an embedded JSON structure without altering the original format.

3. **Amharic Language Handling:**
   - If any text appears in Amharic, retain it in Amharic within the JSON and do not translate it into English.

### JSON Output Structure

#### Personal Information (Predefined Keys)
personalInformation {
  "firstName": "",
  "middleName": "",
  "lastName": "",
  "dateOfBirth": "",
  "age":"",
  "phoneNumber":"",
  "sex": "",
  "address": {
    "region": "",
    "woredaSubcity": "",
    "kebele": "",
    "houseNumber": ""
   },
  "emergencyContact": "",
  "weight": "",
  "height": ""
}

#### Medical Information (Predefined Keys)
medicalInformation {
  "hospitalName": "",
  "doctorName": "",
  "registrationDate": "",
  "illness": "",
  "medicalHistory": ""
}
Ensure that the extracted information maintains structured consistency while allowing flexibility for additional data.
if property value is null or doesn't exist return empty string
    `,
  });

  const prompt = 'Format the given patient form into a JSON object with key-value pairs representing labels and their extracted values.';

  // Prepare the content parts. Important for image inputs.
  const imagePart = {
    inlineData: {
      mimeType: file.type, // Use the file's actual mime type
      data: base64Image.split(',')[1], // Remove the data URL prefix
    },
  } as Part;
  async function generateContentWithRetry(model: GenerativeModel, content: (string | Part)[], maxRetries = 3, retryDelay = 1000) {
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const result = await model.generateContent(content);
        return result;
      } catch (error: any) {
        if (error.response && error.response.status === 503) {
          console.warn(`503 error. Retrying in ${retryDelay}ms... (Retry <span class="math-inline">\{retries \+ 1\}/</span>{maxRetries})`);
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          retryDelay *= 2; // Exponential backoff
          retries++;
        } else {
          // Re-throw other errors
          throw error;
        }
      }
    }
    throw new Error('Max retries exceeded. Gemini API request failed.');
  }
  // Example usage:
  try {
    const result = await generateContentWithRetry(model,  [prompt,imagePart]);
    const response = await result.response;
    const text = response.text();
    const cleanText = text.trim().replace(/^```json|```$/g, '');
    console.log(" text",text)
    console.log("clean text",cleanText)
    const data = JSON.parse(cleanText)
    console.log('Gemini Response:', data);
    return data; // Return the text response
  } catch (error) {
    console.error('Gemini API error:', error);
  }

}
