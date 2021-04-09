import {CustomLink, CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function getHeaderNavigationLinkItem(value: CustomLinkData, index: number, isLast: boolean): JSX.Element {
  const itemGap: string = !isLast ? 'ob-mr-8' : '';

  return (
    <li key={index}
        className={itemGap}>
      <CustomLink className="ob-font-serif hover:ob-text-primary ob-transition-colors"
                  target={value.target}
                  href={value.href}>
        {value.value}
      </CustomLink>
    </li>
  );
}
