import { BlogLinkData } from 'shared/ui/item/BlogLinkData';

export interface BlogHeaderProps {
  navigationLinks?: Array<BlogLinkData>;
  onMobileButtonClick: (isActive: boolean) => void;
  isMobileNavigationActive: boolean;
}
