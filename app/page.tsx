"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [isPenyiramanOn, setIsPenyiramanOn] = useState(true);
  const [isPemupukanOn, setIsPemupukanOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full px-3.5 pb-6 font-['Poppins']">
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
          <div className="w-[155px] h-[54px] bg-[#F4FAF4] border-[0.1px] border-[#1F4E20] rounded-[10px] p-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <img
                src="/asset/lahan/penyiraman-otomatis.svg"
                alt="Ikon penyiraman"
                className="w-5 h-5 flex-shrink-0"
              />
              <label className="text-xs text-black leading-tight font-normal">
                Penyiraman <br /> Otomatis
              </label>
            </div>
            <button
              onClick={() => setIsPenyiramanOn(!isPenyiramanOn)}
              type="button"
              aria-label="Toggle penyiraman otomatis"
              aria-pressed={isPenyiramanOn}
              className="w-[31px] h-[18px] flex-shrink-0 bg-transparent border-none cursor-pointer flex items-center justify-center"
            >
              {isPenyiramanOn ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="19" viewBox="0 0 31 19" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.1088 9.04167C30.1088 6.64367 29.1561 4.34388 27.4605 2.64824C25.7649 0.952601 23.4651 0 21.0671 0H9.04167C6.64367 3.5733e-08 4.34388 0.952601 2.64824 2.64824C0.952602 4.34388 0 6.64367 0 9.04167C0 11.4397 0.952602 13.7394 2.64824 15.4351C4.34388 17.1307 6.64367 18.0833 9.04167 18.0833H21.0671C23.4651 18.0833 25.7649 17.1307 27.4605 15.4351C29.1561 13.7394 30.1088 11.4397 30.1088 9.04167ZM21.1562 3.35575C21.9028 3.35575 22.6421 3.5028 23.3319 3.78852C24.0216 4.07423 24.6484 4.493 25.1763 5.02093C25.7042 5.54885 26.123 6.17559 26.4087 6.86536C26.6944 7.55513 26.8415 8.29442 26.8415 9.04102C26.8415 9.78762 26.6944 10.5269 26.4087 11.2167C26.123 11.9064 25.7042 12.5332 25.1763 13.0611C24.6484 13.589 24.0216 14.0078 23.3319 14.2935C22.6421 14.5792 21.9028 14.7263 21.1562 14.7263C19.6484 14.7263 18.2023 14.1273 17.1361 13.0611C16.0699 11.9949 15.4709 10.5488 15.4709 9.04102C15.4709 7.53319 16.0699 6.08712 17.1361 5.02093C18.2023 3.95473 19.6484 3.35575 21.1562 3.35575Z" fill="#1F4E20" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="18" viewBox="0 0 31 18" fill="none">
                  <path d="M29.4237 8.82292C29.4237 6.68185 28.5732 4.62847 27.0592 3.1145C25.5452 1.60054 23.4919 0.75 21.3508 0.75H8.82292C6.68185 0.75 4.62847 1.60054 3.1145 3.1145C1.60054 4.62847 0.75 6.68185 0.75 8.82292C0.75 10.964 1.60054 13.0174 3.1145 14.5313C4.62847 16.0453 6.68185 16.8958 8.82292 16.8958H21.3495C23.4906 16.8958 25.544 16.0453 27.0579 14.5313C28.5719 13.0174 29.4224 10.964 29.4224 8.82292H29.4237Z" stroke="#AAAAAA" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Pemupukan */}
          <div className="w-[155px] h-[54px] bg-[#F4FAF4] border-[0.1px] border-[#1F4E20] rounded-[10px] p-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-[26px] h-[26px] flex-shrink-0 relative">
                <img
                  src="/asset/lahan/pemupukan-otomatis.svg"
                  alt="Ikon pemupukan"
                  className="absolute w-[76.94%] h-[91.89%] top-[4.28%] left-[12.36%]"
                />
              </div>
              <label className="text-xs text-black leading-tight font-normal">
                Pemupukan
                <br />
                Otomatis
              </label>
            </div>
            <button
              onClick={() => setIsPemupukanOn(!isPemupukanOn)}
              type="button"
              aria-label="Toggle pemupukan otomatis"
              aria-pressed={isPemupukanOn}
              className="w-[31px] h-[18px] flex-shrink-0 bg-transparent border-none cursor-pointer flex items-center justify-center"
            >
              {isPemupukanOn ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="19" viewBox="0 0 31 19" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.1088 9.04167C30.1088 6.64367 29.1561 4.34388 27.4605 2.64824C25.7649 0.952601 23.4651 0 21.0671 0H9.04167C6.64367 3.5733e-08 4.34388 0.952601 2.64824 2.64824C0.952602 4.34388 0 6.64367 0 9.04167C0 11.4397 0.952602 13.7394 2.64824 15.4351C4.34388 17.1307 6.64367 18.0833 9.04167 18.0833H21.0671C23.4651 18.0833 25.7649 17.1307 27.4605 15.4351C29.1561 13.7394 30.1088 11.4397 30.1088 9.04167ZM21.1562 3.35575C21.9028 3.35575 22.6421 3.5028 23.3319 3.78852C24.0216 4.07423 24.6484 4.493 25.1763 5.02093C25.7042 5.54885 26.123 6.17559 26.4087 6.86536C26.6944 7.55513 26.8415 8.29442 26.8415 9.04102C26.8415 9.78762 26.6944 10.5269 26.4087 11.2167C26.123 11.9064 25.7042 12.5332 25.1763 13.0611C24.6484 13.589 24.0216 14.0078 23.3319 14.2935C22.6421 14.5792 21.9028 14.7263 21.1562 14.7263C19.6484 14.7263 18.2023 14.1273 17.1361 13.0611C16.0699 11.9949 15.4709 10.5488 15.4709 9.04102C15.4709 7.53319 16.0699 6.08712 17.1361 5.02093C18.2023 3.95473 19.6484 3.35575 21.1562 3.35575Z" fill="#1F4E20" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="18" viewBox="0 0 31 18" fill="none">
                  <path d="M29.4237 8.82292C29.4237 6.68185 28.5732 4.62847 27.0592 3.1145C25.5452 1.60054 23.4919 0.75 21.3508 0.75H8.82292C6.68185 0.75 4.62847 1.60054 3.1145 3.1145C1.60054 4.62847 0.75 6.68185 0.75 8.82292C0.75 10.964 1.60054 13.0174 3.1145 14.5313C4.62847 16.0453 6.68185 16.8958 8.82292 16.8958H21.3495C23.4906 16.8958 25.544 16.0453 27.0579 14.5313C28.5719 13.0174 29.4224 10.964 29.4224 8.82292H29.4237Z" stroke="#AAAAAA" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              )}
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