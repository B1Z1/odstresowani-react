import { BlogImageData } from 'app/utils/datas/image/BlogImageData';

export interface CardData {
  id: string;
  href: string;
  date: Date,
  title: string;
  description: string;

  imageData: BlogImageData;
}
