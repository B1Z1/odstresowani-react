import {gql} from '@apollo/client';
import {seoFragment, seoFragmentName} from '@globalx-solutions/api';

export const HOME_QUERY = gql`
    query homeQuery {
        homePage {
            seo {
                ...${seoFragmentName}
            }
        }
    }

    ${seoFragment}
`;
