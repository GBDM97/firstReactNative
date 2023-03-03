import { gql } from "@apollo/client";

// export const NAME_QUERY = gql`
//   query bookDetails($id: ID!) {
//   bookById(id: $id) {
//     id
//     name
//     pageCount
//     author {
//       id
//       firstName
//       lastName
//     }
//   }
// }
// `;

export const NAME_QUERY = gql`
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