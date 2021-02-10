import { BlogNavigationItemsTypeName } from 'shared/navigation/domain/BlogNavigationItemsTypeName';

export interface BlogNavigationCategory {
  category: {
    id: string;
    name: string;
  }
  __typename: BlogNavigationItemsTypeName.CATEGORY;
}
