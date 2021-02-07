import { BlogLinkProps } from 'shared/ui/item/BlogLinkProps';
import { HTMLAttributes } from 'react';

export interface BlogMobileNavigationProps extends HTMLAttributes<HTMLDivElement> {
  onBackgroundClick: (isActive: boolean) => void;
  isActive: boolean;

  navigationLinks?: Array<BlogLinkProps>
}
