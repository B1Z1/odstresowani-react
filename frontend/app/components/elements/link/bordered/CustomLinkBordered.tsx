import { CustomLinkBorderedProps } from 'app/components/elements/link/bordered/CustomLinkBorderedProps';
import { CustomLink } from 'app/components/elements/link/CustomLink';

export function CustomLinkBordered(props: CustomLinkBorderedProps) {
  const className: string = props.className || '';

  return (
    <CustomLink className={ `${ className }
                          ob-inline-block
                          ob-text-secondary hover:ob-text-primary
                          ob-border ob-border-secondary hover:ob-border-primary ob-rounded
                          ob-px-4 ob-py-2
                          ob-transition-colors ob-duration-300` } { ...props } />
  );
}
