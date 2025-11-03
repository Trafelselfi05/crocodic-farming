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

  // Set active index based on pathname
  useEffect(() => {
    const index = navItems.findIndex(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    );
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  const handleNavClick = (href: string, index: number) => {
    if (activeIndex !== index) {
      setIsTransitioning(true);
      setActiveIndex(index);
      
      // Smooth transition before navigation
      setTimeout(() => {
        router.push(href);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 h-[101px]"
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="relative w-full max-w-[402px] h-full mx-auto">
        {/* Background with precise cutout */}
        <div className="absolute w-full h-[72px] top-[29px] left-0">
          <svg className="w-full h-full" viewBox="0 0 402 72" preserveAspectRatio="none">
            <defs>
              <mask id="cutout-mask">
                <rect x="0" y="0" width="402" height="72" fill="white" rx="20" />
                {navItems.map((item, index) => {
                  const isActive = activeIndex === index;
                  // Calculate exact center position based on flex layout
                  // With 4 items and justify-around: positions are at 20%, 40%, 60%, 80%
                  const xPercent = ((index + 1) / (navItems.length + 1)) * 100;
                  const xPos = (402 * xPercent) / 100;
                  
                  return (
                    <circle
                      key={`cutout-${index}`}
                      cx={xPos}
                      cy="5"
                      r={isActive ? "32" : "0"}
                      fill="black"
                      style={{ transition: 'r 0.3s ease-out' }}
                    />
                  );
                })}
              </mask>
            </defs>
            <rect 
              x="0" 
              y="0" 
              width="402" 
              height="72" 
              fill="white" 
              mask="url(#cutout-mask)"
              rx="20"
            />
          </svg>
        </div>
        
        {/* Shadow overlay */}
        <div className="absolute w-full h-[72px] top-[29px] left-0 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] rounded-t-[20px] pointer-events-none" />

        {/* Navigation items container */}
        <div className="relative h-full flex items-end justify-around px-6 pb-3">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;

            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, index)}
                className="relative flex flex-col items-center w-14 outline-none focus:outline-none"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Active state with SVG graphic */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 w-[64px] h-[64px] flex items-center justify-center transition-all duration-300 ease-out ${
                    isActive 
                      ? 'top-[-42px] opacity-100 scale-100' 
                      : 'top-[0px] opacity-0 scale-75'
                  }`}
                >
                  {isActive && (
                    <img
                      src={`/asset/grafik/${item.label.toLowerCase()}-active.svg`}
                      alt={`${item.label} active`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Inactive state with SVG graphic */}
                {!isActive && (
                  <div className="relative flex items-center justify-center w-6 h-6 z-10 mb-0 transition-opacity duration-300 ease-out">
                    <img
                      src={`/asset/grafik/${item.label.toLowerCase()}-inactive.svg`}
                      alt={`${item.label} inactive`}
                      className="w-full h-full object-contain hover:opacity-80 transition-opacity duration-200"
                    />
                  </div>
                )}

                {/* Label text with fade animation */}
                <span
                  className={`relative z-10 text-sm font-medium text-center whitespace-nowrap transition-all duration-300 ease-out ${
                    isActive 
                      ? 'text-[#1F4E20] opacity-100 mt-[46px]' 
                      : 'text-[#9E9E9E] opacity-80 mt-2'
                  }`}
                  style={{ fontFamily: "'Poppins', Helvetica" }}
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