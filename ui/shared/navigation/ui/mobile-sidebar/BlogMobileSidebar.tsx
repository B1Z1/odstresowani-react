import React from 'react';
import styles from 'shared/navigation/ui/mobile-sidebar/BlogMobileSidebar.module.scss';
import { BlogMobileSidebarProps } from 'shared/navigation/ui/mobile-sidebar/BlogMobileSidebarProps';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { getMobileLinkItem } from 'shared/navigation/ui/mobile-sidebar/utils/getMobileLinkItem';
import { useNavigationQuery } from 'shared/navigation/resource/useNavigationQuery';


export function BlogMobileSidebar(props: BlogMobileSidebarProps) {
  const navigationLinks: Array<BlogLinkData> = useNavigationQuery();
  const blogNavigationItems: Array<JSX.Element> = mapWithLast<JSX.Element, BlogLinkData>(navigationLinks, getMobileLinkItem);

  const onBackgroundClick = () => {
    props.onBackgroundClick(false);
  };

  return (
    <nav className={ `
          ${ props.isActive ? styles['ob-blog-mobile-sidebar-navigation--active'] : '' }
          ${ styles['ob-blog-mobile-sidebar-navigation'] }
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
          ${ styles['ob-blog-mobile-sidebar-navigation__list'] }
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
