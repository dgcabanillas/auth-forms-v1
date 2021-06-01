import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation __login__ ( 
        $email:     String! 
        $password:  String!
    ) {
        login (
            email:      $email
            password:   $password
        ) {
            token
            errors {
                error
                description
            }
        }
    }
`;

export const REGISTER = gql`
    mutation __register__ (
        $nombre:     String!
        $apellido:   String!
        $email:      String!
        $password:   String!
        $dni:        String!
    ) {
        register (
            nombre:     $nombre
            apellido:   $apellido
            email:      $email
            password:   $password
            dni:        $dni
        ) {
            token
            errors {
                error
                description
            }
        }
    }
`;

export const RECOVER = gql`
    mutation __recover__ ( $email: String! ) {
        recover ( email: $email ) 
    }
`;

export const CONFIRM_ACCOUNT_FROM_LINK = gql`
    mutation __confirmAccountFromLink__ ( $token: String! ) {
        confirmAccountFromLink ( token: $token )
    }
`;

export const RESET_PASSWORD = gql`
    mutation __resetPassword__ ( 
        $token:     String!
        $password:  String!
    ) {
        resetPassword (
            token:      $token
            password:   $password
        ) {
            errors {
                error
                description
            }
        }
    }
`;