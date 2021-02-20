import React from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';

export interface LayoutPageProps {
    navigationItemsData: Array<CustomLinkData>;
    footerData: FooterData | null;

    children: React.ReactNode;
}
