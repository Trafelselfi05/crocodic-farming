"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [isPenyiramanOn, setIsPenyiramanOn] = useState(true);
  const [isPemupukanOn, setIsPemupukanOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full px-3.5 pb-6">
      {/* Header */}
      <div className="relative w-full h-5">
        <div className="flex items-center gap-2.5">
          <img src="logo.png" className="w-5 h-5" alt="Logo" />
          <p className="font-medium text-sm text-[#1F4E20]">
            Pertanian Cerdas, Panen Berkualitas
          </p>
        </div>
      </div>

      {/* User Profile & Notification */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="w-[53px] h-[53px] rounded-full bg-[#7FD083] overflow-hidden flex-shrink-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26.5" r="26.5" fill="#7FD083" />
              <circle cx="26.5" cy="20" r="8" fill="#1F4E20" />
              <path
                d="M40 45C40 37.268 34.18 31 27 31H26C18.82 31 13 37.268 13 45"
                fill="#1F4E20"
              />
            </svg>
          </div>
          {/* User Info */}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-[#1F4E20]">Good Morning</p>
            <p className="text-base font-semibold text-[#1F4E20]">Dian</p>
          </div>
        </div>
        {/* Notification Button */}
        <Link
          href="/setelan/notifikasi"
          aria-label="Notifications"
          className="w-[53px] h-[53px] rounded-full bg-[#1F4E20] flex items-center justify-center flex-shrink-0"
        >
          <svg
            className="w-[29px] h-[29px]"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 30C16.933 30 18.5 28.433 18.5 26.5H11.5C11.5 28.433 13.067 30 15 30ZM25.5 20.5V13C25.5 8.365 23.217 4.463 19 3.438V2.5C19 1.119 17.881 0 15 0C12.119 0 11 1.119 11 2.5V3.438C6.783 4.463 4.5 8.365 4.5 13V20.5L1.5 23.5V25H28.5V23.5L25.5 20.5Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>

      {/* Weather Card */}
      <Link
        href="#"
        className="w-full bg-white rounded-[25px] py-3.5 px-0 flex items-center gap-1.5"
      >
        <div className="w-[72px] h-[53px] relative flex-shrink-0">
          <svg
            className="absolute top-2 right-0.5 w-[68px] h-[38px]"
            viewBox="0 0 68 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="12" fill="#FDB813" />
            <path
              d="M19 7V4M19 34V31M31.66 7.34L33.78 5.22M4.22 33.78L6.34 31.66M36 19H39M0 19H3M31.66 30.66L33.78 32.78M4.22 4.22L6.34 6.34"
              stroke="#FDB813"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex-1 flex items-center justify-between pr-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-[#1F4E20]">
              Semarang, Indonesia
            </p>
            <p className="text-base font-semibold text-[#1F4E20]">Sunny</p>
          </div>
          <p className="text-2xl font-bold text-[#1F4E20] -ml-3">23°C</p>
        </div>
        <svg
          className="w-[30px] h-[30px] flex-shrink-0 -mr-1"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 22.5L18.75 15L11.25 7.5"
            stroke="#1F4E20"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Lahan Section */}
      <div className="flex flex-col gap-3.5 w-full">
        {/* Header */}
        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-[#1F4E20] mb-0.5">Lahan</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#1F4E20]">
              Jumlah : 12 lahan
            </p>
            <Link href="#" className="flex items-center gap-0.5">
              <span className="text-sm font-medium text-[#1F4E20]">
                Semua Lahan
              </span>
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="#1F4E20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Lahan Cards */}
        <div className="flex gap-2.5 w-full">
          {/* Lahan 1 */}
          <div className="flex-1 bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] overflow-hidden">
            <div className="flex items-center justify-between px-3 pt-2 h-[33px]">
              <h3 className="text-sm font-semibold text-black">Lahan 1</h3>
              <button type="button" aria-label="More options">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </button>
            </div>
            <div className="px-3 py-1 flex flex-col gap-0.5">
              <p className="text-xs text-black">Luas: 2 Ha</p>
              <p className="text-xs text-black">Tanaman: Padi</p>
            </div>
            <Link
              href="#"
              className="w-full h-[29px] bg-[#7FD083] rounded-b-[10px] flex items-center justify-between px-3"
            >
              <span className="text-xs text-white">Detail</span>
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Lahan 2 */}
          <div className="flex-1 bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] overflow-hidden">
            <div className="flex items-center justify-between px-3 pt-2 h-[33px]">
              <h3 className="text-sm font-semibold text-black">Lahan 2</h3>
              <button type="button" aria-label="More options">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </button>
            </div>
            <div className="px-3 py-1 flex flex-col gap-0.5">
              <p className="text-xs text-black">Luas: 4 Ha</p>
              <p className="text-xs text-black">Tanaman: Jagung</p>
            </div>
            <Link
              href="#"
              className="w-full h-[29px] bg-[#7FD083] rounded-b-[10px] flex items-center justify-between px-3"
            >
              <span className="text-xs text-white">Detail</span>
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Lahan Detail Card */}
      <div className="w-full bg-white rounded-[10px] border border-[#1F4E20] flex flex-col gap-2.5">
        {/* Title */}
        <div className="px-2.5 pt-2.5">
          <h2 className="text-lg font-semibold text-black">Lahan 1</h2>
        </div>

        {/* Toggle Switches */}
        <div className="flex gap-2.5 px-2">
          {/* Penyiraman */}
          <div className="flex-1 bg-[#F4FAF4] border-[0.1px] border-[#1F4E20] rounded-[10px] p-2 flex items-center justify-between min-h-[54px]">
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2V4M10 16V18M4.22 4.22L5.64 5.64M14.36 14.36L15.78 15.78M2 10H4M16 10H18M4.22 15.78L5.64 14.36M14.36 5.64L15.78 4.22"
                  stroke="#1F4E20"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 6C10 8 8 10 10 12C12 10 10 8 10 6Z"
                  fill="#4A90E2"
                  stroke="#4A90E2"
                  strokeWidth="1.5"
                />
              </svg>
              <label className="text-xs text-black leading-tight">
                Penyiraman <br /> Otomatis
              </label>
            </div>
            <button
              onClick={() => setIsPenyiramanOn(!isPenyiramanOn)}
              type="button"
              role="switch"
              aria-checked={isPenyiramanOn}
              className="flex-shrink-0"
            >
              <div
                className={`relative w-[31px] h-[24px] rounded-full transition-colors ${
                  isPenyiramanOn ? "bg-[#7FD083]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-5 h-5 bg-white rounded-full shadow transition-all ${
                    isPenyiramanOn ? "right-[2px]" : "left-[2px]"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Pemupukan */}
          <div className="flex-1 bg-[#F4FAF4] border-[0.1px] border-[#1F4E20] rounded-[10px] p-2 flex items-center justify-between min-h-[54px]">
            <div className="flex items-center gap-1.5">
              <svg className="w-[26px] h-[26px] flex-shrink-0" viewBox="0 0 26 26" fill="none">
                <rect
                  x="6"
                  y="4"
                  width="14"
                  height="18"
                  rx="2"
                  stroke="#1F4E20"
                  strokeWidth="2"
                />
                <path
                  d="M10 10H16M10 14H16M10 18H14"
                  stroke="#1F4E20"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <label className="text-xs text-black leading-tight">
                Pemupukan
                <br />
                Otomatis
              </label>
            </div>
            <button
              onClick={() => setIsPemupukanOn(!isPemupukanOn)}
              type="button"
              role="switch"
              aria-checked={isPemupukanOn}
              className="flex-shrink-0"
            >
              <div
                className={`relative w-[31px] h-[24px] rounded-full transition-colors ${
                  isPemupukanOn ? "bg-[#7FD083]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-5 h-5 bg-white rounded-full shadow transition-all ${
                    isPemupukanOn ? "right-[2px]" : "left-[2px]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

{/* Sensor Data */}
        <div className="flex flex-col gap-2.5 px-2">
          {/* NPK */}
          <div className="h-[73px] bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] flex items-center justify-between px-4">
            <div className="flex items-center gap-5">
              <img 
                src="/asset/beranda/npk.svg" 
                alt="NPK Icon" 
                className="w-[35px] h-[35px] flex-shrink-0"
              />
              <span className="text-base font-semibold text-[#1F4E20]">NPK</span>
            </div>
            <span className="text-base font-semibold text-[#1F4E20]">50ppm</span>
          </div>

          {/* Suhu Tanah */}
          <div className="h-[73px] bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] flex items-center justify-between px-4">
            <div className="flex items-center gap-5">
              <img 
                src="/asset/beranda/suhu.svg" 
                alt="Suhu Tanah Icon" 
                className="w-[35px] h-[35px] flex-shrink-0"
              />
              <span className="text-base font-semibold text-[#1F4E20]">
                Suhu Tanah
              </span>
            </div>
            <span className="text-base font-semibold text-[#1F4E20]">25°C</span>
          </div>

          {/* pH Tanah */}
          <div className="h-[73px] bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] flex items-center justify-between px-4">
            <div className="flex items-center gap-5">
              <img 
                src="/asset/beranda/ph.svg" 
                alt="pH Tanah Icon" 
                className="w-[35px] h-[35px] flex-shrink-0"
              />
              <span className="text-base font-semibold text-[#1F4E20]">
                pH Tanah
              </span>
            </div>
            <span className="text-base font-semibold text-[#1F4E20]">7.5</span>
          </div>

          {/* Kelembaban Tanah */}
          <div className="h-[73px] bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] flex items-center justify-between px-4">
            <div className="flex items-center gap-5">
              <img 
                src="/asset/beranda/kelembapantanah.svg" 
                alt="Kelembaban Tanah Icon" 
                className="w-[35px] h-[35px] flex-shrink-0"
              />
              <span className="text-base font-semibold text-[#1F4E20]">
                Kelembaban Tanah
              </span>
            </div>
            <span className="text-base font-semibold text-[#1F4E20]">5%</span>
          </div>

          {/* Suhu Lingkungan */}
          <div className="h-[73px] bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] flex items-center justify-between px-4">
            <div className="flex items-center gap-5">
              <img 
                src="/asset/beranda/suhulingkungan.svg" 
                alt="Suhu Lingkungan Icon" 
                className="w-[35px] h-[35px] flex-shrink-0"
              />
              <span className="text-base font-semibold text-[#1F4E20]">
                Suhu Lingkungan
              </span>
            </div>
            <span className="text-base font-semibold text-[#1F4E20]">30°C</span>
          </div>

          {/* Kelembaban Lingkungan */}
          <div className="h-[95px] bg-white rounded-[10px] border-[0.5px] border-[#1F4E20] flex items-center justify-between px-4">
            <div className="flex items-center gap-5">
              <img 
                src="/asset/beranda/kelembapanlingkungan.svg" 
                alt="Kelembaban Lingkungan Icon" 
                className="w-[35px] h-[35px] flex-shrink-0"
              />
              <span className="text-base font-semibold text-[#1F4E20]">
                Kelembaban <br />
                Lingkungan
              </span>
            </div>
            <span className="text-base font-semibold text-[#1F4E20]">25°C</span>
          </div>
        </div>

        {/* Detail Button */}
        <Link
          href="#"
          className="mx-2 mb-2.5 bg-[#1F4E20] rounded-[10px] flex items-center justify-center gap-24 py-4"
        >
          <span className="text-base font-semibold text-white">
            Lihat Detail Lahan
          </span>
          <svg className="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none">
            <path
              d="M11.25 22.5L18.75 15L11.25 7.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}