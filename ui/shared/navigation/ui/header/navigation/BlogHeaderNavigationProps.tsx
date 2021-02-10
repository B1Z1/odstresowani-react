import { HTMLAttributes } from 'react';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';

export interface BlogHeaderNavigationProps extends HTMLAttributes<HTMLDivElement> {
  navigationLinks?: Array<BlogLinkData>;
}
