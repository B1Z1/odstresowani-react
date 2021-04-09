import React from 'react';
import {mapWithLast} from "@globalx-solutions/util";
import {FooterColumnProps} from "./FooterColumnProps";
import {CustomLink, CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function FooterColumn(props: FooterColumnProps) {
  const {items, title} = props;
  const withTitle: boolean = !!title;
  const linkItems: Array<JSX.Element> = mapWithLast<JSX.Element, CustomLinkData>(
    items,
    (value, index, isLast) => {
      const bottomMargin: string = !isLast ? 'ob-mb-2' : '';
      const fontSize: string = !withTitle ? 'ob-text-xl' : '';

      return (
        <li key={index}
            className={bottomMargin}>
          <CustomLink
            href={value.href}
            target={value.target}
            className={`${fontSize} ob-text-white hover:ob-opacity-50 ob-transition-opacity`}>
            {value.value}
          </CustomLink>
        </li>
      );
    }
  );

  if (withTitle) {
    return (
      <div className="ob-w-full xl:ob-w-1/4 ob-pr-4 ob-mb-4 xl:ob-mb-0">
        <h4 className="ob-font-base ob-font-bold ob-mb-4">{title}</h4>
        <ul>
          {linkItems}
        </ul>
      </div>
    );
  }

  return (
    <ul className="ob-w-full xl:ob-w-1/4 ob-mb-4 xl:ob-mb-0">
      {linkItems}
    </ul>
  );
}
