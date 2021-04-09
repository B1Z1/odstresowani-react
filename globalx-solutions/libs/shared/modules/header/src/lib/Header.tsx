import React from 'react';
import {HeaderLogo} from "./logo/HeaderLogo";
import {HeaderNavigation} from "./navigation/HeaderNavigation";
import {HeaderOdstresowaniLink} from "./odstresowani-link/HeaderOdstresowaniLink";
import {HeaderMobileButton} from "./mobile-button/HeaderMobileButton";
import {HeaderProps} from "./HeaderProps";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function Header(props: HeaderProps) {
  const navigationItems: Array<CustomLinkData> = props.navigationItemsData;

  const onMobileButtonClick = () => {
    props.onMobileButtonClick(!props.isMobileNavigationActive);
  };

  return (
    <header
      className="ob-fixed ob-top-0 ob-right-0 ob-left-0
                 ob-flex ob-justify-between ob-items-center
                 ob-px-6 ob-py-4
                 ob-border-b ob-border-secondary ob-bg-white ob-z-50">
      <div className="ob-w-auto xl:ob-w-1/6">
        <HeaderLogo/>
      </div>
      <HeaderNavigation navigationLinks={navigationItems}
                        className="ob-hidden xl:ob-block ob-container ob-mx-auto"/>
      <HeaderOdstresowaniLink className="ob-hidden xl:ob-block ob-w-auto xl:ob-w-1/6"/>
      <HeaderMobileButton onClick={onMobileButtonClick} className="ob-block xl:ob-hidden"/>
    </header>
  );
}
