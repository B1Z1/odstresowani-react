import { HTMLAttributes } from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface BlogHeaderNavigationProps extends HTMLAttributes<HTMLDivElement> {
  navigationLinks?: Array<CustomLinkData>;
}
