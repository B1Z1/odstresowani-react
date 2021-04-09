import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { POST_QUERY } from 'app/modules/post/infrastructure/queries/postQuery';
import { PostQuery } from 'app/modules/post/domain/PostQuery';
import { ParsedUrlQuery } from 'querystring';
import LayoutPage from 'app/components/layouts/page/PageLayout';
import { useLayout } from 'app/modules/layout/hooks/useLayout';
import styles from 'pages/post/Post.module.scss';
import { Signature } from 'app/components/elements/sygnature/Signature';
import { PostDate } from 'app/components/elements/post-date/PostDate';
import { CustomLinkBordered } from 'app/components/elements/link/bordered/CustomLinkBordered';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePost } from 'app/modules/post/hooks/usePost';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CardData } from 'app/components/elements/card/CardData';
import { getPostCardColumn } from 'app/utils/ui/post-card/getPostCardColumn';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import * as fas from '@fortawesome/free-brands-svg-icons';
import { PostContentMarkdown } from 'app/modules/post/ui/content/PostContentMarkdown';

export default function Post({postSlug}: { postSlug: string }) {
    const {footerData, navigationData} = useLayout();
    const {
        trendingStories,
        creationDate,
        creator,
        coverImage,
        content,
        title,
        seo
    } = usePost(postSlug);
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(trendingStories, getPostCardColumn);
    const facebookUrl: string = `https://www.facebook.com/sharer/sharer.php?u=${ seo.pageUrl }`;
    const twitterUrl: string = `https://twitter.com/share?url=${ seo.pageUrl }`;

    return (
        <LayoutPage seoData={ seo }
                    navigationItemsData={ navigationData }
                    footerData={ footerData }>
            <figure className={ `ob-relative ob-w-full ${ styles['ob-post__banner'] }` }>
                <img className="ob-object-cover ob-w-full ob-h-full"
                     src={ `/api/${ coverImage.url }` }
                     alt={ coverImage.alternativeText }
                />
            </figure>

            <div
                className={ `ob-relative ob-mx-auto ob-px-4 ob-py-8 xl:ob--mt-16 xl:ob-py-12
                            ob-bg-white ob-text-center
                            ${ styles['ob-post__content-container'] }` }>
                <div className="ob-absolute ob-top-0 ob-left-1/2
                                ob-flex ob-items-center ob-justify-center
                                ob-w-8 ob-h-8 xl:ob-w-14 xl:ob-h-14
                                ob-bg-white ob-rounded-full
                                ob-transform ob--translate-x-1/2 ob--translate-y-1/2">
                    <Signature className="ob-w-1/2 ob-h-1/2"/>
                </div>
                <h1 className="ob-text-2xl xl:ob-text-4xl
                               ob-pb-8 xl:ob-pb-14">
                    { title }
                </h1>
                <PostDate
                    className="ob-text-secondary ob-fill-secondary ob-justify-center"
                    date={ creationDate }
                />
            </div>

            <PostContentMarkdown content={ content }/>

            <div
                className={ `ob-relative
                            ob-flex ob-flex-wrap ob-justify-center
                            ob-mb-16 ob-mx-auto ob-px-4
                            ${ styles['ob-post__content-container'] }` }>
                <CustomLinkBordered
                    className="ob-flex ob-items-center
                               ob-py-2 ob-px-8 md:ob-py-4 ob-mb-4 md:ob-mb-0 md:ob-mr-8
                               ob-w-full md:ob-w-48 ob-font-bold ob-text-3xl"
                    href={ facebookUrl }
                    target="_blank">
                    <FontAwesomeIcon className="ob-w-5 ob-mr-10 md:ob-mr-4" icon={ fas['faFacebookF'] }/>
                    <span>share</span>
                </CustomLinkBordered>
                <CustomLinkBordered
                    className="ob-flex ob-items-center
                               ob-py-2 ob-px-8 md:ob-py-4
                               ob-w-full md:ob-w-48 ob-font-bold ob-text-3xl"
                    href={ twitterUrl }
                    target="_blank">
                    <FontAwesomeIcon className="ob-w-7 ob-mr-8 md:ob-mr-4" icon={ fas['faTwitter'] }/>
                    <span>share</span>
                </CustomLinkBordered>
            </div>

            { creator && (
                <div
                    className={ `ob-mx-auto ob-text-center ob-mb-16 lg:ob-mb-40 ${ styles['ob-post__author-container'] }` }>
                    <h4 className="ob-font-base ob-text-secondary ob-font-bold ob-mb-4 lg:ob-mb-8">
                        Author:
                    </h4>
                    <figure className="ob-relative
                                   ob-w-20 ob-h-20
                                   ob-mb-8 ob-mx-auto lg:ob-mb-12
                                   ob-rounded-full ob-overflow-hidden">
                        <img
                            className="ob-object-cover ob-w-full ob-h-full"
                            src={ creator.avatarUrl }
                            alt={ creator.name }
                        />
                    </figure>
                    <p className="ob-text-2xl">
                        { creator.description }
                    </p>
                </div>
            ) }

            { cardElements.length > 0 && (
                <div className="ob-container ob-mx-auto">
                    <h4 className="ob-mb-12 lg:ob-mb-16 ob-text-2xl ob-text-center">Trending stories</h4>
                    <div className="ob-flex ob-flex-wrap">
                        { cardElements }
                    </div>
                </div>
            ) }
        </LayoutPage>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const postSlug: string = context.params?.slug as string;
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();

    await apolloClient.query<PostQuery>({
        query: POST_QUERY,
        variables: {
            postSlug: postSlug
        }
    });

    await apolloClient.query<ApiNavigationQuery>({
        query: NAVIGATION_QUERY
    });

    await apolloClient.query<ApiFooterQuery>({
        query: FOOTER_QUERY
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
            postSlug: postSlug
        }
    };
};
