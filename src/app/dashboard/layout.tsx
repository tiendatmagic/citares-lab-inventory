import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảng Điều Khiển Quản Lý Kho Thiết Bị & Phòng Lab Kỹ Thuật CITARES',
  description:
    'Trung tâm điều hành và giám sát thời gian thực kho thiết bị, vật tư và hệ thống phòng lab thực hành CITARES (A Joint Facility of IDEA Group & Provina). Thống kê cánh tay robot công nghiệp, PLC Siemens, kit vi mạch FPGA và phiên mượn trả thiết bị thực hành.',
  openGraph: {
    title: 'Bảng Điều Khiển Quản Lý Kho Thiết Bị & Phòng Lab CITARES',
    description:
      'Giám sát thời gian thực kho thiết bị robot, PLC, cảm biến, môi trường phòng lab và điều phối mượn trả thiết bị thực hành CITARES.',
    url: 'https://citares.edu.vn/dashboard',
    siteName: 'CITARES Lab & Inventory Management System',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'CITARES Lab & Inventory Dashboard Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng Điều Khiển Quản Lý Kho Thiết Bị & Phòng Lab CITARES',
    description:
      'Giám sát thời gian thực kho thiết bị robot, PLC, cảm biến và mượn trả thiết bị thực hành CITARES.',
    images: ['./og-image.png'],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
