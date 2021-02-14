import { BlogFooterDTO } from 'shared/navigation/ui/footer/domain/BlogFooterDTO';
import { useQuery } from '@apollo/client';
import { BlogFooterResponse } from 'shared/navigation/ui/footer/domain/BlogFooterResponse';
import { BlogNavigationItemsType } from 'shared/navigation/domain/BlogNavigationItemsType';
import { BlogNavigationSocialMedia } from 'shared/navigation/domain/BlogNavigationSocialMedia';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { convertNavigationItemsToBlogLinkData } from 'shared/navigation/resource/convertNavigationItemsToBlogLinkData';
import { BlogFooterSocialMediaItemData } from 'shared/navigation/ui/footer/ui/social-media-list/BlogFooterSocialMediaItemData';
import { convertNavigationSocialMediaItemsToBlogSocialMediaData } from 'shared/navigation/resource/convertNavigationSocialMediaItemsToBlogSocialMediaData';
import { FOOTER_QUERY } from 'shared/navigation/ui/footer/resource/footerQuery';

export function useFooterQuery(): BlogFooterDTO {
  const {data} = useQuery<BlogFooterResponse>(FOOTER_QUERY);
  const leftSideNavigation: Array<BlogNavigationItemsType> = data?.footer?.leftSideNavigation || [];
  const middleSideNavigation: Array<BlogNavigationItemsType> = data?.footer?.middleSideNavigation || [];
  const rightSideNavigation: Array<BlogNavigationItemsType> = data?.footer?.rightSideNavigation || [];
  const bottomSideNavigation: Array<BlogNavigationItemsType> = data?.footer?.bottomSideNavigation || [];
  const socialMediaNavigation: Array<BlogNavigationSocialMedia> = data?.footer?.socialMediaNavigation || [];
  const convertedLeftSideNavigation: Array<BlogLinkData> = convertNavigationItemsToBlogLinkData(leftSideNavigation);
  const convertedMiddleSideNavigation: Array<BlogLinkData> = convertNavigationItemsToBlogLinkData(middleSideNavigation);
  const convertedRightSideNavigation: Array<BlogLinkData> = convertNavigationItemsToBlogLinkData(rightSideNavigation);
  const convertedBottomSideNavigation: Array<BlogLinkData> = convertNavigationItemsToBlogLinkData(bottomSideNavigation);
  const convertedSocialMediaNavigation: Array<BlogFooterSocialMediaItemData> =
    convertNavigationSocialMediaItemsToBlogSocialMediaData(socialMediaNavigation);

  return {
    leftSideNavigation: convertedLeftSideNavigation,
    middleSideNavigation: convertedMiddleSideNavigation,
    rightSideNavigation: convertedRightSideNavigation,
    bottomSideNavigation: convertedBottomSideNavigation,
    socialMediaNavigation: convertedSocialMediaNavigation
  };
}
