import React from 'react';
import { HeaderMobileButton } from 'app/components/modules/header/ui/mobile-button/HeaderMobileButton';
import { HeaderLogo } from 'app/components/modules/header/ui/logo/HeaderLogo';
import { HeaderOdstresowaniLink } from 'app/components/modules/header/ui/odstresowani-link/HeaderOdstresowaniLink';
import { HeaderNavigation } from 'app/components/modules/header/ui/navigation/HeaderNavigation';
import { HeaderProps } from 'app/components/modules/header/ui/HeaderProps';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

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
            <HeaderNavigation navigationLinks={ navigationItems }
                              className="ob-hidden xl:ob-block ob-container ob-mx-auto"/>
            <HeaderOdstresowaniLink className="ob-hidden xl:ob-block ob-w-auto xl:ob-w-1/6"/>
            <HeaderMobileButton onClick={ onMobileButtonClick } className="ob-block xl:ob-hidden"/>
        </header>
    );
}
