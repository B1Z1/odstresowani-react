import { BlogImageData } from 'shared/utils/datas/image/BlogImageData';

export interface BlogCardData {
  id: string;
  href: string;
  date: Date,
  title: string;
  description: string;

  imageData: BlogImageData;
}
