import { FooterSocialMediaItemData } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaItemData';
import { BlogNavigationSocialMedia } from 'app/components/modules/navigation/domain/BlogNavigationSocialMedia';
import * as fas from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

export function convertNavigationSocialMediaItemsToBlogSocialMediaData(
  navigationSocialMediaItems: Array<BlogNavigationSocialMedia>
): Array<FooterSocialMediaItemData> {
  return navigationSocialMediaItems.map((item: BlogNavigationSocialMedia) => {
    return {
      icon: fas[item.iconName] || faQuestionCircle,
      href: item.url
    };
  });
}
