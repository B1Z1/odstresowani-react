import { BlogNavigationItemsTypeName } from 'app/components/modules/navigation/domain/BlogNavigationItemsTypeName';

export interface BlogNavigationCategory {
  category: {
    id: string;
    name: string;
  }
  __typename: BlogNavigationItemsTypeName.CATEGORY;
}
