import { HTMLAttributes } from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface BlogLinkListProps extends HTMLAttributes<HTMLUListElement> {
  title: string;
  links: Array<CustomLinkData>;
}
