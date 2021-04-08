import { CardData } from 'app/components/elements/card/CardData';
import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardData: CardData;
}
