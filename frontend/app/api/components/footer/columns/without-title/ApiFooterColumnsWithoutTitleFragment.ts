import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';

export interface ApiFooterColumnsWithoutTitleFragment {
    id: string;
    navigationLink: Array<ApiNavigationLinkFragment>;
}
