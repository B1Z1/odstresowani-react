import React from 'react';
import {FooterColumnData} from "../column/FooterColumnData";
import {FooterColumnType} from "../column/FooterColumnType";
import {FooterColumn} from "../column/FooterColumn";

export function getFooterColumns(columnData: FooterColumnData, index: number): JSX.Element {
  const className: string = 'ob-w-full xl:ob-w-1/4 ob-px-2 ob-mb-4 xl:ob-mb-0';

  switch (columnData.type) {
    case FooterColumnType.EMPTY:
      return <div key={index} className={className}/>;
    case FooterColumnType.WITH_TITLE:
      return <FooterColumn key={index}
                           className={className}
                           title={columnData.title}
                           items={columnData.items}/>;
    case FooterColumnType.WITHOUT_TITLE:
      return <FooterColumn key={index}
                           className={className}
                           items={columnData.items}/>;
  }
}
