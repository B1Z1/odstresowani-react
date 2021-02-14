import React from 'react';
import { BlogHeaderNavigationProps } from 'shared/navigation/ui/header/navigation/BlogHeaderNavigationProps';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { getBlogHeaderNavigationLinkItem } from 'shared/navigation/ui/header/navigation/utils/getBlogHeaderNavigationLinkItem';

export function BlogHeaderNavigation(props: BlogHeaderNavigationProps) {
  let blogHeaderNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    blogHeaderNavigationItems = mapWithLast<JSX.Element, BlogLinkData>(props.navigationLinks, getBlogHeaderNavigationLinkItem);
  }

  return (
    <nav className={ props.className }>
      <ul className="ob-flex ob-items-center">
        { blogHeaderNavigationItems }
      </ul>
    </nav>
  );
}
