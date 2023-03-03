import { NAME_QUERY } from "../gql/Query";
import { useQuery } from "@apollo/client";


export default function GetPersonAttributes (id: string) {
  try {
    const data = useQuery(NAME_QUERY);
    
    console.log(data);
  } catch (error) {
    console.log(error);
  }
    // export default function GetPersonAttributes (id: string) {
    //   const { data, loading } = useQuery(NAME_QUERY, {
    //       variables: {
    //         "id": id,
    //       },
    //   });
    console.log("bora");
    
    //TODO updateContextAttributes or use redux to update the images
}
