import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { HTMLAttributes } from 'react';

export interface BlogLinkProps extends BlogLinkData, HTMLAttributes<HTMLLinkElement> {
}
