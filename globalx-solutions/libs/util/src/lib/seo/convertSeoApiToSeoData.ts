import { SEOData } from 'app/components/elements/seo/domain/SeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export function convertSeoApiToSeoData(seoApiData: ApiSEOFragment, pageSuffix: string, contentType: string): SEOData {
    return {
        title: `${ seoApiData.title } | Odstresowani Blog`,
        description: seoApiData.description,
        keywords: seoApiData.keywords,
        imageSrc: `${ process.env.NEXT_PUBLIC_HOST_API_URL }${ seoApiData.image.url }`,
        pageUrl: `${ process.env.NEXT_PUBLIC_HOST_URL }${ pageSuffix }`,
        contentType: contentType
    };
}
