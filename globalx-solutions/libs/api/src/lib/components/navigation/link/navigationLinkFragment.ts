import {gql} from "@apollo/client";

export const navigationLinkFragmentName = 'navigationLink';

export const navigationLinkFragment = gql`
    fragment ${navigationLinkFragmentName} on ComponentNavigationNavigationLink {
        id
        name
        url
        inNewTab
    }
`;
