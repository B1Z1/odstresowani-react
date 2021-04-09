import React from 'react';
import {FooterData} from "../../../../modules/footer/src/lib/FooterData";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";
import {SeoData} from "@globalx-solutions/shared/elements/seo";

export interface PageLayoutProps {
  navigationItemsData: Array<CustomLinkData>;
  footerData: FooterData | null;
  seoData: SeoData;

  children: React.ReactNode;
}
