import { Header } from 'app/components/modules/header/ui/Header';
import { LayoutPageProps } from 'app/components/layouts/page/LayoutPageProps';
import { MobileSidebar } from 'app/components/modules/mobile-sidebar/MobileSidebar';
import React, { useState } from 'react';
import { Footer } from 'app/components/modules/footer/ui/Footer';

export default function LayoutPage(props: LayoutPageProps) {
    const {children, navigationItemsData, footerData} = props;
    const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(false);

    return (
        <>
            <Header navigationItemsData={ navigationItemsData }
                    isMobileNavigationActive={ isMobileNavigationActive }
                    onMobileButtonClick={ setMobileNavigation }/>
            <MobileSidebar navigationItemsData={ navigationItemsData }
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
