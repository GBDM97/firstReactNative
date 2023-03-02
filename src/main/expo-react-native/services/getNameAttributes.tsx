import { NAME_QUERY } from "../gql/Query";
import { useQuery } from "@apollo/client";

export default function GetNameAttributes (id: string) {
    const { data, loading } = useQuery(NAME_QUERY, {
        variables: {
          "id": id,
        },
    });

    //TODO updateContextAttributes or use redux to update the images
}
