import { CustomLinkData } from '@globalx-solutions/shared/elements/link';
import { SeoData } from '@globalx-solutions/shared/elements/seo';

export interface HookCategoryData {
  categoryId: string;
  categoryName: string;
  categoriesData: Array<CustomLinkData>;
  seoData: SeoData;
}
