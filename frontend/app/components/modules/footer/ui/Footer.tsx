import React from 'react';
import { FooterSocialMediaList } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaList';
import { getBottomNavigationItem } from 'app/components/modules/footer/ui/util/getBottomNavigationItem';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { FooterProps } from 'app/components/modules/footer/domain/FooterProps';
import { getFooterColumns } from 'app/components/modules/footer/ui/util/getFooterColumns';
import { FooterColumnData } from 'app/components/modules/footer/ui/column/domain/FooterColumnData';
import { LocaleSwitcher } from 'app/components/elements/locale-switcher/LocaleSwitcher';

export function Footer(props: FooterProps) {
    const { bottomItemsData, columnsData, socialMediaItemsData } = props;
    const bottomNavigationItems: Array<JSX.Element> = mapWithLast<JSX.Element, CustomLinkData>(
        bottomItemsData,
        getBottomNavigationItem
    );
    const columns: Array<JSX.Element> = mapWithLast<JSX.Element, FooterColumnData>(columnsData, getFooterColumns);

    return (
        <footer>
            <nav className="ob-bg-black ob-text-white ob-pt-8 xl:ob-pt-16 ob-pb-8">
                <div className="ob-container ob-px-4 xl:ob-px-8 ob-mx-auto">
                    <div className="ob-flex ob-flex-wrap">
                        { columns }
                    </div>
                    <div className="ob-flex ob-flex-wrap ob-items-center ob-justify-between ob-pt-4 xl:ob-pt-16">
                        <FooterSocialMediaList socialMediaItems={ socialMediaItemsData }/>
                        <LocaleSwitcher/>
                    </div>
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
