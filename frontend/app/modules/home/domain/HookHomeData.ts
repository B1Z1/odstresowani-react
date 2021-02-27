import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';

export interface HookHomeData {
    categoryId: string | null;
    categoriesData: Array<CustomLinkData>;
    seoData: SEOData;
}
