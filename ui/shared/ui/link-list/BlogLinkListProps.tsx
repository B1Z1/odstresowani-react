import { HTMLAttributes } from 'react';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';

export interface BlogLinkListProps extends HTMLAttributes<HTMLUListElement> {
  title: string;
  links: Array<BlogLinkData>
}
