import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BottomNavbar from "../components/ButtomNabar";
import SplashScreen from "@/components/SplashScreen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pertanian Cerdas - Dashboard",
  description: "Pertanian Cerdas, Panen Berkualitas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body suppressHydrationWarning>
        {/* SplashScreen tampil dulu */}
        <SplashScreen />

        <main className="bg-soft w-full h-screen flex flex-col md:hidden">
          <section className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center gap-5 pt-5 pb-5">
            {children}
          </section>
          <BottomNavbar />
        </main>

        <div className="w-full h-screen md:flex hidden justify-center items-center bg-accent">
          <h1 className="text-4xl font-bold ">Mobile View Only</h1>
        </div>
      </body>
    </html>
  );
}