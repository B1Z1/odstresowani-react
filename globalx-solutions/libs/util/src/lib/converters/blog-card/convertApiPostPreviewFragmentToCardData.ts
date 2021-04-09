import {ApiPostPreviewFragment} from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import {CardData} from "@globalx-solutions/shared/elements/card";

export function convertApiPostPreviewFragmentToCardData(postPreviewFragment: ApiPostPreviewFragment): CardData {
  return {
    id: postPreviewFragment.id,
    title: postPreviewFragment.title,
    description: postPreviewFragment.preview_content,
    href: `/post/${postPreviewFragment.slug}`,
    date: new Date(postPreviewFragment.creation_date),
    imageData: {
      src: `/api/${postPreviewFragment.cover_image.url}`,
      alt: postPreviewFragment.cover_image.alternativeText,
      title: postPreviewFragment.cover_image.alternativeText
    }
  };
}
