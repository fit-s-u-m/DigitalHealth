import { getClient } from "@/lib/ApolloClient";
import { TypedDocumentNode, gql } from "@apollo/client";

// Corrected Type: patients is an array
export const getLastName: TypedDocumentNode<{
  patients: { id: number; first_name: string }[];
}> = gql`
  query {
    patients {
      id
      first_name
    }
  }
`;

/**
 * Example Server Component that uses Apollo Client for data fetching.
 */
export async function LatestMissionName() {
  const { data } = await getClient().query({
    query: getLastName,
  });

  // Check if data exists
  if (!data || !data.patients) return <div>No data available</div>;

  return (
    <div>
      <h2>Last Names</h2>
      <ul>
        {data.patients.map((patient) => (
          <li key={patient.id}>{patient.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

