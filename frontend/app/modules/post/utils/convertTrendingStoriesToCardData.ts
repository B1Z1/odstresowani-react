import { CardData } from 'app/components/elements/card/CardData';
import { BlogImageData } from 'app/utils/datas/image/BlogImageData';
import { PostTrendingStory } from 'app/modules/post/domain/PostTrendingStory';

export function convertTrendingStoriesToCardData(trendingStories: Array<PostTrendingStory>): Array<CardData> {
    return trendingStories
        .filter((post: PostTrendingStory) => !!post.post)
        .map((value: PostTrendingStory) => {
            const creationPostPreviewDate: Date = new Date(value.post.creation_date);
            const imageData: BlogImageData = {
                title: value.post.cover_image.alternativeText,
                alt: value.post.cover_image.alternativeText,
                src: `${ process.env.NEXT_PUBLIC_HOST_API_URL }/${ value.post.cover_image.url }`
            };

            return {
                id: value.post.id,
                title: value.post.title,
                href: `/post/${ value.post.id }`,
                date: creationPostPreviewDate,
                description: value.post.preview_content,
                imageData: imageData
            };
        });
}
