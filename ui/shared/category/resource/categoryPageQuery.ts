import { gql } from '@apollo/client';
import {
  blogApiCategoriesHostFragment,
  blogApiCategoriesHostFragmentName
} from 'shared/api/fragments/categories/blogApiCategoriesHostFragment';

export const CATEGORY_PAGE_QUERY = gql`
  query categoryPageQuery($categoryId: ID!) {
      category(id: $categoryId) {
        ...${ blogApiCategoriesHostFragmentName }
      }
  }

  ${ blogApiCategoriesHostFragment }
`;
