import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';

export function convertApiNavigationLinkToCustomLinkData(linkFragment: ApiNavigationLinkFragment): CustomLinkData {
    return {
        value: linkFragment.name,
        href: linkFragment.url
    };
}
