import React from 'react';
import BeerBottleBanner from './BeerBottleBanner';
import { CitaresIcon, RobotArmIcon, PlcIcon, InventoryBoxIcon } from './icons/Icons';

export default function LeftHero() {
  return (
    <BeerBottleBanner className="hidden lg:flex flex-col justify-between p-12 xl:p-14 text-white min-h-screen">
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Brand Badge phía trên cùng */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md w-fit shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          <CitaresIcon size={18} className="text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="text-xs xl:text-[13px] font-bold tracking-wider uppercase text-white/95">
            CITARES • IDEA Group & Provina • High-Tech SHTP
          </span>
        </div>

        {/* Nội dung chính Hero Body */}
        <div className="my-10 xl:my-12">
          <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.2] tracking-tight mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Hệ thống Quản lý<br />
            Kho Thiết Bị &amp; Lab <em className="not-italic text-[#38bdf8] bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-white bg-clip-text text-transparent">CITARES</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/90 max-w-[460px] mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Giải pháp số hóa điều phối và quản trị trang thiết bị thực hành, cánh tay robot công nghiệp,
            module PLC và linh kiện vi mạch phòng Lab theo thời gian thực tại Khu Công nghệ cao TP.HCM.
          </p>

          {/* Key Operations Badges (Các khối nghiệp vụ dạng kính mờ Glassmorphism) */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5 bg-[#0b1736]/70 hover:bg-[#0b1736]/90 border border-white/20 hover:border-[#60a5fa]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(56,189,248,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20409a] to-[#0d1b3e] border border-[#60a5fa]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <RobotArmIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Quản Lý Thiết Bị Lab &amp; Robotics</h4>
                <p className="text-xs text-white/80">Giám sát cánh tay robot ABB, máy CNC và kit vi mạch FPGA</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#0b1736]/70 hover:bg-[#0b1736]/90 border border-white/20 hover:border-[#60a5fa]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(56,189,248,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20409a] to-[#0d1b3e] border border-[#60a5fa]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <PlcIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Cấp Phát &amp; Mượn Trả Thiết Bị Thực Hành</h4>
                <p className="text-xs text-white/80">Kiểm soát phiên mượn của kỹ sư &amp; học viên qua mã QR định danh</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#0b1736]/70 hover:bg-[#0b1736]/90 border border-white/20 hover:border-[#60a5fa]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(56,189,248,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20409a] to-[#0d1b3e] border border-[#60a5fa]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <InventoryBoxIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Kiểm Kê Linh Kiện &amp; Hiệu Chuẩn Lab</h4>
                <p className="text-xs text-white/80">Giám sát tồn kho vật tư tiêu hao và trạng thái thiết bị 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BeerBottleBanner>
  );
}

