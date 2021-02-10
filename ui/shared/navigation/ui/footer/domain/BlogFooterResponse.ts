import { BlogNavigationItemsType } from 'shared/navigation/domain/BlogNavigationItemsType';
import { BlogNavigationSocialMedia } from 'shared/navigation/domain/BlogNavigationSocialMedia';

export interface BlogFooterResponse {
  footer: {
    leftSideNavigation: Array<BlogNavigationItemsType>;
    middleSideNavigation: Array<BlogNavigationItemsType>;
    rightSideNavigation: Array<BlogNavigationItemsType>;
    bottomSideNavigation: Array<BlogNavigationItemsType>;
    socialMediaNavigation: Array<BlogNavigationSocialMedia>;
  }
}
