import { BlogNavigationItemsType } from 'app/components/modules/navigation/domain/BlogNavigationItemsType';

export interface BlogNavigationResponse {
  navigation: {
    items: Array<BlogNavigationItemsType>
  }
}
