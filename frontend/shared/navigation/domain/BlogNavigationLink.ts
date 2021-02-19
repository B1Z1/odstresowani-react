import { BlogApiComponentNavigationLink } from 'shared/api/components/navigation/link/BlogApiComponentNavigationLink';
import { BlogNavigationItemsTypeName } from 'shared/navigation/domain/BlogNavigationItemsTypeName';

export interface BlogNavigationLink extends BlogApiComponentNavigationLink {
  __typename: BlogNavigationItemsTypeName.LINK;
}
