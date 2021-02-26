import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { POST_QUERY } from 'app/modules/post/queries/postQuery';
import { PostQuery } from 'app/modules/post/domain/PostQuery';
import { ParsedUrlQuery } from 'querystring';
import LayoutPage from 'app/components/layouts/page/LayoutPage';
import { useLayout } from 'app/modules/layout/hooks/useLayout';
import styles from 'pages/post/Post.module.scss';
import { Signature } from 'app/components/elements/sygnature/Signature';
import { PostDate } from 'app/components/elements/post-date/PostDate';
import { CustomLinkBordered } from 'app/components/elements/link/bordered/CustomLinkBordered';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-brands-svg-icons';
import { usePost } from 'app/modules/post/hooks/usePost';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CardData } from 'app/components/elements/card/CardData';
import { getPostCardColumn } from 'app/utils/getters/getPostCardColumn';
import { PostContent } from 'app/modules/post/components/content/PostContent';
import { PostContentType } from 'app/modules/post/components/content/PostContentType';
import ReactMarkdown from 'react-markdown';

export default function Post({postId}: { postId: string }) {
    const {footerData, navigationData} = useLayout();
    const {trendingStories, creationDate, creator, coverImage, content, title} = usePost(postId);
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(trendingStories, getPostCardColumn);
    const convertedContent: Array<JSX.Element> = content.map((postContent: PostContent) => {
        switch (postContent.__typename) {
            case PostContentType.BANNER:
                return (
                    <figure className="ob-relative ob-w-full ob-h-screen xl:ob-h-60">
                        <img
                            className="ob-object-cover ob-w-full ob-h-full"
                            src={ postContent.image.url }
                            alt={ postContent.image.alternativeText }
                        />
                    </figure>
                );
            case PostContentType.TEXT: {
                return (
                    <div
                        className={ `ob-relative ob-text-center ob-mx-auto ${ styles['ob-post__content-container'] }` }>
                        <ReactMarkdown source={ postContent.content }/>
                    </div>
                );
            }
        }
    });

    return (
        <LayoutPage navigationItemsData={ navigationData }
                    footerData={ footerData }>
            <figure className={ `ob-relative ob-w-full ${ styles['ob-post__banner'] }` }>
                <img className="ob-object-cover ob-w-full ob-h-full"
                     src={ `/api/${ coverImage.url }` }
                     alt={ coverImage.alternativeText }
                />
            </figure>

            <div
                className={ `ob-relative ob-bg-white xl:ob--mt-16 ob-py-12 ob-mx-auto ob-text-center ${ styles['ob-post__content-container'] }` }>
                <div className="ob-absolute ob-top-0 ob-left-1/2
                                ob-flex ob-items-center ob-justify-center
                                ob-w-14 ob-h-14
                                ob-bg-white ob-rounded-full
                                ob-transform ob--translate-x-1/2 ob--translate-y-1/2">
                    <Signature className="ob-w-8 ob-h-8"/>
                </div>
                <h1 className="ob-text-4xl ob-pb-14">
                    { title }
                </h1>
                <PostDate
                    className="ob-text-secondary ob-fill-secondary ob-justify-center"
                    date={ creationDate }
                />
            </div>

            { convertedContent }

            <div
                className={ `ob-relative ob-mb-16 ob-mx-auto ${ styles['ob-post__content-container'] }` }>
                <div className="ob-flex ob-justify-center ob-mb-16">
                    <CustomLinkBordered className="ob-flex ob-font-bold ob-text-lg ob-mr-8" href="/">
                        <FontAwesomeIcon className="ob-w-3 ob-mr-4" icon={ fas['faFacebookF'] }/>
                        share
                    </CustomLinkBordered>
                    <CustomLinkBordered className="ob-flex ob-font-bold ob-text-lg" href="/">
                        <FontAwesomeIcon className="ob-w-5 ob-mr-4" icon={ fas['faTwitter'] }/>
                        share
                    </CustomLinkBordered>
                </div>
            </div>

            <div className={ `ob-mx-auto ob-text-center ob-mb-32 ${ styles['ob-post__author-container'] }` }>
                <h4 className="ob-font-base ob-text-secondary ob-font-bold ob-mb-8">
                    Author:
                </h4>
                <figure className="ob-relative ob-rounded-full ob-w-20 ob-h-20 ob-mb-7 ob-mx-auto ob-overflow-hidden">
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

            <div className="ob-container ob-mx-auto">
                <h4 className="ob-mb-16 ob-text-2xl ob-text-center">Trending stories</h4>
                <div className="ob-flex ob-flex-wrap">
                    { cardElements }
                </div>
            </div>
        </LayoutPage>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const postId: string = context.params?.id as string;
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();

    await apolloClient.query<PostQuery>({
        query: POST_QUERY,
        variables: {
            postId: postId
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
            postId: postId
        }
    };
};
