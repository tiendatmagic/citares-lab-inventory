import React from 'react';
import BeerBottleBanner from './BeerBottleBanner';
import {
  CitaresIcon,
  GraduationCapIcon,
  RobotArmIcon,
  CertificateIcon,
} from './icons/Icons';

export default function LeftHero() {
  return (
    <BeerBottleBanner className="hidden lg:flex flex-col justify-between p-12 xl:p-14 text-white min-h-screen">
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Brand Badge phía trên cùng */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md w-fit shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          <CitaresIcon size={18} className="text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="text-xs xl:text-[13px] font-bold tracking-wider uppercase text-white/95">
            CITARES • VIỆN ĐÀO TẠO THỰC HÀNH CÔNG NGHỆ CAO • SHTP
          </span>
        </div>

        {/* Nội dung chính Hero Body */}
        <div className="my-10 xl:my-12">
          <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.2] tracking-tight mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Nền tảng Đào tạo<br />
            Kỹ Thuật Thực Chiến <em className="not-italic text-[#38bdf8] bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-white bg-clip-text text-transparent">CITARES</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/90 max-w-[460px] mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Hệ sinh thái đào tạo và quản lý học tập thực chiến chuyên sâu cho Kỹ sư Robotics, Tự động hóa PLC/SCADA,
            Thiết kế Vi Mạch Bán Dẫn và Nhà máy thông minh tại Khu Công nghệ cao TP.HCM (SHTP).
          </p>

          {/* Key Operations Badges (Các khối nghiệp vụ đào tạo dạng kính mờ Glassmorphism) */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5 bg-[#0b1736]/70 hover:bg-[#0b1736]/90 border border-white/20 hover:border-[#60a5fa]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(56,189,248,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20409a] to-[#0d1b3e] border border-[#60a5fa]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <GraduationCapIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Chương Trình Đào Tạo Kỹ Sư Thực Chiến</h4>
                <p className="text-xs text-white/80">Lộ trình bám sát nhu cầu doanh nghiệp: Robotics ABB, PLC Siemens, Vi mạch FPGA/IC</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#0b1736]/70 hover:bg-[#0b1736]/90 border border-white/20 hover:border-[#60a5fa]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(56,189,248,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20409a] to-[#0d1b3e] border border-[#60a5fa]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <RobotArmIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Phòng Thực Hành Công Nghệ Cao (Lab SHTP)</h4>
                <p className="text-xs text-white/80">100% thời lượng thao tác trực tiếp trên cánh tay robot công nghiệp &amp; kit chuẩn quốc tế</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#0b1736]/70 hover:bg-[#0b1736]/90 border border-white/20 hover:border-[#60a5fa]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(56,189,248,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20409a] to-[#0d1b3e] border border-[#60a5fa]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <CertificateIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Đánh Giá Năng Lực &amp; Cấp Chứng Chỉ Kỹ Thuật</h4>
                <p className="text-xs text-white/80">Kiểm định kỹ năng thực hành, cấp chứng chỉ công nhận bởi IDEA Group &amp; Provina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BeerBottleBanner>
  );
}

