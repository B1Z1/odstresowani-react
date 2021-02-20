import React from 'react';
import { BlogHeaderNavigationProps } from 'app/components/modules/navigation/ui/header/navigation/BlogHeaderNavigationProps';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { getBlogHeaderNavigationLinkItem } from 'app/components/modules/navigation/ui/header/navigation/utils/getBlogHeaderNavigationLinkItem';

export function BlogHeaderNavigation(props: BlogHeaderNavigationProps) {
  let blogHeaderNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    blogHeaderNavigationItems = mapWithLast<JSX.Element, CustomLinkData>(props.navigationLinks, getBlogHeaderNavigationLinkItem);
  }

  return (
    <nav className={ props.className }>
      <ul className="ob-flex ob-items-center">
        { blogHeaderNavigationItems }
      </ul>
    </nav>
  );
}
