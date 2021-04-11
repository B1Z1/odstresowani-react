import { useLazyQuery } from '@apollo/client';
import {
  ApiPostPreviewByCategoryQuery,
  ApiPostPreviewByCategoryQueryParams,
  ApiPostPreviewFragment,
  POST_PREVIEW_BY_CATEGORY_QUERY,
} from '@globalx-solutions/api';
import { HookPostPreviewByCategoryData } from '@globalx-solutions/modules/post-preview-by-category';
import { CardData } from '@globalx-solutions/shared/elements/card';
import { convertApiPostPreviewFragmentToCardData } from '@globalx-solutions/util';
import { useEffect, useState } from 'react';

export function usePostPreviewByCategory(
  categoryId: string | null
): HookPostPreviewByCategoryData {
  const [loadPostPreviewData, { data: postPreviewData }] = useLazyQuery<
    ApiPostPreviewByCategoryQuery,
    ApiPostPreviewByCategoryQueryParams
  >(POST_PREVIEW_BY_CATEGORY_QUERY);
  const [previewPostsData, setPreviewPostsData] = useState<Array<CardData>>([]);

  useEffect(() => {
    loadPostsData(0);
  }, [categoryId]);

  useEffect(() => {
    const convertedPreviewPostsData: Array<CardData> =
      postPreviewData?.category?.posts.map(
        (postData: ApiPostPreviewFragment) => {
          return convertApiPostPreviewFragmentToCardData(postData);
        }
      ) || [];

    setPreviewPostsData(convertedPreviewPostsData);
  }, [postPreviewData]);

  function loadPostsData(startIndex: number) {
    if (categoryId) {
      loadPostPreviewData({
        variables: {
          categoryId,
          startIndex,
        },
      });
    }
  }

  return {
    previewPostsData: previewPostsData,

    loadPostsData,
  };
}
