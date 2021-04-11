import {gql} from "@apollo/client";
import {postPreviewFragment, postPreviewFragmentName} from "@globalx-solutions/api";

export const POST_PREVIEW_QUERY = gql`
  query postPreviewQuery($startIndex: Int) {
      posts(sort: "creation_date:desc", limit: 6, start: $startIndex) {
        ... ${postPreviewFragmentName}
      }
  }

  ${postPreviewFragment}
`;
