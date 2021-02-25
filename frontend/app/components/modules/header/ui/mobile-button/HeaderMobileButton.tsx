import React from 'react';
import { HeaderMobileButtonProps } from 'app/components/modules/header/ui/mobile-button/HeaderMobileButtonProps';

export function HeaderMobileButton(props: HeaderMobileButtonProps) {
  return (
    <button { ...props }>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2 ob-mb-2"></div>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2 ob-mb-2"></div>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2"></div>
    </button>
  );
}
