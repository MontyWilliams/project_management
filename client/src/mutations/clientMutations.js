import { gql } from '@apollo/client';

const DELETE_CLIENT = gql`
    mutatoion deleteClient($id: ID!) {
        deleteClient(id: $id); {
            id
            name
            email
            phone
        }
    }
`;

export { DELETE_CLIENT };
