import { Seo } from '@globalx-solutions/shared/elements/seo';
import { Footer } from '@globalx-solutions/shared/modules/footer';
import { Header } from '@globalx-solutions/shared/modules/header';
import { MobileSidebar } from '@globalx-solutions/shared/modules/mobile-sidebar';
import { useState } from 'react';
import { PageLayoutProps } from './PageLayoutProps';

export function PageLayout(props: PageLayoutProps) {
  const { children, navigationItemsData, footerData, seoData } = props;
  const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(
    false
  );

  return (
    <>
      <Seo {...seoData} />
      <Header
        navigationItemsData={navigationItemsData}
        isMobileNavigationActive={isMobileNavigationActive}
        onMobileButtonClick={setMobileNavigation}
      />
      <MobileSidebar
        navigationItemsData={navigationItemsData}
        isActive={isMobileNavigationActive}
        onBackgroundClick={setMobileNavigation}
      />
      <div
        className="ob-relative ob-w-full ob-min-h-screen
                      ob-flex ob-flex-col
                      ob-overflow-x-hidden ob-p-4 ob-pt-20"
      >
        <main className="ob-relative ob-w-full ob-flex-1">{children}</main>
        {footerData ? <Footer {...footerData} /> : null}
      </div>
    </>
  );
}
