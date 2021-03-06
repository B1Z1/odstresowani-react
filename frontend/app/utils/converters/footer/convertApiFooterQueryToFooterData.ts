import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';
import { ApiNavigationFooterColumn } from 'app/api/components/footer/columns/ApiNavigationFooterColumn';
import { ApiNavigationFooterColumnType } from 'app/api/components/footer/columns/ApiNavigationFooterColumnType';
import { FooterColumnType } from 'app/components/modules/footer/ui/column/domain/FooterColumnType';
import { FooterColumnData } from 'app/components/modules/footer/ui/column/domain/FooterColumnData';
import { convertApiNavigationLinkToCustomLinkData } from 'app/utils/converters/custom-link/convertApiNavigationLinkToCustomLinkData';
import { ApiNavigationIconLinkFragment } from 'app/api/components/navigation/icon-link/ApiNavigationIconLinkFragment';
import { FooterSocialMediaItemData } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaItemData';
import * as fas from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';

export function convertApiFooterQueryToFooterData(apiFooterQuery: ApiFooterQuery): FooterData {
    const {bottomNavigation, columns, socialMediaNavigation} = apiFooterQuery.footer;
    const convertedColumns: Array<FooterColumnData> = columns.map((column: ApiNavigationFooterColumn) => {
        let convertedColumn: FooterColumnData;

        switch (column.__typename) {
            case ApiNavigationFooterColumnType.EMPTY:
                convertedColumn = {
                    id: column.id,
                    type: FooterColumnType.EMPTY
                };
                break;
            case ApiNavigationFooterColumnType.WITH_TITLE:
                convertedColumn = {
                    id: column.id,
                    title: column.title,
                    items: column.navigationLink.map((link) => convertApiNavigationLinkToCustomLinkData(link)),
                    type: FooterColumnType.WITH_TITLE
                };
                break;
            case ApiNavigationFooterColumnType.WITHOUT_TITLE:
                convertedColumn = {
                    id: column.id,
                    items: column.navigationLink.map((link) => convertApiNavigationLinkToCustomLinkData(link)),
                    type: FooterColumnType.WITHOUT_TITLE
                };
                break;
        }

        return convertedColumn;
    });
    const convertedSocialMediaNavigation: Array<FooterSocialMediaItemData> =
        socialMediaNavigation.map((socialMediaNavigation: ApiNavigationIconLinkFragment) => {
            return {
                href: socialMediaNavigation.url,
                icon: fas[socialMediaNavigation.iconName] || faQuestionCircle,
                target: socialMediaNavigation.inNewTab ? '_blank' : '_self'
            };
        });
    const convertedBottomNavigation: Array<CustomLinkData> = bottomNavigation.map(
        (link) => convertApiNavigationLinkToCustomLinkData(link)
    );

    return {
        columnsData: convertedColumns,
        socialMediaItemsData: convertedSocialMediaNavigation,
        bottomItemsData: convertedBottomNavigation
    };
}
