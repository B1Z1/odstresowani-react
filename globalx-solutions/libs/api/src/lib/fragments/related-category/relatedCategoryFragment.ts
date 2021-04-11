import {gql} from "@apollo/client";

export const relatedCategoryFragmentName = 'relatedCategory';

export const relatedCategoryFragment = gql`
    fragment ${relatedCategoryFragmentName} on Category {
        id
        name
        slug
    }
`;
