import {gql} from '@apollo/client';
import {
  relatedCategoryFragment,
  relatedCategoryFragmentName,
  seoFragment,
  seoFragmentName,
} from '@globalx-solutions/api';

export const CATEGORY_QUERY = gql`
    query categoryQuery($categorySlug: String) {
      categoryBySlug(slug: $categorySlug) {
        id
        name
        slug
        categories {
            ...${relatedCategoryFragmentName}
        }
        seo {
            ...${seoFragmentName}
        }
      }
    }

    ${seoFragment}
    ${relatedCategoryFragment}
`;
