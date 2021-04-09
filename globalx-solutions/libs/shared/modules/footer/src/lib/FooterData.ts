import {FooterColumnData} from "./column/FooterColumnData";
import {FooterSocialMediaItemData} from "./social-media-list/FooterSocialMediaItemData";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface FooterData {
  columnsData: Array<FooterColumnData>;
  socialMediaItemsData: Array<FooterSocialMediaItemData>;
  bottomItemsData: Array<CustomLinkData>;
}
