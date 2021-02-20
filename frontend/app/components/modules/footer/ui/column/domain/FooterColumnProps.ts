import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { HTMLAttributes } from 'react';

export interface FooterColumnProps extends HTMLAttributes<HTMLElement> {
    title?: string;
    items: Array<CustomLinkData>;
}
