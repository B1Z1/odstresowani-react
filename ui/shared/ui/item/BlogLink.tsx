import React from 'react';
import Link from 'next/link';
import { BlogLinkProps } from 'shared/ui/item/BlogLinkProps';

export function BlogLink(props: BlogLinkProps) {
  return (
    <Link href={ props.href }>
      <a className="ob-font-serif href:ob-c-primary">
        { props.value }
      </a>
    </Link>
  );
}
