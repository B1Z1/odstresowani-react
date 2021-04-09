import Link from 'next/link';
import {HeaderOdstresowaniLinkProps} from "./HeaderOdstresowaniLinkProps";

export function HeaderOdstresowaniLink(props: HeaderOdstresowaniLinkProps) {
  return (
    <p className={ props.className }>
      blog portalu &nbsp;
      <Link href="/">
        <a className="ob-text-primary ob-border-b ob-border-primary ob-border-dotted">
          odstresowani.pl
        </a>
      </Link>
    </p>
  );
}
