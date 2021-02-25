import { FooterData } from 'app/components/modules/footer/domain/FooterData';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export interface LayoutQuery {
    footerData: FooterData | null;
    navigationData: Array<CustomLinkData>;
}
