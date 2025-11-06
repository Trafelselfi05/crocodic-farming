"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Beranda", icon: "/asset/navbar/home.svg" },
  { href: "/statistik", label: "Statistik", icon: "/asset/navbar/statistik.svg" },
  { href: "/lahan", label: "Lahan", icon: "/asset/navbar/lahan.svg" },
  { href: "/setelan", label: "Setelan", icon: "/asset/navbar/setting.svg" },
];

export default function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update active nav item
  useEffect(() => {
    const index = navItems.findIndex(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    );
    if (index !== -1) setActiveIndex(index);
  }, [pathname]);

  const handleNavClick = (href: string, index: number) => {
    if (activeIndex !== index) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => {
        router.push(href);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <nav
      className="sticky bottom-0 left-0 right-0 z-30 bg-transparent"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="relative w-full mx-auto h-[90px] sm:h-[100px]">
        {/* Background Base */}
        <div className="absolute w-full h-[70px] sm:h-[80px] bottom-0 rounded-t-[24px] bg-white" />

        {/* Navigation Items */}
        <div className="relative h-full flex items-end justify-around px-4 sm:px-6 pb-3">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, index)}
                className="relative flex flex-col items-center justify-end w-16 sm:w-20 focus:outline-none"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                {/* === Active Circle with White Semi-Background (Fixed) === */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${
                    isActive
                      ? "bottom-[42px] sm:bottom-[48px] opacity-100 scale-100"
                      : "bottom-[20px] opacity-0 scale-75"
                  }`}
                >
                  {/* === White half circle background (menghadap ke atas) === */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[84px] h-[45px] bg-soft rounded-b-full z-0" />

                  {/* === Green Active Circle === */}
                  <div className="relative w-[58px] sm:w-[64px] h-[58px] sm:h-[64px] bg-[#1F4E20] rounded-full flex items-center justify-center shadow-md z-10">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={26}
                      height={26}
                      className="transition-transform duration-300 brightness-0 invert"
                    />
                  </div>
                </div>

                {/* === Inactive Icon === */}
                {!isActive && (
                  <div className="mb-1 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={22}
                      height={22}
                      className="opacity-40 hover:opacity-100 transition-opacity duration-200"
                      style={{ filter: "grayscale(100%)" }}
                    />
                  </div>
                )}

                {/* === Label === */}
                <span
                  className={`text-[0.75rem] sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#1F4E20] opacity-100 mt-[60px]"
                      : "text-gray-500 opacity-80 mt-2"
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}