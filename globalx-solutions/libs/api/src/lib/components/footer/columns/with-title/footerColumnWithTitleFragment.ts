import {gql} from "@apollo/client/core";
import {navigationLinkFragmentName} from '@globalx-solutions/api';

export const footerColumnWithTitleFragmentName = 'footerColumnWithTitleFragment';

export const footerColumnWithTitleFragment = gql`
    fragment ${footerColumnWithTitleFragmentName} on ComponentFooterNavigationColumnWithTitle {
        id
        title
        navigationLink {
            ...${navigationLinkFragmentName}
        }
    }
`;
