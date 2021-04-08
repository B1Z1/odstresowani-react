import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { ApiNavigationItemsQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { ApiNavigationTypes } from 'app/api/components/navigation/ApiNavigationTypes';
import { convertApiNavigationLinkToCustomLinkData } from 'app/utils/converters/custom-link/convertApiNavigationLinkToCustomLinkData';
import { convertApiNavigationCategoryLinkToCustomLinkData } from 'app/utils/converters/custom-link/convertApiNavigationCategoryLinkToCustomLinkData';

export function convertApiNavigationItemsToCustomLinkData(itemsQuery: ApiNavigationItemsQuery): CustomLinkData {
    let linkData: CustomLinkData;

    switch (itemsQuery.__typename) {
        case ApiNavigationTypes.CATEGORY_LINK:
            linkData = convertApiNavigationCategoryLinkToCustomLinkData(itemsQuery);
            break;
        case ApiNavigationTypes.LINK:
            linkData = convertApiNavigationLinkToCustomLinkData(itemsQuery);
            break;
    }

    return linkData;
}
