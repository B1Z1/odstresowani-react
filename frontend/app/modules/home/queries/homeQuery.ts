import { gql } from 'graphql-tag';

export const HOME_QUERY = gql`
    query homeQuery {
        homePage {
            category {
                id
                categories {
                    id
                    name
                }
            }
        }
    }
`;
