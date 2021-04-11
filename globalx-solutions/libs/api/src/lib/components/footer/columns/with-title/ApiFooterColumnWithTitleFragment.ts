import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';

export interface ApiFooterColumnWithTitleFragment {
    id: string;
    title: string;
    navigationLink: Array<ApiNavigationLinkFragment>;
}
