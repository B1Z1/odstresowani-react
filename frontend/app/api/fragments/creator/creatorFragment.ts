import { gql } from '@apollo/client';

export const creatorFragmentName = 'postPreview';

export const creatorFragment = gql`
  fragment ${ creatorFragmentName } on Post {
    username
    description
    avatar {
        url
    }
  }
`;
