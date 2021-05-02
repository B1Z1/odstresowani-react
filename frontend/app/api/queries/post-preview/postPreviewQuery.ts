import {gql} from '@apollo/client';
import {postPreviewFragment, postPreviewFragmentName} from 'app/api/fragments/post-preview/postPreviewFragment';

export const POST_PREVIEW_QUERY = gql`
  query postPreviewQuery($startIndex: Int, $locale: String) {
      posts(locale: $locale, sort: "creation_date:desc", limit: 6, start: $startIndex) {
        ... ${postPreviewFragmentName}
      }
  }

  ${postPreviewFragment}
`;
