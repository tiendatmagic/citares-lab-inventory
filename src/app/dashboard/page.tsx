'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CitaresIcon,
  RobotArmIcon,
  PlcIcon,
  LabIcon,
  BookOpenIcon,
  GraduationCapIcon,
  CertificateIcon,
  UsersIcon,
  TeacherIcon,
  ShieldCheckIcon,
  AlertCircleIcon,
} from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';
import { Card, KpiCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty,
} from '@/components/ui/Table';

interface TrainingClassSchedule {
  id: string;
  courseCode: string;
  courseTitle: string;
  type: 'lab' | 'theory';
  studentCount: string;
  location: string;
  instructor: string;
  time: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  statusText: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'lab' | 'theory'>('all');
  const [mobileDisplayMode, setMobileDisplayMode] = useState<'card' | 'table'>('card');

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('cp_user');
      } catch {}
      router.push('/');
    }
  };

  const trainingClasses: TrainingClassSchedule[] = [
    {
      id: 'LH-2026-ROB01',
      courseCode: 'ROBOT-ABB-IRB120',
      courseTitle: 'Vận Hành & Lập Trình Robot Công Nghiệp ABB IRB 120 (Robotics Lab)',
      type: 'lab',
      studentCount: '24 Học viên',
      location: 'Lab 302 - Trung Tâm Robotics & AI (SHTP)',
      instructor: 'TS. Đặng Hữu Phát (Chuyên gia Robotics)',
      time: '13:30 - 17:30 Hôm nay',
      status: 'in_progress',
      statusText: 'Đang thực hành ca máy',
    },
    {
      id: 'LH-2026-PLC04',
      courseCode: 'PLC-SMN-S71500',
      courseTitle: 'Tự Động Hóa Dây Chuyền với PLC Siemens S7-1500 & TIA Portal',
      type: 'lab',
      studentCount: '28 Học viên',
      location: 'Phòng Lab Tự Động Hóa - Bàn A2',
      instructor: 'KS. Hoàng Minh Tuấn',
      time: '14:00 - 17:00 Hôm nay',
      status: 'in_progress',
      statusText: 'Đang thao tác module',
    },
    {
      id: 'LH-2026-IC02',
      courseCode: 'FPGA-XIL-ARTIX7',
      courseTitle: 'Thiết Kế Vi Mạch Bán Dẫn Số & Kit FPGA Xilinx Artix-7 (IC Design)',
      type: 'theory',
      studentCount: '30 Học viên',
      location: 'Lab 201 - Vi Mạch & Bán Dẫn SHTP',
      instructor: 'KS. Lê Hoàng Long',
      time: '18:00 - 21:00 Hôm nay',
      status: 'upcoming',
      statusText: 'Chuẩn bị vào ca học',
    },
    {
      id: 'LH-2026-CNC03',
      courseCode: 'CNC-CADCAM-MILL4',
      courseTitle: 'Gia Công Cơ Khí Chính Xác CAD/CAM & Chế Tạo Mạch In PCB',
      type: 'lab',
      studentCount: '16 Học viên',
      location: 'Xưởng Thực Hành Cơ Điện Tử & CNC',
      instructor: 'Tổ Chuyên Gia IDEA Group',
      time: '08:30 - 11:30 Sáng nay',
      status: 'completed',
      statusText: 'Đã nghiệm thu bài tập',
    },
    {
      id: 'LH-2026-IOT01',
      courseCode: 'IIOT-SCADA-SMART',
      courseTitle: 'Mạng Truyền Thông Công Nghiệp IIoT & Giám Sát SCADA Nhà Máy Thông Minh',
      type: 'theory',
      studentCount: '35 Học viên',
      location: 'Giảng Đường Kỹ Thuật Đa Năng - Khu B4',
      instructor: 'ThS. Nguyễn Văn Hùng',
      time: '08:00 - 11:30 Sáng nay',
      status: 'completed',
      statusText: 'Hoàn thành bài kiểm tra',
    },
  ];

  const filteredClasses =
    activeTab === 'all'
      ? trainingClasses
      : trainingClasses.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex flex-col text-[#0f172a]">
      {/* Top Navigation */}
      <header className="bg-[#091533] text-white px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between border-b-2 border-[#20409a] sticky top-0 z-50 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <CitaresIcon size={24} className="text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            <span className="tracking-wide">CITARES LEARNING PLATFORM</span>
          </div>
          <Badge variant="neutral" className="hidden sm:inline-flex bg-[#12234f] text-[#c4d6f5] border-[#20409a]">
            <GraduationCapIcon size={15} className="text-[#38bdf8]" />
            Viện Đào Tạo Kỹ Thuật Thực Chiến CITARES — Khu Công Nghệ Cao SHTP
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#38bdf8] text-xs before:content-[''] before:w-2 before:h-2 before:bg-[#38bdf8] before:rounded-full before:shadow-[0_0_8px_#38bdf8]">
            Hệ thống Lab SHTP: Sẵn sàng 100% ca học thực hành
          </span>
          <div className="text-white/90">
            Quản trị đào tạo: <strong>ThS. Hoàng Minh Tuấn</strong>
          </div>
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1360px] w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-7">
        {/* Banner giới thiệu & Thông báo vận hành */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-1">
              Bảng Điều Phối Khóa Học &amp; Lịch Đào Tạo Kỹ Thuật
            </h2>
            <p className="text-xs sm:text-sm text-[#52637f]">
              Theo dõi tiến độ các khóa đào tạo kỹ sư, lịch thực hành phòng lab, danh sách lớp học và đánh giá năng lực CITARES
            </p>
          </div>
          <div>
            <Badge variant="success" className="px-3.5 py-2 text-xs bg-[#eef8f2] text-[#007a33] border-[#b8dec4]">
              ✓ Chuẩn Đào Tạo Kỹ Sư Thực Chiến: 100% Bám Sát Nhu Cầu Doanh Nghiệp
            </Badge>
          </div>
        </div>

        {/* 4 Reusable KPI Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <KpiCard
            title="Khóa Học Kỹ Thuật Thực Chiến"
            value="18"
            unit="Khóa"
            subtitle={<>Robotics, PLC, Vi mạch IC, SCADA IIoT · Đang mở đào tạo</>}
            icon={<BookOpenIcon size={22} />}
            accentColor="#20409a"
          />

          <KpiCard
            title="Kỹ Sư & Học Viên Đào Tạo"
            value="486"
            unit="Học viên"
            subtitle={<>320 sinh viên thực tập · 166 kỹ sư doanh nghiệp</>}
            icon={<UsersIcon size={22} />}
            accentColor="#20409a"
          />

          <KpiCard
            title="Lớp & Ca Thực Hành Lab Hôm Nay"
            value="14"
            unit="Ca máy"
            subtitle={<>100% thời lượng thao tác trực tiếp trên thiết bị thật</>}
            icon={<RobotArmIcon size={22} />}
            accentColor="#e17335"
          />

          <KpiCard
            title="Tỷ Lệ Tốt Nghiệp Đạt Chuẩn"
            value="98.5%"
            unit="Đạt chuẩn"
            subtitle={<>Doanh nghiệp công nghệ cao tuyển dụng ngay sau khóa</>}
            icon={<CertificateIcon size={22} />}
            accentColor="#20409a"
          />
        </div>

        {/* Section Bảng Lịch Đào Tạo / Ca Thực Hành Phòng Lab */}
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <GraduationCapIcon size={20} className="text-[#20409a] shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a]">
                  Nhật Ký Ca Học &amp; Thực Hành Phòng Lab Trong Ngày
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#52637f] mt-0.5">
                Lịch trình chi tiết các lớp đào tạo kỹ thuật và ca máy thực hành tại hệ thống phòng Lab CITARES (SHTP)
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-nowrap overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {/* Nút lọc tab theo loại lớp */}
              <div className="flex items-center gap-1.5 bg-[#eef3fc] p-1 rounded-xl border border-[#d8e2f1] shrink-0">
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Tất cả lớp ({trainingClasses.length})
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'lab'}
                  onClick={() => setActiveTab('lab')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Thực hành Lab SHTP
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'theory'}
                  onClick={() => setActiveTab('theory')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Chuyên đề &amp; Đồ án
                </Button>
              </div>

              {/* Bộ chuyển đổi chế độ xem trên Mobile */}
              <div className="md:hidden flex items-center gap-1 bg-[#eef3fc] p-1 rounded-xl border border-[#d8e2f1] shrink-0">
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('card')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'card'
                      ? 'bg-white text-[#20409a] shadow-xs'
                      : 'text-[#52637f] hover:text-[#0f172a]'
                  }`}
                >
                  Dạng Thẻ
                </button>
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('table')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'table'
                      ? 'bg-white text-[#20409a] shadow-xs'
                      : 'text-[#52637f] hover:text-[#0f172a]'
                  }`}
                >
                  Dạng Bảng
                </button>
              </div>
            </div>
          </div>

          {/* 1. HIỂN THỊ DẠNG THẺ (CARD VIEW) TRÊN MOBILE */}
          <div
            className={`flex flex-col gap-3.5 ${
              mobileDisplayMode === 'card' ? 'md:hidden' : 'hidden'
            }`}
          >
            {filteredClasses.length === 0 ? (
              <div className="text-center py-8 text-sm text-[#52637f] bg-[#f8fafc] rounded-xl border border-[#d8e2f1]">
                Không tìm thấy lớp học kỹ thuật phù hợp theo bộ lọc.
              </div>
            ) : (
              filteredClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="bg-[#f8fafc] border border-[#d8e2f1] rounded-xl p-4 transition-all hover:border-[#20409a] hover:shadow-xs flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-[#edf2fa] pb-2.5">
                    <div>
                      <div className="text-sm font-extrabold text-[#0f172a] tracking-tight">
                        {cls.id}
                      </div>
                      <div className="text-xs text-[#52637f]">
                        Mã khóa: <span className="font-mono font-medium text-[#0f172a]">{cls.courseCode}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        cls.status === 'completed'
                          ? 'success'
                          : cls.status === 'in_progress'
                          ? 'warning'
                          : 'info'
                      }
                      className="shrink-0 text-[11px] whitespace-nowrap"
                    >
                      {cls.statusText}
                    </Badge>
                  </div>

                  <div>
                    <div className="font-bold text-[15px] text-[#0f172a] leading-snug">
                      {cls.courseTitle}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-[#d8e2f1]">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          cls.type === 'lab'
                            ? 'bg-[#e8f1fc] text-[#1c5fc6]'
                            : 'bg-[#fff4eb] text-[#d96726]'
                        }`}
                      >
                        {cls.type === 'lab' ? '🔬 Ca Thực Hành Máy Lab' : '📖 Chuyên Đề & Đồ Án'}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-[#52637f] block">Sĩ số lớp</span>
                        <span className="text-base font-extrabold text-[#20409a]">{cls.studentCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-2.5 border border-[#d8e2f1] text-xs grid grid-cols-1 gap-1.5 text-[#52637f]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#52637f]">Địa điểm học / Lab:</span>
                      <span className="font-semibold text-[#0f172a] text-right">{cls.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#52637f]">Giảng viên / Chuyên gia:</span>
                      <span className="font-semibold text-[#0f172a] text-right">{cls.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#52637f]">Thời gian ca học:</span>
                      <span className="font-medium text-[#0f172a] text-right">{cls.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 2. HIỂN THỊ DẠNG BẢNG (TABLE VIEW) */}
          <div
            className={`w-full ${
              mobileDisplayMode === 'table' ? 'block' : 'hidden md:block'
            }`}
          >
            <Table minWidth="min-w-[1150px]" showScrollHint={true}>
              <TableHeader>
                <TableRow>
                  <TableHead nowrap={true} className="min-w-[150px]">Mã Lớp / Khóa</TableHead>
                  <TableHead nowrap={true} className="min-w-[340px]">Tên Khóa Đào Tạo &amp; Chuyên Đề</TableHead>
                  <TableHead nowrap={true} className="min-w-[130px]">Sĩ Số</TableHead>
                  <TableHead nowrap={true} className="min-w-[240px]">Phòng Lab / Địa Điểm</TableHead>
                  <TableHead nowrap={true} className="min-w-[200px]">Giảng Viên / Chuyên Gia</TableHead>
                  <TableHead nowrap={true} className="min-w-[150px]">Thời Gian Ca</TableHead>
                  <TableHead nowrap={true} className="min-w-[170px]">Trạng Thái</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredClasses.length === 0 ? (
                  <TableEmpty
                    colSpan={7}
                    message="Không có lớp đào tạo"
                    description="Hiện chưa có lớp học nào theo bộ lọc được chọn."
                  />
                ) : (
                  filteredClasses.map((cls) => (
                    <TableRow key={cls.id}>
                      <TableCell nowrap={true}>
                        <div className="font-bold text-[#0f172a] whitespace-nowrap">{cls.id}</div>
                        <div className="text-xs text-[#52637f] font-mono whitespace-nowrap">Mã: {cls.courseCode}</div>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[340px]">
                        <div
                          className="font-semibold text-[#0f172a] whitespace-nowrap truncate"
                          title={cls.courseTitle}
                        >
                          {cls.courseTitle}
                        </div>
                        <div
                          className={`text-xs font-medium mt-0.5 whitespace-nowrap ${
                            cls.type === 'lab' ? 'text-[#1c5fc6]' : 'text-[#d96726]'
                          }`}
                        >
                          {cls.type === 'lab' ? '🔬 Ca Thực Hành Máy Lab' : '📖 Chuyên Đề & Đồ Án'}
                        </div>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <span className="font-extrabold text-[15px] text-[#20409a] whitespace-nowrap">
                          {cls.studentCount}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[250px]">
                        <span
                          className="text-[#0f172a] whitespace-nowrap truncate block"
                          title={cls.location}
                        >
                          {cls.location}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[200px]">
                        <span
                          className="font-medium text-[#0f172a] whitespace-nowrap truncate block"
                          title={cls.instructor}
                        >
                          {cls.instructor}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <span className="text-[#52637f] text-xs whitespace-nowrap">
                          {cls.time}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <Badge
                          variant={
                            cls.status === 'completed'
                              ? 'success'
                              : cls.status === 'in_progress'
                              ? 'warning'
                              : 'info'
                          }
                          className="whitespace-nowrap"
                        >
                          {cls.statusText}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Section Quy Trình Đào Tạo & Cố Vấn Học Tập */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Card>
            <h4 className="text-base font-bold text-[#0f172a] mb-3 flex items-center gap-2">
              <ShieldCheckIcon size={20} className="text-[#20409a]" />
              Quy Trình Khảo Sát Kỹ Năng &amp; Cấp Chứng Chỉ Kỹ Sư (QR Code)
            </h4>
            <p className="text-xs sm:text-sm text-[#52637f] leading-relaxed mb-4">
              Toàn bộ chương trình đào tạo CITARES áp dụng mô hình thực chiến (70% thời lượng thực hành đồ án thực tế). Học viên hoàn thành đủ tiêu chuẩn ca máy và đồ án cuối khóa được cấp Chứng chỉ Kỹ năng Quốc gia có mã QR tra cứu định danh.
            </p>
            <div className="bg-[#f0f4fa] p-3 rounded-xl text-xs sm:text-sm border border-[#d8e2f1]">
              <strong>Ca thực hành tiếp theo:</strong>{' '}
              <code className="bg-white px-1.5 py-0.5 rounded border border-[#d8e2f1] font-mono text-[#20409a] font-bold">
                ROBOT-ABB-IRB120
              </code>{' '}
              (Phòng Lab Robotics &amp; AI Center, SHTP).
            </div>
          </Card>

          <Card>
            <h4 className="text-base font-bold text-[#0f172a] mb-3 flex items-center gap-2">
              <TeacherIcon size={20} className="text-[#e17335]" />
              Ban Cố Vấn Học Tập &amp; Hỗ Trợ Đào Tạo 24/7
            </h4>
            <p className="text-xs sm:text-sm text-[#52637f] leading-relaxed mb-4">
              Mọi thắc mắc về lịch học, đăng ký thực hành thêm giờ trên thiết bị máy Lab hoặc chuyển đổi lớp thực tập doanh nghiệp, học viên và quý giảng viên vui lòng liên hệ Ban Đào Tạo CITARES.
            </p>
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#0d1b3e]">
              <span>📞 Hotline Ban Đào Tạo CITARES:</span>
              <a href="tel:0945318968" className="text-[#20409a] underline hover:text-[#183380]">
                094 531 89 68
              </a>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

