import { BlogHeader } from 'shared/header/BlogHeader';
import { BlogLayoutPageProps } from 'shared/layouts/page/BlogLayoutPageProps';
import { BlogMobileNavigation } from 'shared/mobile-navigation/BlogMobileNavigation';
import React, { useState } from 'react';
import { BlogFooter } from 'shared/footer/BlogFooter';

export default function BlogLayoutPage(props: BlogLayoutPageProps) {
  const {headerLinks, children, footerData} = props;
  const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(false);

  return (
    <>
      <BlogHeader isMobileNavigationActive={ isMobileNavigationActive }
                  onMobileButtonClick={ setMobileNavigation }
                  navigationLinks={ headerLinks }/>
      <BlogMobileNavigation isActive={ isMobileNavigationActive }
                            onBackgroundClick={ setMobileNavigation }
                            navigationLinks={ headerLinks }/>
      <div className="ob-relative ob-w-full ob-min-h-screen
                      ob-flex ob-flex-col
                      ob-overflow-x-hidden ob-p-4 ob-pt-20">
        <main className="ob-relative ob-w-full ob-flex-1">{ children }</main>
        <BlogFooter { ...footerData }/>
      </div>
    </>
  );
}
