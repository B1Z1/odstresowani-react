import React from 'react';
import { BlogHeaderNavigationProps } from 'shared/header/navigation/BlogHeaderNavigationProps';
import { BlogLinkProps } from 'shared/ui/item/BlogLinkProps';
import { BlogLink } from 'shared/ui/item/BlogLink';
import styles from 'shared/mobile-navigation/BlogMobileNavigation.module.scss';

export function BlogMobileNavigation(props: BlogHeaderNavigationProps) {
  const onBackgroundClick = () => {
    props.onBackgroundClick(false);
  };
  let blogNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    const {navigationLinks} = props;

    blogNavigationItems = navigationLinks.map((item: BlogLinkProps, index: number) => {
      const isLast: boolean = index === navigationLinks.length - 1;
      const itemGap: string = !isLast ? 'ob-mb-4' : '';

      return (
        <li key={ index }
            className={ itemGap }>
          <BlogLink { ...item } />
        </li>
      );
    });
  }

  return (
    <nav className={ `
          ${ props.isActive ? styles['ob-blog-mobile-navigation--active'] : '' }
          ${ styles['ob-blog-mobile-navigation'] }
          lg:ob-hidden
          ob-fixed ob-top-0 ob-left-0
          ob-w-screen ob-h-screen
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
