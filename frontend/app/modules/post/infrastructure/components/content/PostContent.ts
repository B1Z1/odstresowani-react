import { ApiType } from 'app/utils/api-type/ApiType';
import { PostContentType } from 'app/modules/post/infrastructure/components/content/PostContentType';
import { PostContentTextFragment } from 'app/modules/post/infrastructure/components/content/text/domain/PostContentTextFragment';
import { PostContentBannerFragment } from 'app/modules/post/infrastructure/components/content/banner/domain/PostContentBannerFragment';

export type PostContent =
    (PostContentTextFragment & ApiType<PostContentType.TEXT>) |
    (PostContentBannerFragment & ApiType<PostContentType.BANNER>);
