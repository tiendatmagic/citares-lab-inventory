import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#d8e2f1] p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
  accentColor?: string;
  isAlert?: boolean;
}

export function KpiCard({
  title,
  value,
  unit,
  subtitle,
  icon,
  accentColor = '#20409a',
  isAlert = false,
}: KpiCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#d8e2f1] shadow-sm flex flex-col gap-3 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[#20409a]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#52637f]">{title}</span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{
            backgroundColor: isAlert ? '#fff0f2' : '#eef3fc',
            color: accentColor,
          }}
        >
          {icon}
        </div>
      </div>
      <div className="text-3xl font-extrabold text-[#0f172a]" style={isAlert ? { color: accentColor } : {}}>
        {value} {unit && <span className="text-base font-medium text-[#52637f]">{unit}</span>}
      </div>
      <div className="text-xs text-[#52637f]">{subtitle}</div>
    </div>
  );
}
