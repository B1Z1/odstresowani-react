import { CardData } from 'app/components/elements/card/CardData';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';

export function convertApiPostPreviewFragmentToCardData(postPreviewFragment: ApiPostPreviewFragment): CardData {
    return {
        id: postPreviewFragment.id,
        title: postPreviewFragment.title,
        description: postPreviewFragment.preview_content,
        href: `/post/${ postPreviewFragment.id }`,
        date: new Date(postPreviewFragment.creation_date),
        imageData: {
            src: postPreviewFragment.cover_image.url,
            alt: postPreviewFragment.cover_image.alternativeText,
            title: postPreviewFragment.cover_image.alternativeText
        }
    };
}
