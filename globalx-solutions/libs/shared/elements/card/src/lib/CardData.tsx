import {BlogImageData} from "@globalx-solutions/util";

export interface CardData {
  id: string;
  href: string;
  date: Date,
  title: string;
  description: string;

  imageData: BlogImageData;
}
