import { HTMLAttributes } from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  title: string;
  links: Array<CustomLinkData>;
}
