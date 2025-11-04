"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, BarChart2, Grid, Settings } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/statistik", label: "Statistik", icon: BarChart2 },
  { href: "/lahan", label: "Lahan", icon: Grid },
  { href: "/setelan", label: "Setelan", icon: Settings },
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
            const Icon = item.icon;

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
  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4  w-[84px] h-[45px]  bg-soft rounded-b-full z-0" />

  {/* === Green Active Circle === */}
  <div className="relative w-[58px] sm:w-[64px] h-[58px] sm:h-[64px] bg-[#1F4E20] rounded-full flex items-center justify-center shadow-md z-10">
    <Icon
      size={26}
      strokeWidth={2.5}
      className="text-white transition-transform duration-300"
    />
  </div>
</div>


                {/* === Inactive Icon === */}
                {!isActive && (
                  <div className="mb-1 flex items-center justify-center">
                    <Icon
                      size={22}
                      strokeWidth={2.3}
                      className="text-gray-400 hover:text-[#1F4E20] transition-colors duration-200"
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
