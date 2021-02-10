import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { BlogNavigationItemsType } from 'shared/navigation/domain/BlogNavigationItemsType';
import { BlogNavigationItemsTypeName } from 'shared/navigation/domain/BlogNavigationItemsTypeName';

export function convertNavigationItemsToBlogLinkData(navigationItems: Array<BlogNavigationItemsType>): Array<BlogLinkData> {
  return navigationItems.map((item: BlogNavigationItemsType) => {
    let linkData: BlogLinkData;

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
