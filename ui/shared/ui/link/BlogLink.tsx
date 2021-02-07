import React from 'react';
import Link from 'next/link';
import { BlogLinkProps } from 'shared/ui/link/BlogLinkProps';

export function BlogLink(props: BlogLinkProps) {
  return (
    <Link href={ props.href }>
      <a className={ props.className }>
        { props.value }
      </a>
    </Link>
  );
}
