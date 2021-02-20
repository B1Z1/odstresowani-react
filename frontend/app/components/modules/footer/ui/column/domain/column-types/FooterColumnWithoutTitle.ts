import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { FooterColumnType } from 'app/components/modules/footer/ui/column/domain/FooterColumnType';

export interface FooterColumnWithoutTitle {
    id: string;
    items: Array<CustomLinkData>;

    type: FooterColumnType.WITHOUT_TITLE;
}
