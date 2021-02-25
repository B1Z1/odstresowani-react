import React from 'react';
import { BlogHeaderMobileButtonProps } from 'app/components/modules/header/mobile-button/BlogHeaderMobileButtonProps';

export function BlogHeaderMobileButton(props: BlogHeaderMobileButtonProps) {
  return (
    <button { ...props }>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2 ob-mb-2"></div>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2 ob-mb-2"></div>
      <div className="ob-rounded-full ob-bg-gray-200 ob-w-2 ob-h-2"></div>
    </button>
  );
}
