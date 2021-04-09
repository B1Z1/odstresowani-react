import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function convertApiNavigationLinkToCustomLinkData(linkFragment: ApiNavigationLinkFragment): CustomLinkData {
    return {
        value: linkFragment.name,
        href: linkFragment.url,
        target: linkFragment.inNewTab ? '_blank' : '_self'
    };
}
