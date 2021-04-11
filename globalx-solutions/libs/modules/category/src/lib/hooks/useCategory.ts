import { useQuery } from '@apollo/client';
import { ApiSEOFragment } from '@globalx-solutions/api';
import { CustomLinkData } from '@globalx-solutions/shared/elements/link';
import { SeoData } from '@globalx-solutions/shared/elements/seo';
import { convertSeoApiToSeoData } from '@globalx-solutions/util';
import { CategoryQuery } from '../domain/CategoryQuery';
import { HookCategoryData } from '../domain/HookCategoryData';
import { CATEGORY_QUERY } from '../query/categoryQuery';

export function useCategory(categorySlug: string): HookCategoryData {
  const { data: categoryData } = useQuery<CategoryQuery>(CATEGORY_QUERY, {
    variables: { categorySlug: categorySlug },
  });
  const categoryName: string = categoryData?.categoryBySlug.name as string;
  const convertedCategoriesData: Array<CustomLinkData> =
    categoryData?.categoryBySlug.categories.map((category) => {
      return {
        href: `/category/${category.slug}`,
        value: category.name,
        target: '_self',
      };
    }) || [];
  const convertedSeo: SeoData = convertSeoApiToSeoData(
    categoryData?.categoryBySlug?.seo as ApiSEOFragment,
    `/category/${categorySlug}`,
    'category'
  );

  return {
    categoryId: categoryData?.categoryBySlug.id as string,
    categoryName,
    categoriesData: convertedCategoriesData,
    seoData: convertedSeo,
  };
}
