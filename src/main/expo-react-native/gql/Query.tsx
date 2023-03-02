import { gql } from "@apollo/client";

export const BOOK_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;
