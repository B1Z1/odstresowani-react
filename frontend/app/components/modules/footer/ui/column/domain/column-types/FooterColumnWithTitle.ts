import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { FooterColumnType } from 'app/components/modules/footer/ui/column/domain/FooterColumnType';

export interface FooterColumnWithTitle {
    id: string;
    title: string;
    items: Array<CustomLinkData>;

    type: FooterColumnType.WITH_TITLE;
}
