import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'سید محمدرضا موسوی‌نژاد - پورتفولیو',
  description: 'پژوهشگر جنگ، مدرس، و نویسنده',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}