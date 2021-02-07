import React from 'react';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { BlogFooterData } from 'shared/footer/BlogFooterData';

export interface BlogLayoutPageProps {
  children: React.ReactNode,
  headerLinks?: Array<BlogLinkData>
  footerData?: BlogFooterData;
}
