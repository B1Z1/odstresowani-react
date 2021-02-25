import { useQuery } from '@apollo/client';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { HookHomeData } from 'app/modules/home/domain/HookHomeData';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export function useHome(): HookHomeData {
    const {data: homeData} = useQuery<HomeQuery>(HOME_QUERY);
    const categoryId: string | null = homeData?.homePage?.category.id || null;
    const convertedCategoriesData: Array<CustomLinkData> =
        homeData?.homePage?.category.categories.map((category) => {
            return {
                href: `/category/${ category.id }`,
                value: category.name
            };
        }) || [];

    return {
        categoryId,
        categoriesData: convertedCategoriesData
    };
}
