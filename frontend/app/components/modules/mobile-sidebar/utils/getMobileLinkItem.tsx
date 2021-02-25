import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { CustomLink } from 'app/components/elements/link/CustomLink';
import React from 'react';

export function getMobileLinkItem(linkData: CustomLinkData, index: number, isLast: boolean): JSX.Element {
  const itemGap: string = !isLast ? 'ob-mb-4' : '';

  return (
    <li key={ index }
        className={ itemGap }>
      <CustomLink className="ob-font-serif hover:ob-text-primary ob-transition-colors" { ...linkData } />
    </li>
  );
}
