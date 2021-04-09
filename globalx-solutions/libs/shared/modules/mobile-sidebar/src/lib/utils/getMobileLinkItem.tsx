import React from 'react';
import {CustomLink, CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function getMobileLinkItem(linkData: CustomLinkData, index: number, isLast: boolean): JSX.Element {
  const itemGap: string = !isLast ? 'ob-mb-4' : '';

  return (
    <li key={index}
        className={itemGap}>
      <CustomLink className="ob-font-serif hover:ob-text-primary ob-transition-colors" href={linkData.href}>
        {linkData.value}
      </CustomLink>
    </li>
  );
}
