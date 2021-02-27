import { gql } from 'graphql-tag';
import {
    relatedCategoryFragment,
    relatedCategoryFragmentName
} from 'app/api/fragments/related-category/relatedCategoryFragment';
import { seoFragment, seoFragmentName } from 'app/api/components/seo/seoFragment';

export const HOME_QUERY = gql`
    query homeQuery {
        homePage {
            category {
                id
                categories {
                    ... ${ relatedCategoryFragmentName }
                }
            }
            
            seo {
                ...${ seoFragmentName }
            }
        }
    }
    
    ${ relatedCategoryFragment }
    ${ seoFragment }
`;
