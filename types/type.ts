export type PatientType = {
  id: number
  first_name: string
  middle_name: string
  last_name: string
  address: string
  age: number
  emergency_contact: string
  national_id: string
  record_id: string
  sex:string
}
export type PatientResponceType = {
  patients: PatientType[]
}
export type PatientGeminiType = {
    fistName: string
    middleName: string
    lastName: string
    gender: string
    age:string
    sex:string
    address: {
      city:string
      woredaSubcity: string
      kebele: string
      houseNumber: string
    }
    phoneNumber:string
    emergencyContact: string
}
export type MedicalHistory = {
    hospitalName: string
    doctorName: string,
    registrationDate: string,
    illness: string,
    medicalHistory: string
}
export type geminiResponceType = {
  medicalInformation:MedicalHistory ,
  personalInformation:PatientGeminiType
}