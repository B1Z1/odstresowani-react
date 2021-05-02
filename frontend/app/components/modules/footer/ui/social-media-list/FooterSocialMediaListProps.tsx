import { FooterSocialMediaItemData } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaItemData';
import { HTMLAttributes } from 'react';

export interface FooterSocialMediaListProps extends HTMLAttributes<HTMLElement> {
    socialMediaItems?: Array<FooterSocialMediaItemData>;
}
