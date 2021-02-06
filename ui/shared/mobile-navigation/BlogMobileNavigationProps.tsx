import { BlogLinkProps } from 'shared/ui/item/BlogLinkProps';
import { HTMLAttributes } from 'react';

export interface BlogMobileNavigationProps extends HTMLAttributes<HTMLDivElement> {
  items?: Array<BlogLinkProps>
}
