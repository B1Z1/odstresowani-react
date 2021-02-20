import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';
import { BlogNavigationItemsTypeName } from 'app/components/modules/navigation/domain/BlogNavigationItemsTypeName';

export interface BlogNavigationLink extends ApiNavigationLinkFragment {
  __typename: BlogNavigationItemsTypeName.LINK;
}
