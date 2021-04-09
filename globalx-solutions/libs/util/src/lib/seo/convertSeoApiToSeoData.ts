import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';
import {SeoData} from "@globalx-solutions/shared/elements/seo";

export function convertSeoApiToSeoData(seoApiData: ApiSEOFragment, pageSuffix: string, contentType: string): SeoData {
    return {
        title: `${ seoApiData.title } | Odstresowani Blog`,
        description: seoApiData.description,
        keywords: seoApiData.keywords,
        imageSrc: `${ process.env.NEXT_PUBLIC_HOST_API_URL }${ seoApiData.image.url }`,
        pageUrl: `${ process.env.NEXT_PUBLIC_HOST_URL }${ pageSuffix }`,
        contentType: contentType
    };
}
