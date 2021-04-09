import Head from 'next/head';
import {SeoProps} from "./SeoProps";

export function Seo(props: SeoProps) {
    return (
        <Head>
            <title>{ props.title }</title>
            <meta name="description" content={ props.description }/>
            <meta name="keywords" content={ props.keywords }/>

            <meta property="og:url" content={ props.pageUrl }/>
            <meta property="og:type" content={ props.contentType }/>
            <meta property="og:title" content={ props.title }/>
            <meta property="og:description" content={ props.description }/>
            <meta property="og:image" content={ props.imageSrc }/>
        </Head>
    );
}
