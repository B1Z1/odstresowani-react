import { gql } from '@apollo/client';

export const postContentTextFragmentName = 'postContentTextFragment';

export const postContentTextFragment = gql`
    fragment ${postContentTextFragmentName} on ComponentPostText {
        content
    }
`;
