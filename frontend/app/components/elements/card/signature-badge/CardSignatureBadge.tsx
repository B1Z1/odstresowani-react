import { BlogSignature } from 'app/components/elements/sygnature/BlogSignature';
import { CardSignatureBadgeProps } from 'app/components/elements/card/signature-badge/CardSignatureBadgeProps';

export function CardSignatureBadge(props: CardSignatureBadgeProps) {
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
