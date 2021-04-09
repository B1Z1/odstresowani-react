import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface HeaderProps {
  onMobileButtonClick: (isActive: boolean) => void;
  isMobileNavigationActive: boolean;
  navigationItemsData: Array<CustomLinkData>;
}
