import { BlogCardData } from 'shared/ui/card/BlogCardData';
import { HTMLAttributes } from 'react';

export interface BlogCardProps extends HTMLAttributes<HTMLDivElement> {
  cardData: BlogCardData;
}
