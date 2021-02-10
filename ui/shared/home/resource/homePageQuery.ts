import { gql } from '@apollo/client';
import {
  blogApiCategoriesHostFragment,
  blogApiCategoriesHostFragmentName
} from 'shared/api/fragments/categories/blogApiCategoriesHostFragment';

export const HOME_PAGE_QUERY = gql`
  query homePageQuery {
    homePage {
      category {
        ...${ blogApiCategoriesHostFragmentName }
      }
    }
  }

  ${ blogApiCategoriesHostFragment }
`;
