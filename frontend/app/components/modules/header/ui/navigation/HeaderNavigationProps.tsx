import { HTMLAttributes } from 'react';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface HeaderNavigationProps extends HTMLAttributes<HTMLDivElement> {
  navigationLinks?: Array<CustomLinkData>;
}
