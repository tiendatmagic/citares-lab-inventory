import React from 'react';
import { PhoneIcon } from '@/components/icons/Icons';

export interface HotlineBannerProps {
  label?: string;
  phoneNumber?: string;
  telHref?: string;
  className?: string;
}

export function HotlineBanner({
  label = 'Hotline Kỹ Thuật Lab CITARES 24/7',
  phoneNumber = '094 531 89 68',
  telHref = 'tel:0945318968',
  className = '',
}: HotlineBannerProps) {
  return (
    <a
      href={telHref}
      className={`flex items-center gap-3.5 bg-[#f0f4fa] border border-[#c4d6f5] rounded-xl p-3 px-4 hover:bg-[#e6eef8] hover:border-[#20409a] hover:-translate-y-0.5 transition-all no-underline ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#e17335] text-white flex items-center justify-center text-lg shrink-0 animate-pulse-ring">
        <PhoneIcon size={18} />
      </div>
      <div>
        <span className="block text-[11px] font-semibold text-[#52637f] tracking-widest uppercase">{label}</span>
        <span className="block text-[17px] font-extrabold text-[#0d1b3e]">{phoneNumber}</span>
      </div>
    </a>
  );
}
