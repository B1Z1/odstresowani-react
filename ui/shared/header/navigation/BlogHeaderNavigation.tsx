import React from 'react';
import { BlogHeaderNavigationProps } from 'shared/header/navigation/BlogHeaderNavigationProps';
import { BlogLink } from 'shared/ui/item/BlogLink';
import { BlogLinkProps } from 'shared/ui/item/BlogLinkProps';

export function BlogHeaderNavigation(props: BlogHeaderNavigationProps) {
  let blogHeaderNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    const {navigationLinks} = props;

    blogHeaderNavigationItems = navigationLinks.map((item: BlogLinkProps, index: number) => {
      const isLast: boolean = index === navigationLinks.length - 1;
      const itemGap: string = !isLast ? 'ob-mr-8' : '';

      return (
        <li key={ index }
            className={ itemGap }>
          <BlogLink { ...item } />
        </li>
      );
    });
  }

  return (
    <nav className={ props.className }>
      <ul className="ob-flex ob-items-center">
        { blogHeaderNavigationItems }
      </ul>
    </nav>
  );
}
