"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, BarChart2, Leaf, Settings } from "lucide-react";

const navItems = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/statistik", label: "Statistik", icon: BarChart2 },
  { href: "/lahan", label: "Lahan", icon: Leaf },
  { href: "/setelan", label: "Setelan", icon: Settings },
];

export default function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full bg-white sticky bottom-0 shadow-inner rounded-t-2xl flex justify-center items-center py-2">
      <ul className="flex justify-around items-end w-full max-w-md px-2">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <li
              key={item.href}
              onClick={() => router.push(item.href)}
              className="relative flex flex-col items-center justify-end flex-1 cursor-pointer group"
            >
              <motion.div
                className="relative flex items-center justify-center"
                animate={{
                  y: isActive ? -10 : 0,
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isActive && (
                  <motion.svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="absolute"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="20"
                      fill="#1F4E20"
                      stroke="#1F4E20"
                      strokeWidth="2"
                    />
                  </motion.svg>
                )}

                <Icon
                  className={`w-5 h-5 z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 group-hover:text-[#1F4E20]"
                  }`}
                />
              </motion.div>

              <span
                className={`text-[0.7rem] font-medium mt-1 transition-all duration-300 ${
                  isActive ? "text-[#1F4E20] font-semibold" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
