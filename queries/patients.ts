import { gql } from "@apollo/client";


export const patientsQuery = gql`
  query {
    patients{
      id,
      first_name,
      middle_name,
      last_name,
      national_id,
      age,
      emergency_contact,
      record_id,
      address,
      sex,
      date_of_birth,
    }
  }
`;

