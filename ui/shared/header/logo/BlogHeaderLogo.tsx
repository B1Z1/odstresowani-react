import Link from 'next/link';
import { Signature } from 'shared/ui/sygnature/Signature';
import React from 'react';

export function BlogHeaderLogo() {
  return (
    <Link href="/">
      <a className="ob-inline-flex ob-items-center ob-align-middle">
        <Signature className="ob-w-12 ob-h-auto ob-fill-primary"/>
        <span className="ob-hidden lg:ob-block ob-text-xl ob-font-bold ob-ml-3">
          blog
        </span>
      </a>
    </Link>
  );
}
