import { useLazyQuery } from '@apollo/client';
import { ApiPostPreviewQuery } from 'app/api/queries/post-preview/ApiPostPreviewQuery';
import { ApiPostPreviewQueryParams } from 'app/api/queries/post-preview/ApiPostPreviewQueryParams';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { useEffect, useState } from 'react';
import { CardData } from 'app/components/elements/card/CardData';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { convertApiPostPreviewFragmentToCardData } from 'app/utils/converters/blog-card/convertApiPostPreviewFragmentToCardData';
import { HookPostPreviewData } from 'app/modules/post-preview/domain/HookPostPreviewData';

export function usePostPreview(categoryId: string | null): HookPostPreviewData {
    const [loadPostPreviewData, {data: postPreviewData}] =
        useLazyQuery<ApiPostPreviewQuery, ApiPostPreviewQueryParams>(POST_PREVIEW_QUERY);
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
