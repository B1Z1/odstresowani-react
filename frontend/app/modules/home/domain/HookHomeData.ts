import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { CardData } from 'app/components/elements/card/CardData';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';

export interface HookHomeData {
    categoriesData: Array<CustomLinkData>;
    previewPostsData: Array<CardData>;
    footerData: FooterData | null;
    navigationData: Array<CustomLinkData>;

    loadPostsData(startIndex: number): void;
}
