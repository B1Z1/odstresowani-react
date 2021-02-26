import { HTMLAttributes } from 'react';

export interface CustomLinkProps extends HTMLAttributes<HTMLLinkElement> {
    href: string;
}
