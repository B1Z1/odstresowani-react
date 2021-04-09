import Link from 'next/link';
import {Signature} from "@globalx-solutions/shared/elements/sygnature";

export function HeaderLogo() {
  return (
    <Link href="/">
      <a className="ob-inline-flex ob-items-center ob-align-middle">
        <Signature className="ob-w-10 lg:ob-w-12 ob-h-auto ob-fill-primary"/>
        <span className="ob-hidden xl:ob-block ob-text-xl ob-font-bold ob-ml-3">
          blog
        </span>
      </a>
    </Link>
  );
}
