import { gql } from '@apollo/client';

export const postPreviewFragmentName = 'postPreview';

export const postPreviewFragment = gql`
  fragment ${ postPreviewFragmentName } on Post {
      id
      title
      slug
      preview_content
      creation_date
      cover_image {
        id
        url
        alternativeText
      }
  }
`;
