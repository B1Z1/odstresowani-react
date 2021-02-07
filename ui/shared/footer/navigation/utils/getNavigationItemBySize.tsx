import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { BlogLink } from 'shared/ui/item/BlogLink';
import React from 'react';

export function getNavigationItemBySize(linkData: BlogLinkData, index: number, isLast: boolean, isBigSize: boolean = false): JSX.Element {
  const bottomMargin: string = !isLast ? 'ob-mb-2' : '';
  const fontSize: string = isBigSize ? 'ob-text-xl' : '';

  return (
    <li key={ index }
        className={ bottomMargin }>
      <BlogLink className={ `${ fontSize } ob-text-white hover:ob-opacity-50 ob-transition-opacity` } { ...linkData } />
    </li>
  );
}
