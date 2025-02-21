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
