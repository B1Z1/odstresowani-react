import {ApiPostPreviewFragment} from "@globalx-solutions/api";

export interface ApiPostPreviewCategoryQuery {
    id: string;
    posts: Array<ApiPostPreviewFragment>;
}

export interface ApiPostPreviewByCategoryQuery {
    category?: ApiPostPreviewCategoryQuery;
}
