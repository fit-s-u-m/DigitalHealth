import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation AddPatient(
    $first_name: String!, 
    $middle_name: String, 
    $last_name: String!, 
    $national_id: String!, 
    $age: Int!, 
    $emergency_contact: String, 
    $address: String,
    $sex: String,
    $phone_number: String,
  ) {
    insert_patients_one(object: {
      first_name: $first_name, 
      middle_name: $middle_name, 
      last_name: $last_name, 
      national_id: $national_id, 
      age: $age, 
      emergency_contact: $emergency_contact, 
      address: $address,
      sex: $sex,
      phone_number: $phone_number,
    }) {
      national_id
      first_name
      last_name
    }
  }
`;
