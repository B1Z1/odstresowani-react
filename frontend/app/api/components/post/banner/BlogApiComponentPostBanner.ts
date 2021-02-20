import { BlogApiComponentMedia } from 'app/api/components/BlogApiComponentMedia';
import { BlogApiComponentMediaImageSource } from 'app/api/components/media/BlogApiComponentMediaImageSource';

export interface BlogApiComponentPostBanner {
  image: BlogApiComponentMedia;
  image_source: BlogApiComponentMediaImageSource;
}
