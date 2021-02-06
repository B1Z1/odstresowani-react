import React from 'react';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';

export interface BlogLayoutPageProps {
  children: React.ReactNode,
  navigationLinks?: Array<BlogLinkData>
}
