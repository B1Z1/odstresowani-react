import { gql } from 'graphql-tag';

export const footerColumnEmptyFragmentName = 'footerColumnEmptyFragment';

export const footerColumnEmptyFragment = gql`
    fragment ${ footerColumnEmptyFragmentName } on ComponentFooterNavigationColumnEmpty {
        id
    }
`;
