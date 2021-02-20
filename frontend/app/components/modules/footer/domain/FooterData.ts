import { FooterSocialMediaItemData } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaItemData';
import { FooterColumnData } from 'app/components/modules/footer/ui/column/domain/FooterColumnData';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface FooterData {
    columnsData: Array<FooterColumnData>;
    socialMediaItemsData: Array<FooterSocialMediaItemData>;
    bottomItemsData: Array<CustomLinkData>;
}
