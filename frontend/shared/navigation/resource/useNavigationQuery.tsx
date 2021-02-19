import { useQuery } from '@apollo/client';
import { BlogNavigationResponse } from 'shared/navigation/domain/BlogNavigationResponse';
import { NAVIGATION_QUERY } from 'shared/navigation/resource/navigationQuery';
import { BlogNavigationItemsType } from 'shared/navigation/domain/BlogNavigationItemsType';
import { convertNavigationItemsToBlogLinkData } from 'shared/navigation/resource/convertNavigationItemsToBlogLinkData';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';

export function useNavigationQuery(): Array<BlogLinkData> {
  const {data} = useQuery<BlogNavigationResponse>(NAVIGATION_QUERY);
  const navigationItems: Array<BlogNavigationItemsType> = data?.navigation.items || [];

  return convertNavigationItemsToBlogLinkData(navigationItems);
}
