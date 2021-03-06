import { gql } from 'graphql-tag';
import {
    relatedCategoryFragment,
    relatedCategoryFragmentName
} from 'app/api/fragments/related-category/relatedCategoryFragment';
import { seoFragment, seoFragmentName } from 'app/api/components/seo/seoFragment';

export const CATEGORY_QUERY = gql`
    query categoryQuery($categorySlug: String) {
      categoryBySlug(slug: $categorySlug) {
        id
        name
        slug
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
