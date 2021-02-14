import { HTMLAttributes } from 'react';

export interface BlogMobileSidebarProps extends HTMLAttributes<HTMLDivElement> {
  onBackgroundClick: (isActive: boolean) => void;
  isActive: boolean;
}
