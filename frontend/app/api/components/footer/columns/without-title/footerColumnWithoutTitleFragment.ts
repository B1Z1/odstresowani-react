import { gql } from 'graphql-tag';
import { navigationLinkFragmentName } from 'app/api/components/navigation/link/navigationLinkFragment';

export const footerColumnWithoutTitleFragmentName = 'footerColumnWithoutTitleFragment';

export const footerColumnWithoutTitleFragment = gql`
    fragment ${ footerColumnWithoutTitleFragmentName } on ComponentFooterNavigationColumnWithoutTitle {
        id
        navigationLink {
            ...${ navigationLinkFragmentName }
        }
    }
`;
