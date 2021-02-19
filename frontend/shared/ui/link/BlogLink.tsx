import React from 'react';
import Link from 'next/link';
import { BlogLinkProps } from 'shared/ui/link/BlogLinkProps';

export function BlogLink(props: BlogLinkProps) {
  const className: string = props.className || '';

  return (
    <Link href={ props.href }>
      <a className={ className }>
        { props.value }
      </a>
    </Link>
  );
}
