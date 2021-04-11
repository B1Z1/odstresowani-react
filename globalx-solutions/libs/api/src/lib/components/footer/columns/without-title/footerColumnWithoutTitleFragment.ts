import {gql} from "@apollo/client/core";
import {navigationLinkFragmentName} from '@globalx-solutions/api';

export const footerColumnWithoutTitleFragmentName = 'footerColumnWithoutTitleFragment';

export const footerColumnWithoutTitleFragment = gql`
    fragment ${footerColumnWithoutTitleFragmentName} on ComponentFooterNavigationColumnWithoutTitle {
        id
        navigationLink {
            ...${navigationLinkFragmentName}
        }
    }
`;
