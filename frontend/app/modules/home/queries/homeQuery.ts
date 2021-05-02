import { gql } from 'graphql-tag';
import { seoFragment, seoFragmentName } from 'app/api/components/seo/seoFragment';

export const HOME_QUERY = gql`
    query homeQuery($locale: String) {
        homePage(locale: $locale) {          
            seo {
                ...${ seoFragmentName }
            }
        }
    }
    
    ${ seoFragment }
`;
