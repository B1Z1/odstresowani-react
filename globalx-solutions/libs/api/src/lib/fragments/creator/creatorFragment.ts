import {gql} from '@apollo/client';

export const creatorFragmentName = 'creatorFragment';

export const creatorFragment = gql`
  fragment ${creatorFragmentName} on UsersPermissionsUser {
    username
    description
    avatar {
        url
    }
  }
`;
