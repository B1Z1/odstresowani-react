import { BlogLinkData } from 'shared/ui/link/BlogLinkData';

export interface BlogHeaderProps {
  navigationLinks?: Array<BlogLinkData>;
  onMobileButtonClick: (isActive: boolean) => void;
  isMobileNavigationActive: boolean;
}
