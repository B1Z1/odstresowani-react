import {gql} from '@apollo/client';
import {postPreviewFragment, postPreviewFragmentName} from "@globalx-solutions/api";

export const POST_PREVIEW_BY_CATEGORY_QUERY = gql`
  query postPreviewByCategoryQuery($startIndex: Int, $categoryId: ID!) {
    category(id: $categoryId) {
      id
      posts(limit: 6, start: $startIndex) {
        ... ${postPreviewFragmentName}
      }
    }
  }

  ${postPreviewFragment}
`;
