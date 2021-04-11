import {gql} from "@apollo/client";

export const navigationIconLinkFragmentName = 'navigationIconLinkFragment';

export const navigationIconLinkFragment = gql`
    fragment ${navigationIconLinkFragmentName} on ComponentNavigationNavigationIconLink {
        id
        iconName
        title
        url
        inNewTab
    }
`;
