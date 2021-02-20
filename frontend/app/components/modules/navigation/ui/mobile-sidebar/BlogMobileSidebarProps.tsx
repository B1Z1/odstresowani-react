import { HTMLAttributes } from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface BlogMobileSidebarProps extends HTMLAttributes<HTMLDivElement> {
    onBackgroundClick: (isActive: boolean) => void;
    isActive: boolean;
    navigationItemsData: Array<CustomLinkData>;
}
