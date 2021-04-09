import {HeaderMobileButtonProps} from "./HeaderMobileButtonProps";

export function HeaderMobileButton(props: HeaderMobileButtonProps) {
  return (
    <button {...props}>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2 ob-mb-2"/>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2 ob-mb-2"/>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2"/>
    </button>
  );
}
