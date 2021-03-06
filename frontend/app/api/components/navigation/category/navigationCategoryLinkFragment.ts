import { gql } from 'graphql-tag';

export const navigationCategoryLinkFragmentName = 'navigationCategoryLinkFragment';

export const navigationCategoryLinkFragment = gql`
    fragment ${ navigationCategoryLinkFragmentName } on ComponentNavigationNavigationCategory {
        category {
            id
            slug
            name
        }
    }
`;
