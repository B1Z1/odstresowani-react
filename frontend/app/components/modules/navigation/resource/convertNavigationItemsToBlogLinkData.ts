import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { BlogNavigationItemsType } from 'app/components/modules/navigation/domain/BlogNavigationItemsType';
import { BlogNavigationItemsTypeName } from 'app/components/modules/navigation/domain/BlogNavigationItemsTypeName';

export function convertNavigationItemsToBlogLinkData(navigationItems: Array<BlogNavigationItemsType>): Array<CustomLinkData> {
  return navigationItems.map((item: BlogNavigationItemsType) => {
    let linkData: CustomLinkData;

    switch (item.__typename) {
      case BlogNavigationItemsTypeName.LINK: {
        linkData = {
          value: item.name,
          href: item.url
        };
        break;
      }
      case BlogNavigationItemsTypeName.CATEGORY: {
        linkData = {
          value: item.category.name,
          href: `/category/${ item.category.id }`
        };
        break;
      }
    }

    return linkData;
  });
}
