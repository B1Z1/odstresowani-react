import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface BlogHeaderProps {
  onMobileButtonClick: (isActive: boolean) => void;
  isMobileNavigationActive: boolean;
  navigationItemsData: Array<CustomLinkData>;
}
