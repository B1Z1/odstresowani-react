import {FooterColumnType} from "../FooterColumnType";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface FooterColumnWithTitle {
  id: string;
  title: string;
  items: Array<CustomLinkData>;

  type: FooterColumnType.WITH_TITLE;
}
