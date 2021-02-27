import { gql } from 'graphql-tag';

export const seoFragmentName = 'seoFragment';

export const seoFragment = gql`
    fragment ${ seoFragmentName } on ComponentSeoSeo {
        title
        description
        keywords
        image {
            url
        }
    }
`;
