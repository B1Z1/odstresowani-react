import {HTMLAttributes} from "react";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface FooterColumnProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  items: Array<CustomLinkData>;
}
