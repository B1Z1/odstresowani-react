import React from 'react';
import Link from 'next/link';
import { CustomLinkProps } from 'app/components/elements/link/CustomLinkProps';

export function CustomLink(props: CustomLinkProps) {
    const className: string = props.className || '';

    return (
        <Link href={ props.href }>
            <a className={ className }>
                { props.children }
            </a>
        </Link>
    );
}
