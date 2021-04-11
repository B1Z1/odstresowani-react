import {
  footerColumnEmptyFragment,
  footerColumnEmptyFragmentName,
  footerColumnWithoutTitleFragment,
  footerColumnWithoutTitleFragmentName,
  footerColumnWithTitleFragment,
  footerColumnWithTitleFragmentName,
  navigationIconLinkFragment,
  navigationIconLinkFragmentName, navigationLinkFragment,
  navigationLinkFragmentName
} from "@globalx-solutions/api";
import {gql} from "@apollo/client";

export const FOOTER_QUERY = gql`
    query footerQuery {
        footer {
            columns {
                ... on ComponentFooterNavigationColumnEmpty {
                    ...${ footerColumnEmptyFragmentName }
                }

                ... on ComponentFooterNavigationColumnWithTitle {
                    ...${ footerColumnWithTitleFragmentName }
                }

                ... on ComponentFooterNavigationColumnWithoutTitle {
                    ...${ footerColumnWithoutTitleFragmentName }
                }

                __typename
            }

            bottomNavigation {
                ... on ComponentNavigationNavigationLink {
                    ...${ navigationLinkFragmentName }
                }

                __typename
            }

            socialMediaNavigation {
                ...${ navigationIconLinkFragmentName }
            }
        }
    }

    ${ footerColumnEmptyFragment }
    ${ footerColumnWithTitleFragment }
    ${ footerColumnWithoutTitleFragment }
    ${ navigationIconLinkFragment }
    ${ navigationLinkFragment }
`;
