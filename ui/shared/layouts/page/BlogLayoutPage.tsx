import { BlogHeader } from 'shared/header/BlogHeader';
import { BlogLayoutPageProps } from 'shared/layouts/page/BlogLayoutPageProps';
import { BlogMobileNavigation } from 'shared/mobile-navigation/BlogMobileNavigation';
import React, { useState } from 'react';

export default function BlogLayoutPage(props: BlogLayoutPageProps) {
  const {navigationLinks, children} = props;
  const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(false);

  return (
    <div className="ob-relative ob-w-full ob-min-h-full ob-overflow-x-hidden">
      <BlogHeader isMobileNavigationActive={ isMobileNavigationActive }
                  onMobileButtonClick={ setMobileNavigation }
                  navigationLinks={ navigationLinks }/>
      <BlogMobileNavigation isActive={ isMobileNavigationActive }
                            onBackgroundClick={ setMobileNavigation }
                            navigationLinks={ navigationLinks }/>
      <main>{ children }</main>
    </div>
  );
}
