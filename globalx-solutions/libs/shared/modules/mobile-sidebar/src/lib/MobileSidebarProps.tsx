import {HTMLAttributes} from "react";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface MobileSidebarProps extends HTMLAttributes<HTMLDivElement> {
  onBackgroundClick: (isActive: boolean) => void;
  isActive: boolean;
  navigationItemsData: Array<CustomLinkData>;
}
