import { Geist, Geist_Mono, Playwrite_IN } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwrite = Playwrite_IN({
  variable: "--font-playwrite",
  subsets: ["latin"],
});

export const metadata = {
  title: "MEHRA MAKEOVER",
  description: "MEHRA MAKEOVER, A MAKEOVER SALON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
