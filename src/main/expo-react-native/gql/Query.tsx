import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const BOOK_QUERY = gql`
  query bookDetails {
  bookById(id: "book-2") {
    id
    name
    pageCount
    author {
      id
      firstName
      lastName
    }
  }
}
`;

export const COUNTRY_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        name
      }
    }
  }
`;