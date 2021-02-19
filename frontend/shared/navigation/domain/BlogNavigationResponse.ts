import { BlogNavigationItemsType } from 'shared/navigation/domain/BlogNavigationItemsType';

export interface BlogNavigationResponse {
  navigation: {
    items: Array<BlogNavigationItemsType>
  }
}
