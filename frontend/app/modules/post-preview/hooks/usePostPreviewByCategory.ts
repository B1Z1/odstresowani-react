import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { CardData } from 'app/components/elements/card/CardData';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { convertApiPostPreviewFragmentToCardData } from 'app/utils/converters/blog-card/convertApiPostPreviewFragmentToCardData';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { ApiPostPreviewQuery } from 'app/api/queries/post-preview/ApiPostPreviewQuery';
import { ApiPostPreviewQueryParams } from 'app/api/queries/post-preview/ApiPostPreviewQueryParams';
import { HookPostPreviewData } from 'app/modules/post-preview/domain/HookPostPreviewData';
import { NextRouter, useRouter } from 'next/router';
import { ApiLocale } from 'app/api/utils/locale/ApiLocale';
import { apiParseLocale } from 'app/api/utils/locale/apiParseLocale';

export function usePostPreview(): HookPostPreviewData {
    const { locale }: NextRouter = useRouter();
    const parsedLocale: ApiLocale = apiParseLocale(locale);
    const [loadPostPreviewData, { data: postPreviewData }] =
        useLazyQuery<ApiPostPreviewQuery, ApiPostPreviewQueryParams>(POST_PREVIEW_QUERY);
    const [previewPostsData, setPreviewPostsData] = useState<Array<CardData>>([]);

    useEffect(() => {
        loadPostsData(0);
    }, []);

    useEffect(() => {
        loadPostsData(0);
        setPreviewPostsData([]);
    }, [locale]);

    useEffect(() => {
        const convertedPreviewPostsData: Array<CardData> =
            postPreviewData?.posts.map((postData: ApiPostPreviewFragment) => {
                return convertApiPostPreviewFragmentToCardData(postData);
            }) || [];

        setPreviewPostsData(convertedPreviewPostsData);
    }, [postPreviewData]);

    function loadPostsData(startIndex: number) {
        loadPostPreviewData({
            variables: {
                startIndex,
                locale: parsedLocale
            }
        });
    }

    return {
        previewPostsData: previewPostsData,

        loadPostsData
    };
}
