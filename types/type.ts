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
}
export type PatientResponceType = {
  patients: PatientType[]
}
export type geminiResponceType = {
  personalInformation:{
    patientFullName: string
    dateOfBirth: string
    gender: string
    address: {
      city:string
      woredaSubcity: string
      kebele: string
      houseNumber: string
    }
    phoneNumber:string
    emergencyContact: string,
    weight: string,
    height: string,
  }
  medicalInformation: {
    hospitalName: string
    doctorName: string,
    registrationDate: string,
    illness: string,
    medicalHistory: string
  },
}