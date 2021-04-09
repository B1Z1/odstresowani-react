import {HTMLAttributes} from 'react';
import {CardData} from "@globalx-solutions/shared/elements/card";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardData: CardData;
}
