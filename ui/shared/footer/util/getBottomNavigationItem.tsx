import { BlogLink } from 'shared/ui/item/BlogLink';
import React from 'react';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';

export function getBottomNavigationItem(blogLinkData: BlogLinkData, index: number, isLast: boolean): JSX.Element {
  const margin: string = !isLast ? 'ob-mb-4 lg:ob-mr-6 lg:ob-mb-0' : '';

  return (
    <li key={ index } className={ margin }>
      <BlogLink className="hover:ob-text-primary ob-transition-colors" { ...blogLinkData } />
    </li>
  );
}
