import { useLazyQuery } from '@apollo/client';
import {
  ApiPostPreviewFragment,
  ApiPostPreviewQuery,
  ApiPostPreviewQueryParams,
  POST_PREVIEW_QUERY,
} from '@globalx-solutions/api';
import { HookPostPreviewData } from '@globalx-solutions/modules/post-preview';
import { CardData } from '@globalx-solutions/shared/elements/card';
import { convertApiPostPreviewFragmentToCardData } from '@globalx-solutions/util';
import { useEffect, useState } from 'react';

export function usePostPreview(): HookPostPreviewData {
  const [loadPostPreviewData, { data: postPreviewData }] = useLazyQuery<
    ApiPostPreviewQuery,
    ApiPostPreviewQueryParams
  >(POST_PREVIEW_QUERY);
  const [previewPostsData, setPreviewPostsData] = useState<Array<CardData>>([]);

  useEffect(() => {
    loadPostsData(0);
  }, []);

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
      },
    });
  }

  return {
    previewPostsData: previewPostsData,

    loadPostsData,
  };
}
