import { BlogLinkBorderedProps } from 'shared/ui/link/bordered/BlogLinkBorderedProps';
import { BlogLink } from 'shared/ui/link/BlogLink';

export function BlogLinkBordered(props: BlogLinkBorderedProps) {
  return (
    <BlogLink className={ `${ props.className }
                          ob-text-secondary hover:ob-text-primary
                          ob-border ob-border-secondary hover:ob-border-primary ob-rounded
                          ob-px-4 ob-py-2
                          ob-transition-colors ob-duration-300` } { ...props } />
  );
}
