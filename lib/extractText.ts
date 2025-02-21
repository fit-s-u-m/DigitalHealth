'use client';
import { GoogleGenerativeAI, Part } from '@google/generative-ai';

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
    systemInstruction: `You are a person in a hospital assigned to convert paper data to digital data. You are provided with patient information in a PDF form and must extract the values and their corresponding labels. Respond with a JSON object where each key is the label and the value is the extracted information.`,
  });

  const prompt = 'Format the given patient form into a JSON object with key-value pairs representing labels and their extracted values.';

  // Prepare the content parts. Important for image inputs.
  const imagePart = {
    inlineData: {
      mimeType: file.type, // Use the file's actual mime type
      data: base64Image.split(',')[1], // Remove the data URL prefix
    },
  } as Part;
  async function generateContentWithRetry(model, content, maxRetries = 3, retryDelay = 1000) {
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
    const result = await generateContentWithRetry(model, [prompt, imagePart]);
    const response = await result.response;
    const text = response.text();
    console.log('Gemini Response:', text);
    return text; // Return the text response
  } catch (error) {
    console.error('Gemini API error:', error);
  }

  // try {
  //   const result = await model.generateContent([prompt, imagePart]);
  //   const response = await result.response;
  //   const text = response.text();
  //   console.log('Gemini Response:', text);
  //   return text; // Return the text response
  // } catch (error) {
  //   console.error('Error generating content:', error);
  //   return null; // Or handle the error appropriately
  // }
}
