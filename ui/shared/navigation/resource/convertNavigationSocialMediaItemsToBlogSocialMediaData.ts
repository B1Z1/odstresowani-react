import { BlogFooterSocialMediaItemData } from 'shared/navigation/ui/footer/ui/social-media-list/BlogFooterSocialMediaItemData';
import { BlogNavigationSocialMedia } from 'shared/navigation/domain/BlogNavigationSocialMedia';
import * as fas from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

export function convertNavigationSocialMediaItemsToBlogSocialMediaData(
  navigationSocialMediaItems: Array<BlogNavigationSocialMedia>
): Array<BlogFooterSocialMediaItemData> {
  return navigationSocialMediaItems.map((item: BlogNavigationSocialMedia) => {
    return {
      icon: fas[item.iconName] || faQuestionCircle,
      href: item.url
    };
  });
}
