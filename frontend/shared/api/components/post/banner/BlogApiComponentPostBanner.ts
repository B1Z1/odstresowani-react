import { BlogApiComponentMedia } from 'shared/api/components/BlogApiComponentMedia';
import { BlogApiComponentMediaImageSource } from 'shared/api/components/media/BlogApiComponentMediaImageSource';

export interface BlogApiComponentPostBanner {
  image: BlogApiComponentMedia;
  image_source: BlogApiComponentMediaImageSource;
}
