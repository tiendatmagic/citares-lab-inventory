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
    default: 'CITARES — Quản Lý Kho Thiết Bị & Phòng Lab Kỹ Thuật (Lab & Inventory Management System)',
    template: '%s | CITARES Lab & Inventory Management System',
  },
  description:
    'Hệ thống số hóa quản trị kho thiết bị thực hành, linh kiện tự động hóa và quản lý phòng lab kỹ thuật CITARES (CITARES Lab & Inventory Management System - Joint Facility of IDEA Group & Provina). Theo dõi máy CNC, Robot công nghiệp, PLC Siemens/Rockwell, vật tư khí nén Festo và quy trình cấp phát thiết bị thực hành.',
  keywords: [
    'CITARES',
    'CITARES LIMS',
    'CITARES Lab & Inventory Management System',
    'Quản lý kho thiết bị',
    'Phòng lab tự động hóa',
    'Quản trị vật tư phòng Lab',
    'Robot công nghiệp ABB',
    'PLC Siemens Rockwell',
    'IDEA Group',
    'Provina',
    'Khu công nghệ cao SHTP',
    'Thiết bị thực hành kỹ thuật',
  ],
  authors: [{ name: 'CITARES - A Joint Facility of IDEA Group & Provina' }],
  creator: 'CITARES',
  publisher: 'CITARES',
  applicationName: 'CITARES Lab & Inventory Management System',
  category: 'Education & Industrial Lab Management',
  classification: 'Laboratory & Equipment Inventory Management System',
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
    title: 'CITARES — Quản Lý Kho Thiết Bị & Phòng Lab Kỹ Thuật (Lab & Inventory Management System)',
    description:
      'Hệ thống số hóa quản trị kho thiết bị thực hành, linh kiện tự động hóa và phòng lab kỹ thuật CITARES (A Joint Facility of IDEA Group & Provina) tại Khu Công nghệ cao TP.HCM.',
    url: 'https://citares.edu.vn',
    siteName: 'CITARES Lab & Inventory Management System',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'CITARES Lab & Inventory Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CITARES — Quản Lý Kho Thiết Bị & Phòng Lab Kỹ Thuật (Lab & Inventory Management System)',
    description:
      'Hệ thống số hóa quản trị kho thiết bị thực hành, linh kiện tự động hóa và phòng lab kỹ thuật CITARES.',
    images: ['./og-image.png'],
    creator: '@CITARES',
  },
  other: {
    'apple-mobile-web-app-title': 'CITARES LIMS',
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
        <meta name="apple-mobile-web-app-title" content="CITARES LIMS" />
        <meta name="application-name" content="CITARES Lab & Inventory Management System" />
        <meta name="theme-color" content="#20409a" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
