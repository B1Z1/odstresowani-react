import React from 'react';
import styles from './MobileSidebar.module.scss';
import {mapWithLast} from "@globalx-solutions/util";
import {getMobileLinkItem} from "./utils/getMobileLinkItem";
import {MobileSidebarProps} from "./MobileSidebarProps";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function MobileSidebar(props: MobileSidebarProps) {
  const navigationBlogLinksData: Array<CustomLinkData> = props.navigationItemsData;
  const blogNavigationItems: Array<JSX.Element> = mapWithLast<JSX.Element, CustomLinkData>(
    navigationBlogLinksData,
    getMobileLinkItem
  );

  const onBackgroundClick = () => {
    props.onBackgroundClick(false);
  };

  return (
    <nav className={`
          ${props.isActive ? styles['ob-blog-mobile-navigation--active'] : ''}
          ${styles['ob-blog-mobile-navigation']}
          xl:ob-hidden
          ob-fixed ob-top-0 ob-left-0
          ob-w-screen ob-h-screen ob-z-40
    `}>
      <div onClick={onBackgroundClick}
           className="ob-bg-black ob-opacity-50
                      ob-absolute ob-top-0 ob-left-0
                      ob-w-full ob-h-full">
      </div>
      <ul className={`
          ${styles['ob-blog-mobile-navigation__list']}
          ob-blog-mobile-navigation__list
          ob-bg-white
          ob-w-1/2 ob-h-full
          ob-pt-24 ob-px-4
          ob-absolute ob-top-0 ob-left-1/2
      `}>
        {blogNavigationItems}
      </ul>
    </nav>
  );
}
