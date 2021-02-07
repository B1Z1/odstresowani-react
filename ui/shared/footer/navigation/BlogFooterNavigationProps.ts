import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { HTMLAttributes } from 'react';

export interface BlogFooterNavigationProps extends HTMLAttributes<HTMLDivElement> {
  firstColumnLinks?: Array<BlogLinkData>;
  secondColumnLinks?: Array<BlogLinkData>;
  thirdColumnLinks?: Array<BlogLinkData>;
  bottomRightLinks?: Array<BlogLinkData>;
}
