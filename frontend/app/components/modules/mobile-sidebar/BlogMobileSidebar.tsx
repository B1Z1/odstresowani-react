import React from 'react';
import styles from 'app/components/modules/mobile-sidebar/BlogMobileSidebar.module.scss';
import { BlogMobileSidebarProps } from 'app/components/modules/mobile-sidebar/BlogMobileSidebarProps';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { getMobileLinkItem } from 'app/components/modules/mobile-sidebar/utils/getMobileLinkItem';


export function BlogMobileSidebar(props: BlogMobileSidebarProps) {
    const navigationBlogLinksData: Array<CustomLinkData> = props.navigationItemsData;
    const blogNavigationItems: Array<JSX.Element> = mapWithLast<JSX.Element, CustomLinkData>(navigationBlogLinksData, getMobileLinkItem);

    const onBackgroundClick = () => {
        props.onBackgroundClick(false);
    };

    return (
        <nav className={ `
          ${ props.isActive ? styles['ob-blog-mobile-navigation--active'] : '' }
          ${ styles['ob-blog-mobile-navigation'] }
          xl:ob-hidden
          ob-fixed ob-top-0 ob-left-0
          ob-w-screen ob-h-screen ob-z-40
    ` }>
            <div onClick={ onBackgroundClick }
                 className="ob-bg-black ob-opacity-50
                      ob-absolute ob-top-0 ob-left-0
                      ob-w-full ob-h-full">
            </div>
            <ul className={ `
          ${ styles['ob-blog-mobile-navigation__list'] }
          ob-blog-mobile-navigation__list
          ob-bg-white
          ob-w-1/2 ob-h-full
          ob-pt-24 ob-px-4
          ob-absolute ob-top-0 ob-left-1/2
      ` }>
                { blogNavigationItems }
            </ul>
        </nav>
    );
}
