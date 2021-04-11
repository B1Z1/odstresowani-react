import {
  PostContentBannerFragment,
  PostContentTextFragment,
  PostContentType,
} from '@globalx-solutions/modules/post';
import { ApiType } from '@globalx-solutions/util';

export type PostContent =
  | (PostContentTextFragment & ApiType<PostContentType.TEXT>)
  | (PostContentBannerFragment & ApiType<PostContentType.BANNER>);
