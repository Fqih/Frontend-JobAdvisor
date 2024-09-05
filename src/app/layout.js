import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Advisor",
  description: "Your Ultimate asset for career direction, industry patterns, and proficient advancement. Find devices and bits of knowledge to progress your career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
