import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-roboto',
});

export const viewport: Viewport = {
  themeColor: '#20409a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://citares.edu.vn'),
  title: {
    default: 'CITARES — Nền Tảng Đào Tạo Kỹ Thuật Thực Chiến (Training & Learning Platform)',
    template: '%s | CITARES Training Platform',
  },
  description:
    'Nền tảng đào tạo kỹ thuật thực chiến và quản lý học tập CITARES (A Joint Training Facility of IDEA Group & Provina). Đào tạo chuyên sâu Kỹ sư Robotics, Tự động hóa PLC/SCADA, Thiết kế Vi Mạch Bán Dẫn (Semiconductor), Cơ điện tử và Nhà máy thông minh tại Khu Công nghệ cao TP.HCM (SHTP).',
  keywords: [
    'CITARES',
    'CITARES Training Platform',
    'CITARES Education',
    'Đào tạo kỹ thuật thực chiến',
    'Khóa học Robotics công nghiệp',
    'Đào tạo PLC Siemens Rockwell',
    'Thiết kế vi mạch bán dẫn',
    'IC Design FPGA',
    'IDEA Group',
    'Provina',
    'Khu công nghệ cao SHTP',
    'Chứng chỉ kỹ sư thực hành',
  ],
  authors: [{ name: 'CITARES - A Joint Training Facility of IDEA Group & Provina' }],
  creator: 'CITARES',
  publisher: 'CITARES',
  applicationName: 'CITARES Training Platform',
  category: 'Technical Education & Engineering Training Platform',
  classification: 'Industrial Engineering Training & Learning Management Platform',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
      { url: './favicon.svg', type: 'image/svg+xml' },
      { url: './favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: './favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: './icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: './favicon.ico',
    apple: [
      { url: './apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: './favicon.svg', color: '#20409a' },
    ],
  },
  manifest: './site.webmanifest',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'CITARES — Nền Tảng Đào Tạo Kỹ Thuật Thực Chiến (Training & Learning Platform)',
    description:
      'Hệ sinh thái đào tạo kỹ thuật thực chiến và phát triển kỹ sư công nghệ cao chuyên sâu Robotics, PLC/SCADA, Vi Mạch Bán Dẫn tại Khu Công nghệ cao TP.HCM (SHTP).',
    url: 'https://citares.edu.vn',
    siteName: 'CITARES Training Platform',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'CITARES Training & Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CITARES — Nền Tảng Đào Tạo Kỹ Thuật Thực Chiến (Training & Learning Platform)',
    description:
      'Hệ sinh thái đào tạo kỹ thuật thực chiến và phát triển kỹ sư công nghệ cao CITARES.',
    images: ['./og-image.png'],
    creator: '@CITARES',
  },
  other: {
    'apple-mobile-web-app-title': 'CITARES Learn',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={roboto.variable}>
      <head>
        {/* Placeholder script theo đặc tả CommaDesk Custom Login UI Spec */}
        <script src="/__commadesk/login-bridge.js" />
        {/* Thẻ favicon & icon tương đối chuẩn cho gói xuất tĩnh CommaDesk ZIP */}
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="CITARES Learn" />
        <meta name="application-name" content="CITARES Training Platform" />
        <meta name="theme-color" content="#20409a" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
