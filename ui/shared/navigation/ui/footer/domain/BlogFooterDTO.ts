import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { BlogFooterSocialMediaItemData } from 'shared/navigation/ui/footer/ui/social-media-list/BlogFooterSocialMediaItemData';

export interface BlogFooterDTO {
  leftSideNavigation: Array<BlogLinkData>;
  middleSideNavigation: Array<BlogLinkData>;
  rightSideNavigation: Array<BlogLinkData>;
  bottomSideNavigation: Array<BlogLinkData>;
  socialMediaNavigation: Array<BlogFooterSocialMediaItemData>;
}
