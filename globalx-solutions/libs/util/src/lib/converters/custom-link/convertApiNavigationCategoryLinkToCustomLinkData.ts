import {ApiNavigationCategoryLinkFragment} from 'app/api/components/navigation/category/ApiNavigationCategoryLinkFragment';
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function convertApiNavigationCategoryLinkToCustomLinkData(linkFragment: ApiNavigationCategoryLinkFragment): CustomLinkData {
  return {
    href: `/category/${linkFragment.category.slug}`,
    value: linkFragment.category.name,
    target: '_self'
  };
}
