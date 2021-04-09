import React from 'react';
import {CustomLink, CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function getBottomNavigationItem(blogLinkData: CustomLinkData, index: number, isLast: boolean): JSX.Element {
  const margin: string = !isLast ? 'ob-mb-4 xl:ob-mr-6 xl:ob-mb-0' : '';

  return (
    <li key={index} className={margin}>
      <CustomLink className="hover:ob-text-primary ob-transition-colors"
                  target={blogLinkData.target}
                  href={blogLinkData.href}>
        {blogLinkData.value}
      </CustomLink>
    </li>
  );
}
