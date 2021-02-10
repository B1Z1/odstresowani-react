import { gql } from '@apollo/client';
import { postPreviewFragment } from 'shared/api/fragments/post-preview/postPreviewFragment';

export const POST_PREVIEW_QUERY = gql`
  query postPreviewQuery($startIndex: Int, $categoryId: ID!) {
    category(id: $categoryId) {
      id
      posts(limit: 6, start: $startIndex) {
        ... postPreview
      }
    }
  }

  ${ postPreviewFragment }
`;
