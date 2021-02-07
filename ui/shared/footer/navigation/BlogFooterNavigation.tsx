import React from 'react';
import { BlogFooterNavigationProps } from 'shared/footer/navigation/BlogFooterNavigationProps';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { getNavigationItemBySize } from 'shared/footer/navigation/utils/getNavigationItemBySize';

export function BlogFooterNavigation(props: BlogFooterNavigationProps) {
  let firstColumnLinks: Array<JSX.Element> = [];
  let secondColumnLinks: Array<JSX.Element> = [];
  let thirdColumnLinks: Array<JSX.Element> = [];

  if (props && props.firstColumnLinks) {
    firstColumnLinks = mapWithLast<JSX.Element, BlogLinkData>(
      props.firstColumnLinks,
      (value, index, isLast) => getNavigationItemBySize(value, index, isLast, true)
    );
  }

  if (props && props.secondColumnLinks) {
    secondColumnLinks = mapWithLast<JSX.Element, BlogLinkData>(props.secondColumnLinks, getNavigationItemBySize);
  }

  if (props && props.thirdColumnLinks) {
    thirdColumnLinks = mapWithLast<JSX.Element, BlogLinkData>(props.thirdColumnLinks, getNavigationItemBySize);
  }

  return (
    <div className={ `${ props.className } ob-flex ob-flex-wrap ob-mx-auto` }>
      <ul className="ob-w-full xl:ob-w-1/4
                     ob-mb-4 xl:ob-mb-0">
        { firstColumnLinks }
      </ul>

      <div className="ob-w-full xl:ob-w-1/4 xl:ob-offset-1/4
                      ob-pr-4 ob-mb-4 xl:ob-mb-0">
        <h4 className="ob-font-base ob-font-bold ob-mb-4">Strefa Terapeuty:</h4>
        <ul>
          { secondColumnLinks }
        </ul>
      </div>

      <div className="ob-w-full xl:ob-w-1/4">
        <h4 className="ob-font-base ob-font-bold ob-mb-4">Strefa użytkownika:</h4>
        <ul>
          { thirdColumnLinks }
        </ul>
      </div>
    </div>
  );
}
