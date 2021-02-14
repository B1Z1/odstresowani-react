import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { BlogLink } from 'shared/ui/link/BlogLink';
import React from 'react';

export function getMobileLinkItem(linkData: BlogLinkData, index: number, isLast: boolean): JSX.Element {
  const itemGap: string = !isLast ? 'ob-mb-4' : '';

  return (
    <li key={ index }
        className={ itemGap }>
      <BlogLink className="ob-font-serif hover:ob-text-primary ob-transition-colors" { ...linkData } />
    </li>
  );
}
