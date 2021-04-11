import { CustomLinkData } from '@globalx-solutions/shared/elements/link';
import { FooterData } from '@globalx-solutions/shared/modules/footer';

export interface LayoutQuery {
  footerData: FooterData | null;
  navigationData: Array<CustomLinkData>;
}
