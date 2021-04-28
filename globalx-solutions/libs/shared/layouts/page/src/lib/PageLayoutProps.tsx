import { CustomLinkData } from '@globalx-solutions/shared/elements/link';
import { SeoData } from '@globalx-solutions/shared/elements/seo';
import { FooterData } from '@globalx-solutions/shared/modules/footer';
import React from 'react';

export interface PageLayoutProps {
  navigationItemsData: Array<CustomLinkData>;
  footerData: FooterData | null;
  seoData: SeoData;

  children: React.ReactNode;
}
