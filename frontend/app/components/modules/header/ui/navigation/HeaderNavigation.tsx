import React from 'react';
import { HeaderNavigationProps } from 'app/components/modules/header/ui/navigation/HeaderNavigationProps';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { getHeaderNavigationLinkItem } from 'app/components/modules/header/ui/navigation/utils/getHeaderNavigationLinkItem';

export function HeaderNavigation(props: HeaderNavigationProps) {
  let blogHeaderNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    blogHeaderNavigationItems = mapWithLast<JSX.Element, CustomLinkData>(props.navigationLinks, getHeaderNavigationLinkItem);
  }

  return (
    <nav className={ props.className }>
      <ul className="ob-flex ob-items-center">
        { blogHeaderNavigationItems }
      </ul>
    </nav>
  );
}
