import { BlogSignature } from 'shared/ui/sygnature/BlogSignature';
import { BlogCardSignatureBadgeProps } from 'shared/ui/card/signature-badge/BlogCardSignatureBadgeProps';

export function BlogCardSignatureBadge(props: BlogCardSignatureBadgeProps) {
  const className: string = props.className || '';

  return (
    <div
      className={ `${ className }
                  ob-flex ob-items-center ob-justify-center
                  ob-w-8 ob-h-8
                  ob-bg-white ob-rounded-full` }>
      <BlogSignature className="ob-w-4 ob-h-4"/>
    </div>
  );
}
