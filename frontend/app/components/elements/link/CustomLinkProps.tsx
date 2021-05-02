import { AnchorHTMLAttributes } from 'react';
import { ApiLocale } from 'app/api/utils/locale/ApiLocale';

export interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    locale?: ApiLocale;
}
