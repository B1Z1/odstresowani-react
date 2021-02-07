import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { BlogLink } from 'shared/ui/item/BlogLink';
import React from 'react';

export function getMobileNavigationLinkItem(linkData: BlogLinkData, index: number, isLast: boolean): JSX.Element {
  const itemGap: string = !isLast ? 'ob-mb-4' : '';

  return (
    <li key={ index }
        className={ itemGap }>
      <BlogLink className="ob-font-serif hover:ob-text-primary ob-transition-colors" { ...linkData } />
    </li>
  );
}
