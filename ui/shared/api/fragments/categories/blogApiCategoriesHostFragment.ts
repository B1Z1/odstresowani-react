import { gql } from '@apollo/client';

export const blogApiCategoriesHostFragmentName = 'categoriesHost';

export const blogApiCategoriesHostFragment = gql`
  fragment ${ blogApiCategoriesHostFragmentName } on Category {
    id
    name
    categories {
      id
      name
    }
  }
`;
