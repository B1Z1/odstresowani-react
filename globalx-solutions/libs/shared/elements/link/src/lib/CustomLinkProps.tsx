import { AnchorHTMLAttributes } from 'react';

export interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
