import React from 'react';
import Link from 'next/link';
import { BlogHeaderOdstresowaniLinkProps } from 'shared/navigation/ui/header/odstresowani-link/BlogHeaderOdstresowaniLinkProps';

export function BlogHeaderOdstresowaniLink(props: BlogHeaderOdstresowaniLinkProps) {
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
