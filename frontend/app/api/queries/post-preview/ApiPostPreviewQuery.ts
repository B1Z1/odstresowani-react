import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';

export interface ApiPostPreviewCategoryQuery {
    id: string;
    posts: Array<ApiPostPreviewFragment>;
}

export interface ApiPostPreviewQuery {
    category?: ApiPostPreviewCategoryQuery;
}
