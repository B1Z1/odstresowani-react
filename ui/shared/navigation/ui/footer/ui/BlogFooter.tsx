import React from 'react';
import { BlogFooterNavigation } from 'shared/navigation/ui/footer/ui/navigation/BlogFooterNavigation';
import { BlogFooterSocialMediaList } from 'shared/navigation/ui/footer/ui/social-media-list/BlogFooterSocialMediaList';
import { useFooterQuery } from 'shared/navigation/ui/footer/resource/useFooterQuery';
import { getBottomNavigationItem } from 'shared/navigation/ui/footer/ui/util/getBottomNavigationItem';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';

export function BlogFooter() {
  const {
    leftSideNavigation,
    middleSideNavigation,
    rightSideNavigation,
    bottomSideNavigation,
    socialMediaNavigation
  } = useFooterQuery();
  const bottomNavigationItems: Array<JSX.Element> = mapWithLast<JSX.Element, BlogLinkData>(
    bottomSideNavigation,
    getBottomNavigationItem
  );

  return (
    <footer>
      <nav className="ob-bg-black ob-text-white ob-pt-8 xl:ob-pt-16 ob-pb-8">
        <div className="ob-container ob-px-4 xl:ob-px-8 ob-mx-auto">
          <BlogFooterNavigation className="ob-mb-6"
                                firstColumnLinks={ leftSideNavigation }
                                secondColumnLinks={ middleSideNavigation }
                                thirdColumnLinks={ rightSideNavigation }/>
          <BlogFooterSocialMediaList socialMediaItems={ socialMediaNavigation }/>
        </div>
      </nav>
      <div
        className="ob-container xl:ob-flex ob-justify-between ob-mx-auto ob-px-4 xl:ob-px-8 ob-pt-4 xl:ob-pt-7 xl:ob-pb-6">
        <p className="ob-font-bold ob-mb-4 xl:ob-mb-0">© 2018 Odstresowani.pl All rights reserved.</p>

        <ul className="xl:ob-flex">
          { bottomNavigationItems }
        </ul>
      </div>
    </footer>
  );
}
