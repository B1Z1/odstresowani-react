import {PageLayoutProps} from "./PageLayoutProps";
import {useState} from "react";
import {Header} from "../../../../modules/header/src/lib/Header";
import {MobileSidebar} from "../../../../modules/mobile-sidebar/src/lib/MobileSidebar";
import {Footer} from "../../../../modules/footer/src/lib/Footer";
import {Seo} from "@globalx-solutions/shared/elements/seo";

export default function PageLayout(props: PageLayoutProps) {
  const {children, navigationItemsData, footerData, seoData} = props;
  const [isMobileNavigationActive, setMobileNavigation] = useState<boolean>(false);

  return (
    <>
      <Seo  {...seoData} />
      <Header navigationItemsData={navigationItemsData}
              isMobileNavigationActive={isMobileNavigationActive}
              onMobileButtonClick={setMobileNavigation}/>
      <MobileSidebar navigationItemsData={navigationItemsData}
                     isActive={isMobileNavigationActive}
                     onBackgroundClick={setMobileNavigation}/>
      <div className="ob-relative ob-w-full ob-min-h-screen
                      ob-flex ob-flex-col
                      ob-overflow-x-hidden ob-p-4 ob-pt-20">
        <main className="ob-relative ob-w-full ob-flex-1">{children}</main>
        {footerData ? <Footer {...footerData} /> : null}
      </div>
    </>
  );
}
