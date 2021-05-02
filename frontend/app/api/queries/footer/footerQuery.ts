import { gql } from 'graphql-tag';
import {
    footerColumnEmptyFragment,
    footerColumnEmptyFragmentName
} from 'app/api/components/footer/columns/empty/footerColumnEmptyFragment';
import {
    footerColumnWithoutTitleFragment,
    footerColumnWithoutTitleFragmentName
} from 'app/api/components/footer/columns/without-title/footerColumnWithoutTitleFragment';
import {
    footerColumnWithTitleFragment,
    footerColumnWithTitleFragmentName
} from 'app/api/components/footer/columns/with-title/footerColumnWithTitleFragment';
import {
    navigationIconLinkFragment,
    navigationIconLinkFragmentName
} from 'app/api/components/navigation/icon-link/navigationIconLinkFragment';
import {
    navigationLinkFragment,
    navigationLinkFragmentName
} from 'app/api/components/navigation/link/navigationLinkFragment';

export const FOOTER_QUERY = gql`
    query footerQuery($locale: String) {
        footer(locale: $locale) {
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
