import React from 'react';
import { BlogHeaderMobileButton } from 'shared/navigation/ui/header/mobile-button/BlogHeaderMobileButton';
import { BlogHeaderLogo } from 'shared/navigation/ui/header/logo/BlogHeaderLogo';
import { BlogHeaderOdstresowaniLink } from 'shared/navigation/ui/header/odstresowani-link/BlogHeaderOdstresowaniLink';
import { BlogHeaderNavigation } from 'shared/navigation/ui/header/navigation/BlogHeaderNavigation';
import { BlogHeaderProps } from 'shared/navigation/ui/header/BlogHeaderProps';
import { useNavigationQuery } from 'shared/navigation/resource/useNavigationQuery';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';

export function BlogHeader(props: BlogHeaderProps) {
  const navigationLinks: Array<BlogLinkData> = useNavigationQuery();

  const onMobileButtonClick = () => {
    props.onMobileButtonClick(!props.isMobileNavigationActive);
  };

  return (
    <header
      className="ob-fixed ob-top-0 ob-right-0 ob-left-0
                 ob-flex ob-justify-between ob-items-center
                 ob-px-6 ob-py-4 ob-border-b ob-border-secondary ob-bg-white ob-z-50">
      <div className="ob-w-auto xl:ob-w-1/6">
        <BlogHeaderLogo/>
      </div>
      <BlogHeaderNavigation navigationLinks={ navigationLinks }
                            className="ob-hidden xl:ob-block ob-container ob-mx-auto"/>
      <BlogHeaderOdstresowaniLink className="ob-hidden xl:ob-block ob-w-auto xl:ob-w-1/6"/>
      <BlogHeaderMobileButton onClick={ onMobileButtonClick } className="ob-block xl:ob-hidden"/>
    </header>
  );
}
