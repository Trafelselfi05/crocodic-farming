import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BottomNavbar from "../components/ButtomNabar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pertanian Cerdas - Dashboard",
  description: "Pertanian Cerdas, Panen Berkualitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={poppins.variable} suppressHydrationWarning>
        <main className="bg-hijau-paling-muda w-full h-screen flex flex-col md:hidden">
          {/* Bagian isi halaman scrollable */}
          <section className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center gap-5 pt-5 pb-5">
            {children}
          </section>

          {/* Navbar selalu di bawah */}
          <BottomNavbar />
        </main>

        <div className="w-full h-screen md:flex hidden justify-center items-center">
          <h1 className="text-4xl font-bold ">Mobile View Only</h1>
        </div>
      </body>
    </html>
  );
}
