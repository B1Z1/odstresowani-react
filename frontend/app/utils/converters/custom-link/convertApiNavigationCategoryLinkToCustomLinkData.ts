import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { ApiNavigationCategoryLinkFragment } from 'app/api/components/navigation/category/ApiNavigationCategoryLinkFragment';

export function convertApiNavigationCategoryLinkToCustomLinkData(linkFragment: ApiNavigationCategoryLinkFragment): CustomLinkData {
    return {
        href: `/category/${ linkFragment.category.slug }`,
        value: linkFragment.category.name,
        target: '_self'
    };
}
