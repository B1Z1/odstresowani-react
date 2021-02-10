import { BlogHeader } from 'shared/navigation/ui/header/BlogHeader';
import { BlogLayoutPageProps } from 'shared/layouts/page/BlogLayoutPageProps';
import { BlogMobileSidebar } from 'shared/navigation/ui/mobile-sidebar/BlogMobileSidebar';
import React, { useState } from 'react';
import { BlogFooter } from 'shared/navigation/ui/footer/ui/BlogFooter';

export default function BlogLayoutPage(props: BlogLayoutPageProps) {
  const {children} = props;
  const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(false);

  return (
    <>
      <BlogHeader isMobileNavigationActive={ isMobileNavigationActive }
                  onMobileButtonClick={ setMobileNavigation }/>
      <BlogMobileSidebar isActive={ isMobileNavigationActive }
                         onBackgroundClick={ setMobileNavigation }/>
      <div className="ob-relative ob-w-full ob-min-h-screen
                      ob-flex ob-flex-col
                      ob-overflow-x-hidden ob-p-4 ob-pt-20">
        <main className="ob-relative ob-w-full ob-flex-1">{ children }</main>
        <BlogFooter/>
      </div>
    </>
  );
}
