'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CitaresIcon,
  RobotArmIcon,
  PlcIcon,
  LabIcon,
  InventoryBoxIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
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

interface LabTransactionOrder {
  id: string;
  code: string;
  equipment: string;
  type: 'export' | 'import';
  quantity: string;
  location: string;
  handler: string;
  time: string;
  status: 'completed' | 'processing' | 'pending';
  statusText: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'export' | 'import'>('all');
  const [mobileDisplayMode, setMobileDisplayMode] = useState<'card' | 'table'>('card');

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('cp_user');
      } catch {}
      router.push('/');
    }
  };

  const labOrders: LabTransactionOrder[] = [
    {
      id: 'PKP-2026-0891',
      code: 'ROBOT-ABB-IRB120',
      equipment: 'Cánh tay Robot Công Nghiệp ABB IRB 120 (Robotics Lab)',
      type: 'export',
      quantity: '2 Cánh tay',
      location: 'Lab 302 - Trung Tâm Robotics & AI',
      handler: 'ThS. Đặng Hữu Phát (GV Hướng dẫn)',
      time: '15:45 - Hôm nay',
      status: 'completed',
      statusText: 'Đang phục vụ thực hành',
    },
    {
      id: 'PNK-2026-0422',
      code: 'PLC-SMN-S71500',
      equipment: 'Bộ Module PLC Siemens S7-1500 CPU 1511-1PN',
      type: 'import',
      quantity: '12 Bộ Module',
      location: 'Kho Thiết Bị Tự Động Hóa - Kệ A2',
      handler: 'KS. Hoàng Minh Tuấn',
      time: '15:20 - Hôm nay',
      status: 'completed',
      statusText: 'Đã kiểm chuẩn nhập kho',
    },
    {
      id: 'PKP-2026-0892',
      code: 'FPGA-XIL-ARTIX7',
      equipment: 'Kit Phát Triển Vi Mạch FPGA Xilinx Artix-7 (IC Design Lab)',
      type: 'export',
      quantity: '24 Bộ Kit',
      location: 'Lab 201 - Vi Mạch & Bán Dẫn',
      handler: 'KS. Lê Hoàng Long',
      time: '14:50 - Hôm nay',
      status: 'processing',
      statusText: 'Đang bàn giao sinh viên',
    },
    {
      id: 'PKP-2026-0893',
      code: 'CNC-ROUT-MILL4',
      equipment: 'Máy Phay Khắc Mạch PCB Chính Xác Cao (Precision Lab)',
      type: 'export',
      quantity: '1 Máy CNC',
      location: 'Xưởng Thực Hành Cơ Điện Tử',
      handler: 'Tổ Kỹ Thuật Bảo Trì',
      time: '14:15 - Hôm nay',
      status: 'pending',
      statusText: 'Chờ hiệu chuẩn thông số',
    },
    {
      id: 'PNK-2026-0421',
      code: 'SENS-OMR-E2E',
      equipment: 'Cảm Biến Quang & Tiệm Cận Omron E2E (Vật tư tiêu hao)',
      type: 'import',
      quantity: '150 Chiếc',
      location: 'Tủ Linh Kiện Cảm Biến - Ngăn B4',
      handler: 'Thủ kho CITARES',
      time: '13:30 - Hôm nay',
      status: 'completed',
      statusText: 'Đã lưu kho Phân khu B4',
    },
  ];

  const filteredOrders =
    activeTab === 'all'
      ? labOrders
      : labOrders.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex flex-col text-[#0f172a]">
      {/* Top Navigation */}
      <header className="bg-[#091533] text-white px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between border-b-2 border-[#20409a] sticky top-0 z-50 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <CitaresIcon size={24} className="text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            <span className="tracking-wide">CITARES LAB &amp; INVENTORY</span>
          </div>
          <Badge variant="neutral" className="hidden sm:inline-flex bg-[#12234f] text-[#c4d6f5] border-[#20409a]">
            <InventoryBoxIcon size={14} className="text-[#38bdf8]" />
            Trung Tâm Thực Hành Công Nghệ Cao CITARES — Khu SHTP, TP. Thủ Đức
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#38bdf8] text-xs before:content-[''] before:w-2 before:h-2 before:bg-[#38bdf8] before:rounded-full before:shadow-[0_0_8px_#38bdf8]">
            Môi trường Cleanroom Lab: 22.5°C / 45% RH Online
          </span>
          <div className="text-white/90">
            Quản lý Lab: <strong>KS. Nguyễn Văn Hùng</strong>
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
              Bảng Điều Phối &amp; Giám Sát Kho Thiết Bị Lab
            </h2>
            <p className="text-xs sm:text-sm text-[#52637f]">
              Theo dõi tồn kho linh kiện, điều phối cấp phát mượn trả thiết bị thực hành và giám sát môi trường phòng Lab CITARES
            </p>
          </div>
          <div>
            <Badge variant="success" className="px-3.5 py-2 text-xs bg-[#eef8f2] text-[#007a33] border-[#b8dec4]">
              ✓ Chuẩn Hiệu Chuẩn &amp; An Toàn Phòng Lab: 100% Đạt Chuẩn
            </Badge>
          </div>
        </div>

        {/* 4 Reusable KPI Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <KpiCard
            title="Thiết Bị Robot & Tự Động Hóa"
            value="128"
            unit="Bộ"
            subtitle={<>Khả dụng: <strong>94.5%</strong> · Đang mượn thực hành: 18 bộ</>}
            icon={<RobotArmIcon size={22} />}
            accentColor="#20409a"
          />

          <KpiCard
            title="Module PLC & Bộ Điều Khiển"
            value="340"
            unit="Module"
            subtitle={<>Siemens, Omron, Mitsubishi · Dự trữ sẵn sàng</>}
            icon={<PlcIcon size={22} />}
            accentColor="#20409a"
          />

          <KpiCard
            title="Kit Vi Mạch & Linh Kiện Bán Dẫn"
            value="15,420"
            unit="Linh kiện"
            subtitle={<>Kit FPGA, Vi điều khiển, Cảm biến Sensor</>}
            icon={<CitaresIcon size={22} />}
            accentColor="#e17335"
          />

          <KpiCard
            title="Môi Trường Phòng Sạch Lab"
            value="22.5°C"
            unit="Ổn định"
            subtitle={<>Dải chuẩn: <strong>21°C - 24°C</strong> (Độ ẩm 45% RH Sensor A1-A4)</>}
            icon={<LabIcon size={22} />}
            accentColor="#20409a"
          />
        </div>

        {/* Section Bảng Lệnh Mượn Trả / Cấp Phát Thiết Bị Lab */}
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <InventoryBoxIcon size={20} className="text-[#20409a] shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a]">
                  Nhật Ký Cấp Phát &amp; Mượn Trả Thiết Bị Thực Hành
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#52637f] mt-0.5">
                Lịch trình bàn giao, mượn trả và nhập kho thiết bị tại các Phòng Lab CITARES (SHTP)
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-nowrap overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {/* Nút lọc tab theo loại lệnh */}
              <div className="flex items-center gap-1.5 bg-[#eef3fc] p-1 rounded-xl border border-[#d8e2f1] shrink-0">
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Tất cả ({labOrders.length})
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'export'}
                  onClick={() => setActiveTab('export')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Cấp phát mượn
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'import'}
                  onClick={() => setActiveTab('import')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Nhập kho / Hoàn trả
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
            {filteredOrders.length === 0 ? (
              <div className="text-center py-8 text-sm text-[#52637f] bg-[#f8fafc] rounded-xl border border-[#d8e2f1]">
                Không tìm thấy phiếu điều phối thiết bị phù hợp.
              </div>
            ) : (
              filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#f8fafc] border border-[#d8e2f1] rounded-xl p-4 transition-all hover:border-[#20409a] hover:shadow-xs flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-[#edf2fa] pb-2.5">
                    <div>
                      <div className="text-sm font-extrabold text-[#0f172a] tracking-tight">
                        {order.id}
                      </div>
                      <div className="text-xs text-[#52637f]">
                        Mã thiết bị: <span className="font-mono font-medium text-[#0f172a]">{order.code}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        order.status === 'completed'
                          ? 'success'
                          : order.status === 'processing'
                          ? 'warning'
                          : 'info'
                      }
                      className="shrink-0 text-[11px] whitespace-nowrap"
                    >
                      {order.statusText}
                    </Badge>
                  </div>

                  <div>
                    <div className="font-bold text-[15px] text-[#0f172a] leading-snug">
                      {order.equipment}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-[#d8e2f1]">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          order.type === 'export'
                            ? 'bg-[#e8f1fc] text-[#1c5fc6]'
                            : 'bg-[#eef8f2] text-[#007a33]'
                        }`}
                      >
                        {order.type === 'export' ? '↑ Phiếu cấp phát mượn' : '↓ Phiếu nhập kho / hoàn trả'}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-[#52637f] block">Số lượng</span>
                        <span className="text-base font-extrabold text-[#20409a]">{order.quantity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-2.5 border border-[#d8e2f1] text-xs grid grid-cols-1 gap-1.5 text-[#52637f]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#52637f]">Vị trí phòng Lab / Kệ:</span>
                      <span className="font-semibold text-[#0f172a] text-right">{order.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#52637f]">Người mượn / Tiếp nhận:</span>
                      <span className="font-semibold text-[#0f172a] text-right">{order.handler}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#52637f]">Thời gian:</span>
                      <span className="font-medium text-[#0f172a] text-right">{order.time}</span>
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
                  <TableHead nowrap={true} className="min-w-[150px]">Mã Phiếu / Mã TB</TableHead>
                  <TableHead nowrap={true} className="min-w-[320px]">Tên Thiết Bị &amp; Module Phòng Lab</TableHead>
                  <TableHead nowrap={true} className="min-w-[130px]">Số Lượng</TableHead>
                  <TableHead nowrap={true} className="min-w-[240px]">Vị Trí Phòng Lab / Kệ Kho</TableHead>
                  <TableHead nowrap={true} className="min-w-[190px]">Người Mượn / Tiếp Nhận</TableHead>
                  <TableHead nowrap={true} className="min-w-[140px]">Thời Gian</TableHead>
                  <TableHead nowrap={true} className="min-w-[180px]">Trạng Thái</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredOrders.length === 0 ? (
                  <TableEmpty
                    colSpan={7}
                    message="Không có dữ liệu cấp phát"
                    description="Hiện chưa có phiếu xuất hoặc nhập nào theo bộ lọc được chọn."
                  />
                ) : (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell nowrap={true}>
                        <div className="font-bold text-[#0f172a] whitespace-nowrap">{order.id}</div>
                        <div className="text-xs text-[#52637f] font-mono whitespace-nowrap">Mã: {order.code}</div>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[330px]">
                        <div
                          className="font-semibold text-[#0f172a] whitespace-nowrap truncate"
                          title={order.equipment}
                        >
                          {order.equipment}
                        </div>
                        <div
                          className={`text-xs font-medium mt-0.5 whitespace-nowrap ${
                            order.type === 'export' ? 'text-[#1c5fc6]' : 'text-[#007a33]'
                          }`}
                        >
                          {order.type === 'export' ? '↑ Phiếu cấp phát mượn' : '↓ Phiếu nhập kho / hoàn trả'}
                        </div>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <span className="font-extrabold text-[15px] text-[#20409a] whitespace-nowrap">
                          {order.quantity}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[250px]">
                        <span
                          className="text-[#0f172a] whitespace-nowrap truncate block"
                          title={order.location}
                        >
                          {order.location}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[200px]">
                        <span
                          className="font-medium text-[#0f172a] whitespace-nowrap truncate block"
                          title={order.handler}
                        >
                          {order.handler}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <span className="text-[#52637f] text-xs whitespace-nowrap">
                          {order.time}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <Badge
                          variant={
                            order.status === 'completed'
                              ? 'success'
                              : order.status === 'processing'
                              ? 'warning'
                              : 'info'
                          }
                          className="whitespace-nowrap"
                        >
                          {order.statusText}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Section Cảnh báo & Quy trình Phòng Lab */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Card>
            <h4 className="text-base font-bold text-[#0f172a] mb-3 flex items-center gap-2">
              <ShieldCheckIcon size={20} className="text-[#20409a]" />
              Quy Trình Kiểm Soát Định Danh Thiết Bị (QR Code)
            </h4>
            <p className="text-xs sm:text-sm text-[#52637f] leading-relaxed mb-4">
              Mọi thiết bị thực hành và kit vi mạch đều được dán mã QR định danh tài sản. Giảng viên và kỹ sư vui lòng quét mã xác nhận tình trạng trước và sau mỗi ca thực hành.
            </p>
            <div className="bg-[#f0f4fa] p-3 rounded-xl text-xs sm:text-sm border border-[#d8e2f1]">
              <strong>Phiên thực hành tiếp theo:</strong>{' '}
              <code className="bg-white px-1.5 py-0.5 rounded border border-[#d8e2f1] font-mono text-[#20409a] font-bold">
                ROBOT-ABB-IRB120
              </code>{' '}
              (Phòng Lab Robotics &amp; AI Center).
            </div>
          </Card>

          <Card>
            <h4 className="text-base font-bold text-[#0f172a] mb-3 flex items-center gap-2">
              <AlertCircleIcon size={20} className="text-[#e17335]" />
              Trực Ban Kỹ Thuật &amp; Bảo Trì Phòng Lab 24/7
            </h4>
            <p className="text-xs sm:text-sm text-[#52637f] leading-relaxed mb-4">
              Mọi sự cố về chênh lệch môi trường phòng sạch (&gt; 25°C hoặc &gt; 60% RH), lỗi thiết bị PLC/Robot hoặc cần cấp phát gấp linh kiện, vui lòng liên hệ kỹ thuật trực ban.
            </p>
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#0d1b3e]">
              <span>📞 Hotline Kỹ Thuật Lab CITARES:</span>
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
