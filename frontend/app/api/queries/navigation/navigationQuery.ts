import { gql } from 'graphql-tag';
import {
    navigationLinkFragment,
    navigationLinkFragmentName
} from 'app/api/components/navigation/link/navigationLinkFragment';
import {
    navigationCategoryLinkFragment,
    navigationCategoryLinkFragmentName
} from 'app/api/components/navigation/category/navigationCategoryLinkFragment';

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
