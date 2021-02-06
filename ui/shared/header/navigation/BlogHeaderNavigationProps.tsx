import { HTMLAttributes } from 'react';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';

export interface BlogHeaderNavigationProps extends HTMLAttributes<HTMLDivElement> {
  onBackgroundClick: (isActive: boolean) => void;
  isActive: boolean;

  navigationLinks?: Array<BlogLinkData>;
}
