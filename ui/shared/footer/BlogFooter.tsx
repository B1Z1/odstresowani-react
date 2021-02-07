import { BlogFooterProps } from 'shared/footer/BlogFooterProps';
import React from 'react';
import { BlogFooterNavigation } from 'shared/footer/navigation/BlogFooterNavigation';
import { BlogFooterSocialMediaList } from 'shared/footer/social-media-list/BlogFooterSocialMediaList';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { getBottomNavigationItem } from 'shared/footer/util/getBottomNavigationItem';

export function BlogFooter(props: BlogFooterProps) {
  let bottomNavigationItems: Array<JSX.Element> = [];

  if (props && props.bottomRightLinks) {
    bottomNavigationItems = mapWithLast<JSX.Element, BlogLinkData>(props.bottomRightLinks, getBottomNavigationItem);
  }

  return (
    <footer>
      <nav className="ob-bg-black ob-text-white ob-pt-8 lg:ob-pt-16 ob-pb-8">
        <div className="ob-container ob-px-4 lg:ob-px-8 ob-mx-auto">
          <BlogFooterNavigation className="ob-mb-6"
                                firstColumnLinks={ props.firstColumnLinks }
                                secondColumnLinks={ props.secondColumnLinks }
                                thirdColumnLinks={ props.thirdColumnLinks }/>
          <BlogFooterSocialMediaList socialMediaItems={ props.socialMediaItems }/>
        </div>
      </nav>
      <div className="ob-container lg:ob-flex ob-justify-between ob-mx-auto ob-px-4 lg:ob-px-8 ob-pt-4 lg:ob-pt-7 lg:ob-pb-6">
        <p className="ob-font-bold ob-mb-4 lg:ob-mb-0">© 2018 Odstresowani.pl All rights reserved.</p>

        <ul className="lg:ob-flex">
          { bottomNavigationItems }
        </ul>
      </div>
    </footer>
  );
}
