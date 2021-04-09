import {ApiNavigationItemsQuery} from 'app/api/queries/navigation/ApiNavigationQuery';
import {ApiNavigationTypes} from 'app/api/components/navigation/ApiNavigationTypes';
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";
import {convertApiNavigationCategoryLinkToCustomLinkData} from "./convertApiNavigationCategoryLinkToCustomLinkData";
import {convertApiNavigationLinkToCustomLinkData} from "./convertApiNavigationLinkToCustomLinkData";

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
