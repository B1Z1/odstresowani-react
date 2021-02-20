import Head from 'next/head';

export default function AppLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preload" as="font" crossOrigin="" href="/fonts/Sanchez/Sanchez-Italic.woff"/>
        <link rel="preload" as="font" crossOrigin="" href="/fonts/Sanchez/Sanchez-Regular.woff"/>
        <link rel="preload" as="font" crossOrigin="" href="/fonts/Value/value-black-web/value-black.woff"/>
        <link rel="preload" as="font" crossOrigin="" href="/fonts/Value/value-regular-web/value-regular.woff"/>
      </Head>
      { children }
    </>
  );
}
