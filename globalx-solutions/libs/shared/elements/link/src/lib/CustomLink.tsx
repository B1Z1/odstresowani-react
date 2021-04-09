import React from 'react';
import Link from 'next/link';
import {CustomLinkProps} from "./CustomLinkProps";

export function CustomLink(props: CustomLinkProps) {
    const className: string = props.className || '';

    return (
        <Link href={ props.href }>
            <a target={ props.target } className={ className }>
                { props.children }
            </a>
        </Link>
    );
}
