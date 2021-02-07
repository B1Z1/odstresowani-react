import React from 'react';
import { BlogHeaderMobileButton } from 'shared/header/mobile-button/BlogHeaderMobileButton';
import { BlogHeaderLogo } from 'shared/header/logo/BlogHeaderLogo';
import { BlogHeaderOdstresowaniLink } from 'shared/header/odstresowani-link/BlogHeaderOdstresowaniLink';
import { BlogHeaderNavigation } from 'shared/header/navigation/BlogHeaderNavigation';
import { BlogHeaderProps } from 'shared/header/BlogHeaderProps';

export function BlogHeader(props: BlogHeaderProps) {
  const onMobileButtonClick = () => {
    props.onMobileButtonClick(!props.isMobileNavigationActive);
  };

  return (
    <header
      className="ob-fixed ob-top-0 ob-left-0
                 ob-w-screen
                 ob-flex ob-justify-between ob-items-center lg:ob-justify-start
                 ob-px-6 ob-py-4 ob-border-b ob-border-secondary ob-bg-white ob-z-20">
      <div className="ob-w-auto lg:ob-w-1/6">
        <BlogHeaderLogo/>
      </div>
      <BlogHeaderNavigation navigationLinks={ props.navigationLinks }
                            className="ob-hidden lg:ob-block ob-w-4/6"/>
      <BlogHeaderOdstresowaniLink className="ob-hidden lg:ob-block lg:ob-w-1/6"/>
      <BlogHeaderMobileButton onClick={ onMobileButtonClick } className="ob-block lg:ob-hidden"/>
    </header>
  );
}
