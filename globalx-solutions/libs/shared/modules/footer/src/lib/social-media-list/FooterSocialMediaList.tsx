import {FooterSocialMediaListProps} from "./FooterSocialMediaListProps";
import {mapWithLast} from "@globalx-solutions/util";
import {FooterSocialMediaItemData} from "./FooterSocialMediaItemData";
import {getSocialMediaItem} from "./utils/getSocialMediaItem";

export function FooterSocialMediaList(props: FooterSocialMediaListProps) {
  let socialMediaItems: Array<JSX.Element> = [];

  if (props && props.socialMediaItems) {
    socialMediaItems = mapWithLast<JSX.Element, FooterSocialMediaItemData>(props.socialMediaItems, getSocialMediaItem);
  }

  return (
    <ul className="ob-flex ob-w-full ob-flex-wrap ob-text-white">
      {socialMediaItems}
    </ul>
  );
}
