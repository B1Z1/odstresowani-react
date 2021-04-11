import {gql} from "@apollo/client";
import {
  navigationCategoryLinkFragment,
  navigationCategoryLinkFragmentName, navigationLinkFragment,
  navigationLinkFragmentName
} from "@globalx-solutions/api";

export const NAVIGATION_QUERY = gql`
    query navigationQuery {
        navigation {
            items {
                ... on ComponentNavigationNavigationCategory {
                    ...${ navigationCategoryLinkFragmentName }
                }

                ... on ComponentNavigationNavigationLink {
                    ...${ navigationLinkFragmentName }
                }

                __typename
            }
        }
    }

    ${ navigationCategoryLinkFragment }
    ${ navigationLinkFragment }
`;
