import { gql } from '@apollo/client';

export const blogNavigationFragmentCategoryName = 'navigationCategory';

export const blogNavigationFragmentCategory = gql`
  fragment ${ blogNavigationFragmentCategoryName } on ComponentNavigationNavigationCategory {
    category {
      id
      name
    }
  }
`;
