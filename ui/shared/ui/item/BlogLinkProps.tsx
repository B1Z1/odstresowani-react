import { BlogLinkData } from 'shared/ui/item/BlogLinkData';
import { HTMLAttributes } from 'react';

export interface BlogLinkProps extends BlogLinkData, HTMLAttributes<HTMLLinkElement> {
}
