import { gql } from 'graphql-tag';
import {
    relatedCategoryFragment,
    relatedCategoryFragmentName
} from 'app/api/fragments/related-category/relatedCategoryFragment';
import { seoFragment, seoFragmentName } from 'app/api/components/seo/seoFragment';

export const CATEGORY_QUERY = gql`
    query categoryQuery($categoryId: ID!) {
      category(id: $categoryId) {
        id
        name
        categories {
            ...${ relatedCategoryFragmentName }
        }
        seo {
            ...${ seoFragmentName }
        }
      }
    }
    
    ${ seoFragment }
    ${ relatedCategoryFragment }
`;
