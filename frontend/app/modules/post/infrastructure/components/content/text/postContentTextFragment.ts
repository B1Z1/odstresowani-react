import { gql } from 'graphql-tag';

export const postContentTextFragmentName = 'postContentTextFragment';

export const postContentTextFragment = gql`
    fragment ${ postContentTextFragmentName } on ComponentPostText {
        content
    }
`;
