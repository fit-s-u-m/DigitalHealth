import { gql } from "@apollo/client";


export const patients = gql`
  query {
    patients{
      first_name,
      middle_name,
      last_name,
      national_id,
      age,
      emergency_contact,
      record_id,
      address,
    }
  }
`;

