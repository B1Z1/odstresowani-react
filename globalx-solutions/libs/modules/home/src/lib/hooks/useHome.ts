import { useQuery } from '@apollo/client';
import { ApiSEOFragment } from '@globalx-solutions/api';
import {
  HOME_QUERY,
  HomeQuery,
  HookHomeData,
} from '@globalx-solutions/modules/home';
import { SeoData } from '@globalx-solutions/shared/elements/seo';
import { convertSeoApiToSeoData } from '@globalx-solutions/util';

export function useHome(): HookHomeData {
  const { data: homeData } = useQuery<HomeQuery>(HOME_QUERY);
  const convertedSeo: SeoData = convertSeoApiToSeoData(
    homeData?.homePage?.seo as ApiSEOFragment,
    '',
    'page'
  );

  return {
    seoData: convertedSeo,
  };
}
