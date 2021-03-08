import { useLazyQuery } from '@apollo/client';
import { ApiPostPreviewByCategoryQuery } from 'app/api/queries/post-preview-by-category/ApiPostPreviewByCategoryQuery';
import { ApiPostPreviewByCategoryQueryParams } from 'app/api/queries/post-preview-by-category/ApiPostPreviewByCategoryQueryParams';
import { POST_PREVIEW_BY_CATEGORY_QUERY } from 'app/api/queries/post-preview-by-category/postPreviewByCategoryQuery';
import { useEffect, useState } from 'react';
import { CardData } from 'app/components/elements/card/CardData';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { convertApiPostPreviewFragmentToCardData } from 'app/utils/converters/blog-card/convertApiPostPreviewFragmentToCardData';
import { HookPostPreviewByCategoryData } from 'app/modules/post-preview-by-category/domain/HookPostPreviewByCategoryData';

export function usePostPreviewByCategory(categoryId: string | null): HookPostPreviewByCategoryData {
    const [loadPostPreviewData, {data: postPreviewData}] =
        useLazyQuery<ApiPostPreviewByCategoryQuery, ApiPostPreviewByCategoryQueryParams>(POST_PREVIEW_BY_CATEGORY_QUERY);
    const [previewPostsData, setPreviewPostsData] = useState<Array<CardData>>([]);

    useEffect(() => {
        loadPostsData(0);
    }, [categoryId]);

    useEffect(() => {
        const convertedPreviewPostsData: Array<CardData> =
            postPreviewData?.category?.posts.map((postData: ApiPostPreviewFragment) => {
                return convertApiPostPreviewFragmentToCardData(postData);
            }) || [];

        setPreviewPostsData(convertedPreviewPostsData);
    }, [postPreviewData]);

    function loadPostsData(startIndex: number) {
        if (categoryId) {
            loadPostPreviewData({
                variables: {
                    categoryId,
                    startIndex
                }
            });
        }
    }

    return {
        previewPostsData: previewPostsData,

        loadPostsData
    };
}
