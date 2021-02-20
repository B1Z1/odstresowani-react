import { gql } from 'graphql-tag';
import {
    navigationLinkFragmentName
} from 'app/api/components/navigation/link/navigationLinkFragment';

export const footerColumnWithTitleFragmentName = 'footerColumnWithTitleFragment';

export const footerColumnWithTitleFragment = gql`
    fragment ${ footerColumnWithTitleFragmentName } on ComponentFooterNavigationColumnWithTitle {
        id
        title
        navigationLink {
            ...${ navigationLinkFragmentName }
        }
    }
`;
