import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { BlogLink } from 'shared/ui/item/BlogLink';
import React from 'react';

export function getBlogHeaderNavigationLinkItem(value: BlogLinkData, index: number, isLast: boolean): JSX.Element {
  const itemGap: string = !isLast ? 'ob-mr-8' : '';

  return (
    <li key={ index }
        className={ itemGap }>
      <BlogLink className="ob-font-serif hover:ob-text-primary ob-transition-colors" { ...value } />
    </li>
  );
}
