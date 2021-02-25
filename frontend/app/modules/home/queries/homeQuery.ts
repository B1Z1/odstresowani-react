import { gql } from 'graphql-tag';
import {
    relatedCategoryFragment,
    relatedCategoryFragmentName
} from 'app/api/fragments/related-category/relatedCategoryFragment';

export const HOME_QUERY = gql`
    query homeQuery {
        homePage {
            category {
                id
                categories {
                    ... ${ relatedCategoryFragmentName }
                }
            }
        }
    }
    
    ${ relatedCategoryFragment }
`;
