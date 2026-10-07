import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảng Điều Khiển Nền Tảng Đào Tạo Kỹ Thuật Thực Chiến CITARES',
  description:
    'Trung tâm điều phối khóa học, quản lý lớp đào tạo kỹ sư, lịch thực hành phòng lab SHTP và cấp chứng chỉ kỹ thuật tại CITARES (A Joint Training Facility of IDEA Group & Provina). Giám sát thời gian thực các chuyên đề Robotics ABB, PLC Siemens S7-1500, Vi Mạch Bán Dẫn và Cơ điện tử.',
  openGraph: {
    title: 'Bảng Điều Khiển Nền Tảng Đào Tạo Kỹ Thuật CITARES',
    description:
      'Giám sát thời gian thực lịch học, ca thực hành phòng lab robotics, tự động hóa PLC và tiến độ đào tạo kỹ sư thực chiến CITARES.',
    url: 'https://citares.edu.vn/dashboard',
    siteName: 'CITARES Training Platform',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'CITARES Training Platform Dashboard Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng Điều Khiển Nền Tảng Đào Tạo Kỹ Thuật CITARES',
    description:
      'Giám sát thời gian thực lịch học, ca thực hành phòng lab robotics, tự động hóa PLC và tiến độ đào tạo kỹ sư thực chiến CITARES.',
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
