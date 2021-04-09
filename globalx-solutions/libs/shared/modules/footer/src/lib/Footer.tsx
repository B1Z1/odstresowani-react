import React from 'react';
import {mapWithLast} from "@globalx-solutions/util";
import {getBottomNavigationItem} from "./util/getBottomNavigationItem";
import {FooterColumnData} from "./column/FooterColumnData";
import {FooterSocialMediaList} from "./social-media-list/FooterSocialMediaList";
import {getFooterColumns} from "./util/getFooterColumns";
import {FooterProps} from "./FooterProps";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function Footer(props: FooterProps) {
  const {bottomItemsData, columnsData, socialMediaItemsData} = props;
  const bottomNavigationItems: Array<JSX.Element> = mapWithLast<JSX.Element, CustomLinkData>(
    bottomItemsData,
    getBottomNavigationItem
  );
  const columns: Array<JSX.Element> = mapWithLast<JSX.Element, FooterColumnData>(columnsData, getFooterColumns);

  return (
    <footer>
      <nav className="ob-bg-black ob-text-white ob-pt-8 xl:ob-pt-16 ob-pb-8">
        <div className="ob-container ob-px-4 xl:ob-px-8 ob-mx-auto">
          <div className="ob-flex ob-flex-wrap ob--mx-2">
            {columns}
          </div>
          <FooterSocialMediaList socialMediaItems={socialMediaItemsData}/>
        </div>
      </nav>

      <div
        className="ob-container xl:ob-flex ob-justify-between ob-mx-auto ob-px-4 xl:ob-px-8 ob-pt-4 xl:ob-pt-7 xl:ob-pb-6">
        <p className="ob-font-bold ob-mb-4 xl:ob-mb-0">© 2018 Odstresowani.pl All rights reserved.</p>

        <ul className="xl:ob-flex">
          {bottomNavigationItems}
        </ul>
      </div>
    </footer>
  );
}
