import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';

export interface HookCategoryData {
    categoryId: string;
    categoryName: string;
    categoriesData: Array<CustomLinkData>;
    seoData: SEOData;
}
