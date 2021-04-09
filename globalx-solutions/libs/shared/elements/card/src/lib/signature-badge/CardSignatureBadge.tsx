import {CardSignatureBadgeProps} from "./CardSignatureBadgeProps";
import {Signature} from "@globalx-solutions/shared/elements/sygnature";

export function CardSignatureBadge(props: CardSignatureBadgeProps) {
  const className: string = props.className || '';

  return (
    <div
      className={`${className}
                  ob-flex ob-items-center ob-justify-center
                  ob-w-8 ob-h-8
                  ob-bg-white ob-rounded-full`}>
      <Signature className="ob-w-4 ob-h-4"/>
    </div>
  );
}
