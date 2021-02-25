import { gql } from 'graphql-tag';
import {
    relatedCategoryFragment,
    relatedCategoryFragmentName
} from 'app/api/fragments/related-category/relatedCategoryFragment';

export const CATEGORY_QUERY = gql`
    query categoryQuery($categoryId: ID!) {
      category(id: $categoryId) {
        id
        name
        categories {
            ...${ relatedCategoryFragmentName }
        }
      }
    }
    
    ${ relatedCategoryFragment }
`;
