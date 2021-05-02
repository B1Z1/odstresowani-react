import { FooterSocialMediaListProps } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaListProps';
import { FooterSocialMediaItemData } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaItemData';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { getSocialMediaItem } from 'app/components/modules/footer/ui/social-media-list/utils/getSocialMediaItem';

export function FooterSocialMediaList(props: FooterSocialMediaListProps) {
    let socialMediaItems: Array<JSX.Element> = [];

    if (props && props.socialMediaItems) {
        socialMediaItems = mapWithLast<JSX.Element, FooterSocialMediaItemData>(props.socialMediaItems, getSocialMediaItem);
    }

    return (
        <ul className={ `${ props.className || '' } ob-flex ob-flex-wrap ob-text-white` }>
            { socialMediaItems }
        </ul>
    );
}
