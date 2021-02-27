import { HookCategoryData } from 'app/modules/category/domain/HookCategoryData';
import { useQuery } from '@apollo/client';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { CategoryQuery } from 'app/modules/category/domain/CategoryQuery';
import { CATEGORY_QUERY } from 'app/modules/category/query/categoryQuery';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export function useCategory(categoryId: string): HookCategoryData {
    const {data: categoryData} = useQuery<CategoryQuery>(
        CATEGORY_QUERY,
        {variables: {categoryId: categoryId}}
    );
    const categoryName: string = categoryData?.category.name as string;
    const convertedCategoriesData: Array<CustomLinkData> =
        categoryData?.category.categories.map((category) => {
            return {
                href: `/category/${ category.id }`,
                value: category.name
            };
        }) || [];
    const convertedSeo: SEOData = convertSeoApiToSeoData(
        categoryData?.category?.seo as ApiSEOFragment,
        `/category/${categoryId}`,
        'category'
    );

    return {
        categoryName,
        categoriesData: convertedCategoriesData,
        seoData: convertedSeo
    };
}
