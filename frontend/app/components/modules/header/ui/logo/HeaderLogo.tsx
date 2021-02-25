import Link from 'next/link';
import { Signature } from 'app/components/elements/sygnature/Signature';
import React from 'react';

export function HeaderLogo() {
  return (
    <Link href="/">
      <a className="ob-inline-flex ob-items-center ob-align-middle">
        <Signature className="ob-w-12 ob-h-auto ob-fill-primary"/>
        <span className="ob-hidden xl:ob-block ob-text-xl ob-font-bold ob-ml-3">
          blog
        </span>
      </a>
    </Link>
  );
}
