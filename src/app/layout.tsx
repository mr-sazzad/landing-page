import { FloatingContactBar } from "@/components/sections/contact";
import { ThemeProvider } from "@/components/utils/theme-provider";
import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  weight: ["300" , "400" , "500" , "600" , "700"],
  subsets: ["latin"],
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Pro",
  description: "Created By Freshy Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hindSiliguri.className} ${notoSerifBengali.className} antialiased`}
      >
          <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
        {children}
        <FloatingContactBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
