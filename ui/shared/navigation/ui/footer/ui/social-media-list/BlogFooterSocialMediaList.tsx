import { BlogFooterSocialMediaListProps } from 'shared/navigation/ui/footer/ui/social-media-list/BlogFooterSocialMediaListProps';
import { BlogFooterSocialMediaItemData } from 'shared/navigation/ui/footer/ui/social-media-list/BlogFooterSocialMediaItemData';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { getSocialMediaItem } from 'shared/navigation/ui/footer/ui/social-media-list/utils/getSocialMediaItem';

export function BlogFooterSocialMediaList(props: BlogFooterSocialMediaListProps) {
  let socialMediaItems: Array<JSX.Element> = [];

  if (props && props.socialMediaItems) {
    socialMediaItems = mapWithLast<JSX.Element, BlogFooterSocialMediaItemData>(props.socialMediaItems, getSocialMediaItem);
  }

  return (
    <ul className="ob-flex ob-flex-wrap ob-text-white">
      { socialMediaItems }
    </ul>
  );
}
