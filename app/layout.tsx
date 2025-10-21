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
      <body className={`${poppins.variable} antialiased`}>
        <main className="bg-hijau-paling-muda w-full min-w-[402px] min-h-screen relative pb-[101px]">
          {children}
          <BottomNavbar />
        </main>
      </body>
    </html>
  );
}