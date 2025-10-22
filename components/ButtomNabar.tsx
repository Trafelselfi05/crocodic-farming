"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky bottom-0 w-full h-[101px] bg-transparent"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Background SVG */}
      <svg
        className="absolute w-full h-[71.29%] top-[28.71%] left-0 transition-all duration-300"
        viewBox="0 0 402 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20C0 8.95 8.95 0 20 0H382C393.05 0 402 8.95 402 20V72H0V20Z"
          fill="white"
        />
        <ellipse cx="201" cy="0" rx="40" ry="40" fill="white" />
      </svg>

      {/* Active Indicator - Double Lingkaran untuk efek cekungan */}
      <div
        className="absolute top-0 transition-all duration-500 ease-in-out"
        style={{
          width: '14.43%',
          height: '57.43%',
          left: pathname === "/" ? '7.71%' : 
                pathname === "/statistik" ? '31.34%' :
                pathname === "/lahan" ? '56.22%' : '78.36%',
        }}
      >
        
        {/* Lingkaran utama aktif */}
        <svg
          className="w-full h-full transition-all duration-500 ease-in-out"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29"
            cy="29"
            r="29"
            fill="#1F4E20"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
      </div>

      {/* Beranda */}
      <Link
        href="/"
        className="w-[14.43%] h-[57.43%] left-[7.71%] absolute top-0 group transition-all duration-300 hover:scale-105"
        aria-label="Beranda"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        <svg
          className="w-full h-full transition-all duration-300"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29"
            cy="29"
            r="29"
            fill="transparent"
            className="transition-all duration-300"
          />
          <path
            d="M38 25.5L29 18L20 25.5V36C20 36.5304 20.2107 37.0391 20.5858 37.4142C20.9609 37.7893 21.4696 38 22 38H36C36.5304 38 37.0391 37.7893 37.4142 37.4142C37.7893 37.0391 38 36.5304 38 36V25.5Z"
            stroke={pathname === "/" ? "white" : "#7FD083"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
          <path
            d="M26 38V29H32V38"
            stroke={pathname === "/" ? "white" : "#7FD083"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
        </svg>
      </Link>
      <span
        className={`absolute w-[15.17%] h-[20.79%] top-[70.30%] left-[7.46%] flex items-center justify-center font-['Poppins',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal] transition-all duration-300 ${
          pathname === "/" ? "text-hijau-tua font-semibold scale-105" : "text-abu-abu group-hover:text-hijau-tua"
        }`}
      >
        Beranda
      </span>

      {/* Statistik */}
      <Link
        href="/statistik"
        className="w-[14.68%] h-[48.51%] top-[42.57%] left-[31.34%] absolute group transition-all duration-300 hover:scale-105"
        aria-label="Statistik"
      >
        <svg
          className="w-[32.20%] h-[38.78%] left-[32.20%] absolute top-0 transition-all duration-300"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 18V8M9.5 18V1M2 18V13"
            stroke={pathname === "/statistik" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
        </svg>
        <span
          className={`absolute w-[96.61%] h-[42.86%] top-[57.14%] left-0 flex items-center justify-center font-['Poppins',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal] transition-all duration-300 ${
            pathname === "/statistik" ? "text-hijau-tua font-semibold scale-105" : "text-abu-abu group-hover:text-hijau-tua"
          }`}
        >
          Statistik
        </span>
      </Link>

      {/* Lahan */}
      <Link
        href="/lahan"
        className="w-[11.44%] h-[50.50%] top-[40.59%] left-[56.22%] absolute group transition-all duration-300 hover:scale-105"
        aria-label="Lahan"
      >
        <svg
          className="w-[52.17%] h-[47.06%] left-[23.91%] absolute top-0 transition-all duration-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H10V10H3V3Z"
            stroke={pathname === "/lahan" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
          <path
            d="M14 3H21V10H14V3Z"
            stroke={pathname === "/lahan" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
          <path
            d="M14 14H21V21H14V14Z"
            stroke={pathname === "/lahan" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
          <path
            d="M3 14H10V21H3V14Z"
            stroke={pathname === "/lahan" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
        </svg>
        <span
          className={`absolute w-[95.65%] h-[41.18%] top-[58.82%] left-0 flex items-center justify-center font-poppins-medium-14 font-[number:var(--poppins-medium-14-font-weight)] text-[length:var(--poppins-medium-14-font-size)] text-center tracking-[var(--poppins-medium-14-letter-spacing)] leading-[var(--poppins-medium-14-line-height)] [font-style:var(--poppins-medium-14-font-style)] transition-all duration-300 ${
            pathname === "/lahan" ? "text-hijau-tua font-semibold scale-105" : "text-abu-abu group-hover:text-hijau-tua"
          }`}
        >
          Lahan
        </span>
      </Link>

      {/* Setelan */}
      <Link
        href="/setelan"
        className="w-[13.93%] h-[50.50%] top-[40.59%] left-[78.36%] absolute group transition-all duration-300 hover:scale-105"
        aria-label="Setelan"
      >
        <span
          className={`absolute w-[96.43%] h-[41.18%] top-[58.82%] left-0 flex items-center justify-center font-poppins-medium-14 font-[number:var(--poppins-medium-14-font-weight)] text-[length:var(--poppins-medium-14-font-size)] text-center tracking-[var(--poppins-medium-14-letter-spacing)] leading-[var(--poppins-medium-14-line-height)] [font-style:var(--poppins-medium-14-font-style)] transition-all duration-300 ${
            pathname === "/setelan" ? "text-hijau-tua font-semibold scale-105" : "text-abu-abu group-hover:text-hijau-tua"
          }`}
        >
          Setelan
        </span>
        <svg
          className="w-[42.86%] h-[47.06%] left-[28.57%] absolute top-0 transition-all duration-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke={pathname === "/setelan" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            className="transition-all duration-300 group-hover:stroke-white"
          />
          <path
            d="M19.4 15C19.1277 15.6171 18.7583 16.1936 18.3 16.7L19.5 18.5L18.5 19.5L16.7 18.3C16.1936 18.7583 15.6171 19.1277 15 19.4V21H13V19.4C12.3829 19.1277 11.8064 18.7583 11.3 18.3L9.5 19.5L8.5 18.5L9.7 16.7C9.24167 16.1936 8.87233 15.6171 8.6 15H7V13H8.6C8.87233 12.3829 9.24167 11.8064 9.7 11.3L8.5 9.5L9.5 8.5L11.3 9.7C11.8064 9.24167 12.3829 8.87233 13 8.6V7H15V8.6C15.6171 8.87233 16.1936 9.24167 16.7 9.7L18.5 8.5L19.5 9.5L18.3 11.3C18.7583 11.8064 19.1277 12.3829 19.4 13H21V15H19.4Z"
            stroke={pathname === "/setelan" ? "white" : "#9E9E9E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
        </svg>
      </Link>
    </nav>
  );
}