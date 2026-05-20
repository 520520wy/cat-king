import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "爪爪洗护馆 - 宠物洗护美容专家",
  description:
    "专业宠物洗护美容服务，提供基础清洁、精致美容、尊享SPA等全方位宠物护理体验。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
