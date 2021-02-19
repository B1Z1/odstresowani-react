import { gql } from '@apollo/client';

export const postPreviewFragment = gql`
  fragment postPreview on Post {
      id
      title
      preview_content
      creation_date
      cover_image {
        id
        url
        alternativeText
        name
      }
  }
`;
