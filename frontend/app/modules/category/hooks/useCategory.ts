import { HookCategoryData } from 'app/modules/category/domain/HookCategoryData';
import { useQuery } from '@apollo/client';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { CategoryQuery } from 'app/modules/category/domain/CategoryQuery';
import { CATEGORY_QUERY } from 'app/modules/category/query/categoryQuery';

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

    return {
        categoryName,
        categoriesData: convertedCategoriesData
    };
}
