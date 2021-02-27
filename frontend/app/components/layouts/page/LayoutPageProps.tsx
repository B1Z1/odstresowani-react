import React from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';

export interface LayoutPageProps {
    navigationItemsData: Array<CustomLinkData>;
    footerData: FooterData | null;
    seoData: SEOData;

    children: React.ReactNode;
}
