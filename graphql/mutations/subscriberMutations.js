import { gql } from "@apollo/client";

const ADD_SUBSCRIBER = gql`
  mutation AddSubscriber($email: String!) {
    addSubscriber(email: $email) {
      id
      email
    }
  }
`;

export { ADD_SUBSCRIBER };
