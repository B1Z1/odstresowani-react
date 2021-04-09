import {HTMLAttributes} from "react";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface HeaderNavigationProps extends HTMLAttributes<HTMLDivElement> {
  navigationLinks?: Array<CustomLinkData>;
}
