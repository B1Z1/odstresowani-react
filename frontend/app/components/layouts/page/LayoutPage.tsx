import { BlogHeader } from 'app/components/modules/header/BlogHeader';
import { LayoutPageProps } from 'app/components/layouts/page/LayoutPageProps';
import { BlogMobileSidebar } from 'app/components/modules/mobile-sidebar/BlogMobileSidebar';
import React, { useState } from 'react';
import { Footer } from 'app/components/modules/footer/ui/Footer';

export default function LayoutPage(props: LayoutPageProps) {
    const {children, navigationItemsData, footerData} = props;
    const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(false);

    return (
        <>
            <BlogHeader navigationItemsData={ navigationItemsData }
                        isMobileNavigationActive={ isMobileNavigationActive }
                        onMobileButtonClick={ setMobileNavigation }/>
            <BlogMobileSidebar navigationItemsData={ navigationItemsData }
                               isActive={ isMobileNavigationActive }
                               onBackgroundClick={ setMobileNavigation }/>
            <div className="ob-relative ob-w-full ob-min-h-screen
                      ob-flex ob-flex-col
                      ob-overflow-x-hidden ob-p-4 ob-pt-20">
                <main className="ob-relative ob-w-full ob-flex-1">{ children }</main>
                { footerData ? <Footer { ...footerData } /> : null }
            </div>
        </>
    );
}
