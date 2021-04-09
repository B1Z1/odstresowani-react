import {FooterColumnType} from "../FooterColumnType";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface FooterColumnWithoutTitle {
    id: string;
    items: Array<CustomLinkData>;

    type: FooterColumnType.WITHOUT_TITLE;
}
