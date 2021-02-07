import Head from 'next/head';
import BlogLayoutPage from 'shared/layouts/page/BlogLayoutPage';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { BlogFooterData } from 'shared/footer/BlogFooterData';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const headerLinks: Array<BlogLinkData> = [
    {
      value: 'Artykuły',
      href: '/#'
    },
    {
      value: 'Recenzje',
      href: '/#'
    }
  ];
  const footerData: BlogFooterData = {
    firstColumnLinks: [
      {
        value: 'Odstresowani',
        href: '/#'
      },
      {
        value: 'Aktywuj Program',
        href: '/#'
      },
      {
        value: 'Kontakt z Autorami Bloga',
        href: '/#'
      }
    ],
    secondColumnLinks: [
      {
        value: 'Logowanie/Rejestracja',
        href: '/#'
      },
      {
        value: 'Dashboard',
        href: '/#'
      },
      {
        value: 'Regulamin',
        href: '/#'
      }
    ],
    thirdColumnLinks: [
      {
        value: 'Logowanie/Rejestracja',
        href: '/#'
      },
      {
        value: 'Dashboard',
        href: '/#'
      },
      {
        value: 'Regulamin',
        href: '/#'
      }
    ],
    socialMediaItems: [
      {
        icon: faFacebookSquare,
        href: '/#'
      },
      {
        icon: faTwitterSquare,
        href: '/#'
      },
      {
        icon: faInstagramSquare,
        href: '/#'
      },
      {
        icon: faLinkedin,
        href: '/#'
      }
    ],
    bottomRightLinks: [
      {
        value: 'Polityka prywatności',
        href: '/#'
      },
      {
        value: 'Polityka serwisu',
        href: '/#'
      }
    ]
  };

  return (
    <BlogLayoutPage headerLinks={ headerLinks } footerData={ footerData }>
      <Head>
        <title>Title</title>
      </Head>
    </BlogLayoutPage>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData
//     }
//   };
// };
