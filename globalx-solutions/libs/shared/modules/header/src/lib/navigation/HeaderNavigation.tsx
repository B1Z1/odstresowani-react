import {HeaderNavigationProps} from "./HeaderNavigationProps";
import {mapWithLast} from "@globalx-solutions/util";
import {getHeaderNavigationLinkItem} from "./utils/getHeaderNavigationLinkItem";
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export function HeaderNavigation(props: HeaderNavigationProps) {
  let blogHeaderNavigationItems: Array<JSX.Element> = [];

  if (props && props.navigationLinks) {
    blogHeaderNavigationItems = mapWithLast<JSX.Element, CustomLinkData>(
      props.navigationLinks,
      getHeaderNavigationLinkItem
    );
  }

  return (
    <nav className={props.className}>
      <ul className="ob-flex ob-items-center">
        {blogHeaderNavigationItems}
      </ul>
    </nav>
  );
}
