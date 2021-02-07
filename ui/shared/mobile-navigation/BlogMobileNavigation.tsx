import React from 'react';
import styles from 'shared/mobile-navigation/BlogMobileNavigation.module.scss';
import { BlogMobileNavigationProps } from 'shared/mobile-navigation/BlogMobileNavigationProps';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { getMobileNavigationLinkItem } from 'shared/mobile-navigation/utils/getMobileNavigationLinkItem';


export function BlogMobileNavigation(props: BlogMobileNavigationProps) {
  const onBackgroundClick = () => {
    props.onBackgroundClick(false);
  };
  let blogNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    blogNavigationItems = mapWithLast<JSX.Element, BlogLinkData>(props.navigationLinks, getMobileNavigationLinkItem);
  }

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
