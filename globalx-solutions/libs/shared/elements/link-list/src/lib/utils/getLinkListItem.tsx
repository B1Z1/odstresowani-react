import {CustomLinkBordered, CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function getLinkListItem(blogLinkData: CustomLinkData, index: number, isLast: boolean): JSX.Element {
  const marginRight: string = !isLast ? 'ob-mr-4' : '';

  return (
    <li key={index}
        className={`ob-mt-4 ${marginRight}`}>
      <CustomLinkBordered href={blogLinkData.href}>
        {blogLinkData.value}
      </CustomLinkBordered>
    </li>
  );
}
