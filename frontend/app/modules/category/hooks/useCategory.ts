import { HookCategoryData } from 'app/modules/category/domain/HookCategoryData';
import { useQuery } from '@apollo/client';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { CategoryQuery } from 'app/modules/category/domain/CategoryQuery';
import { CATEGORY_QUERY } from 'app/modules/category/query/categoryQuery';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export function useCategory(categorySlug: string): HookCategoryData {
    const {data: categoryData} = useQuery<CategoryQuery>(
        CATEGORY_QUERY,
        {variables: {categorySlug: categorySlug}}
    );
    const categoryName: string = categoryData?.categoryBySlug.name as string;
    const convertedCategoriesData: Array<CustomLinkData> =
        categoryData?.categoryBySlug.categories.map((category) => {
            return {
                href: `/category/${ category.slug }`,
                value: category.name,
                target: '_self'
            };
        }) || [];
    const convertedSeo: SEOData = convertSeoApiToSeoData(
        categoryData?.categoryBySlug?.seo as ApiSEOFragment,
        `/category/${ categorySlug }`,
        'category'
    );

    return {
        categoryId: categoryData?.categoryBySlug.id as string,
        categoryName,
        categoriesData: convertedCategoriesData,
        seoData: convertedSeo
    };
}
