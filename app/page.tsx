"use client";

import Link from "next/link";
import Image from "next/image";


export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <div className="relative h-5 w-full ml-12">
        <div className="flex items-center gap-2.5 py-0 relative">
          {/* Ikon SVG */}
          <svg
            className="w-5 h-5" // Menggunakan w-5 h-5 (20px) untuk mendekati 19px
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Menggunakan bg-green-800 sebagai pengganti warna solid #1F4E20 */}
            <rect width="19" height="19" rx="4" fill="#1F4E20" />
            <path
              d="M9.5 5V14M6 9.5H13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Teks */}
          <p
            // Mengganti properti kaku dengan class standar
            className="
        relative 
        flex 
        items-center 
        justify-center 
        font-poppins 
        font-medium 
        text-sm 
        leading-none 
        text-[#1F4E20] 

      "
          >
            Pertanian Cerdas, Panen Berkualitas
          </p>
        </div>
      </div>

      {/* User Profile & Weather */}
      <div className="flex items-start px-6 flex-col relative w-full ">
        {/* Header (Profile & Notification) */}
        <div className="flex items-center justify-between gap-6 relative w-full mb-4">
          <div className="flex items-center gap-4 relative">
            {/* Profile Picture */}
            <div className="relative w-14 h-14 rounded-full bg-[#7FD083] overflow-hidden">
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
            {/* User Info Text */}
            <div className="flex-col items-start flex relative">
              <div className="inline-flex h-4 items-center justify-start relative px-0">
                <p className="relative w-fit text-sm font-medium text-[#1F4E20]">
                  Good Morning
                </p>
              </div>
              <div className="flex items-center justify-start relative w-full px-0">
                <p className="relative w-auto font-semibold text-[#1F4E20] text-base leading-none">
                  Dian
                </p>
              </div>
            </div>
          </div>
          {/* Notification Button */}
          <button
            type="button"
            aria-label="Notifications"
            className="w-14 h-14 rounded-full flex items-center justify-center"
          >
            <svg
              className="relative w-full h-full"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26.5" r="26.5" fill="white" />
              <path
                d="M26.5 40C28.433 40 30 38.433 30 36.5H23C23 38.433 24.567 40 26.5 40ZM37 30.5V23C37 18.365 34.717 14.463 30.5 13.438V12.5C30.5 11.119 29.381 10 26.5 10C23.619 10 22.5 11.119 22.5 12.5V13.438C18.283 14.463 16 18.365 16 23V30.5L13 33.5V35H40V33.5L37 30.5Z"
                fill="#1F4E20"
              />
              <circle cx="38" cy="15" r="7" fill="#FF3B30" />
            </svg>
          </button>
        </div>
        {/* Weather Card */}
        <article
          className="flex w-full items-center gap-2.5  p-3 bg-white rounded-3xl flex-col"
          aria-label="Weather information"
        >
          <Link
            href="#"
            className="flex w-full px-2 items-center justify-between relative"
          >
            <div className="relative w-16 h-12">
              {/* SVG Icon Cuaca (Matahari) */}
              <svg
                className="absolute top-2 right-0.5 w-16 h-10"
                viewBox="0 0 68 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... (detail SVG tetap sama) ... */}
                <circle cx="19" cy="19" r="12" fill="#FDB813" />
                <path
                  d="M19 7V4M19 34V31M31.66 7.34L33.78 5.22M4.22 33.78L6.34 31.66M36 19H39M0 19H3M31.66 30.66L33.78 32.78M4.22 4.22L6.34 6.34"
                  stroke="#FDB813"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex items-center relative flex-1 justify-between">
              {/* Lokasi & Status Cuaca */}
              <div className="flex flex-col items-start gap-1 relative w-auto">
                <p className="relative w-full text-sm font-medium text-[#1F4E20]">
                  Semarang, Indonesia
                </p>
                <p className="relative w-full font-semibold text-[#1F4E20] text-base leading-none">
                  Sunny
                </p>
              </div>
              {/* Suhu */}
              <p className="relative w-auto text-3xl font-bold text-[#1F4E20]">
                23°C
              </p>
            </div>

            {/* Arrow Icon */}
            <svg
              className="w-8 h-8 relative"
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
        </article>
      </div>

      {/* Lahan Section */}
      <section
        className="flex flex-col items-start gap-4 px-6 relative w-full "
        aria-labelledby="lahan-heading"
      >
        <div className="flex flex-col items-start relative w-full ">
          {/* Header Lahan & "Semua Lahan" Link */}
          <div className="flex w-full items-center justify-between relative mb-2">
            {/* Title */}
            <div className="flex items-center relative flex-1">
              <h2
                id="lahan-heading"
                className="relative font-poppins font-semibold text-base text-[#1F4E20]"
              >
                Lahan
              </h2>
            </div>
          </div>

          {/* Jumlah Lahan & "Semua Lahan" Link */}
          <div className="flex w-full items-center justify-between relative">
            {/* Jumlah */}
            <div className="flex items-center relative">
              <p className="relative font-poppins font-medium text-sm text-[#1F4E20] leading-normal">
                Jumlah : 12 lahan
              </p>
            </div>
            {/* Link Semua Lahan */}
            <Link href="#" className="flex items-center gap-1 relative">
              <span className="relative font-poppins font-medium text-sm text-[#1F4E20] leading-normal">
                Semua Lahan
              </span>
              <svg
                className="relative w-4 h-4"
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

        {/* Lahan Cards Container (Horizontal Scroll/Wrap) */}
        <div className="flex w-full items-start gap-3 relative flex-wrap">
          {/* Lahan 1 Card */}
          <article
            className="flex flex-col flex-1 min-w-[160px] h-28 items-center justify-between relative bg-white rounded-lg border border-solid border-[#1f4e20]"
            aria-label="Lahan 1"
          >
            <div className="flex w-full items-center justify-between px-3 pt-2 relative">
              <div className="flex items-center">
                <h3 className="relative w-fit font-poppins font-semibold text-sm text-black">
                  Lahan 1
                </h3>
              </div>
              <button type="button" aria-label="More options for Lahan 1">
                <svg
                  className="relative w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-start gap-0.5 relative w-full px-3">
              <p className="relative w-fit text-xs font-normal text-black leading-none">
                Luas: 2 Ha
              </p>
              <p className="relative w-fit text-xs font-normal text-black leading-none">
                Tanaman: Padi
              </p>
            </div>

            {/* Detail Button */}
            <Link
              href="#"
              className="flex w-full h-7 items-center justify-center relative bg-[#7FD083] rounded-b-lg"
            >
              <span className="relative font-poppins font-normal text-xs text-white">
                Detail
              </span>
              <svg
                className="relative w-4 h-4 ml-1"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          </article>
          {/* Lahan 2 Card (Struktur sama dengan Lahan 1) */}
          <article
            className="flex flex-col flex-1 min-w-[160px] h-28 items-center justify-between relative bg-white rounded-lg border border-solid border-[#1f4e20]"
            aria-label="Lahan 2"
          >
            <div className="flex w-full items-center justify-between px-3 pt-2 relative">
              <div className="flex items-center">
                <h3 className="relative w-fit font-poppins font-semibold text-sm text-black">
                  Lahan 2
                </h3>
              </div>
              <button type="button" aria-label="More options for Lahan 2">
                <svg
                  className="relative w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-start gap-0.5 relative w-full px-3">
              <p className="relative w-fit text-xs font-normal text-black leading-none">
                Luas: 4 Ha
              </p>
              <p className="relative w-fit text-xs font-normal text-black leading-none">
                Tanaman: Jagung
              </p>
            </div>

            {/* Detail Button */}
            <Link
              href="#"
              className="flex w-full h-7 items-center justify-center relative bg-[#7FD083] rounded-b-lg"
            >
              <span className="relative font-poppins font-normal text-xs text-white">
                Detail
              </span>
              <svg
                className="relative w-4 h-4 ml-1"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          </article>
        </div>
      </section>

      {/* Lahan Detail Card */}
      <article
        className=" px-6 w-full bg-green-600ail-heading"
      >
        <div className="rounded-lg border border-solid border-[#1f4e20] flex flex-col gap-4 items-center px-2">
          <div className="flex flex-col items-start relative w-full">
            {/* Header Title */}
            <div className="flex items-start px-2 py-1 relative w-full">
              <h2
                id="lahan-detail-heading"
                className="relative font-poppins font-semibold text-lg text-black"
              >
                Lahan 1
              </h2>
            </div>
          </div>

          {/* Toggle Switches Container */}
          <div className="flex items-center justify-between gap-3 relative w-full px-2">
            {/* Toggle Penyiraman Otomatis (Checked) */}
            <div className="flex flex-1 items-center justify-between p-2 relative bg-[#E0F5E1] rounded-lg border border-solid border-[#1f4e20]">
              <div className="flex items-center gap-1">
                <svg
                  className="relative w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <label className="flex flex-col items-start justify-center">
                  <span className="relative w-fit text-xs font-normal text-black leading-tight">
                    Penyiraman <br />
                    Otomatis
                  </span>
                </label>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked="true"
                aria-label="Toggle penyiraman otomatis"
                className="flex-shrink-0"
              >
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="10"
                    width="29"
                    height="11"
                    rx="5.5"
                    fill="#7FD083"
                  />
                  <circle cx="21" cy="15.5" r="6.5" fill="white" />
                </svg>
              </button>
            </div>
            {/* Toggle Pemupukan Otomatis (Unchecked) */}
            <div className="flex flex-1 items-center justify-between p-2 relative bg-[#E0F5E1] rounded-lg border border-solid border-[#1f4e20]">
              <div className="flex items-center gap-1">
                <svg
                  className="relative w-6 h-6"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... (detail SVG tetap sama) ... */}
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
                <label className="flex flex-col items-start justify-center">
                  <span className="relative w-fit text-xs font-normal text-black leading-tight">
                    Pemupukan
                    <br />
                    Otomatis
                  </span>
                </label>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked="false"
                aria-label="Toggle pemupukan otomatis"
                className="flex-shrink-0"
              >
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="10"
                    width="29"
                    height="11"
                    rx="5.5"
                    fill="#E0E0E0" // Off state color (Gray)
                  />
                  <circle cx="10" cy="15.5" r="6.5" fill="white" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sensor Data Container */}
          <div className="flex flex-col w-full items-center gap-3 relative px-2">
            {/* Data NPK */}
            <div className="flex h-[73px] items-center justify-between p-4 relative w-full bg-white rounded-lg border border-solid border-[#1f4e20]">
              <div className="inline-flex items-center gap-5 relative">
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="8"
                    width="19"
                    height="19"
                    rx="2"
                    fill="#8B4513"
                  />
                  {/* Soil Brown */}
                  <text
                    x="17.5"
                    y="20"
                    fontSize="10"
                    fill="white"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    NPK
                  </text>
                </svg>
                <div className="flex flex-col w-auto items-start justify-center relative">
                  <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                    NPK
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center relative">
                <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                  50ppm
                </span>
              </div>
            </div>
            {/* Data Suhu Tanah */}
            <div className="flex h-[73px] items-center justify-between p-4 relative w-full bg-white rounded-lg border border-solid border-[#1f4e20]">
              <div className="inline-flex items-center gap-5 relative">
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Thermometer SVG */}
                  <rect
                    x="14"
                    y="5"
                    width="7"
                    height="18"
                    rx="3.5"
                    fill="#FF6B6B"
                    stroke="#FF6B6B"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="26" r="5" fill="#FF6B6B" />
                  <line
                    x1="17.5"
                    y1="10"
                    x2="17.5"
                    y2="22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col w-auto items-start justify-center relative">
                  <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                    Suhu Tanah
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center relative">
                <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                  25°C
                </span>
              </div>
            </div>
            {/* Data pH Tanah */}
            <div className="flex h-[73px] items-center justify-between p-4 relative w-full bg-white rounded-lg border border-solid border-[#1f4e20]">
              <div className="inline-flex items-center gap-5 relative">
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* pH Icon SVG */}
                  <path
                    d="M17.5 7L14 15H21L17.5 28L21 20H14L17.5 7Z"
                    fill="#4ECDC4"
                    stroke="#4ECDC4"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="14"
                    stroke="#4ECDC4"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <div className="flex flex-col w-auto items-start justify-center relative">
                  <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                    pH Tanah
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center relative">
                <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                  7.5
                </span>
              </div>
            </div>
            {/* Data Kelembaban Tanah */}
            <div className="flex h-[73px] items-center justify-between p-4 relative w-full bg-white rounded-lg border border-solid border-[#1f4e20]">
              {/* Mengubah gap-[65px] menjadi justify-between */}
              <div className="inline-flex items-center gap-5 relative">
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Droplet Icon SVG */}
                  <path
                    d="M17.5 6C17.5 6 10 14 10 20C10 24.418 13.582 28 17.5 28C21.418 28 25 24.418 25 20C25 14 17.5 6 17.5 6Z"
                    fill="#4A90E2"
                    stroke="#4A90E2"
                    strokeWidth="2"
                  />
                </svg>
                <div className="flex flex-col w-auto items-start justify-center relative">
                  <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                    Kelembaban Tanah
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center relative">
                <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                  5%
                </span>
              </div>
            </div>
            {/* Data Suhu Lingkungan */}
            <div className="flex h-[73px] items-center justify-between p-4 relative w-full bg-white rounded-lg border border-solid border-[#1f4e20]">
              <div className="inline-flex items-center gap-5 relative">
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Temperature Circle Icon SVG */}
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="12"
                    stroke="#FF6B6B"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="17.5"
                    y="21"
                    fontSize="14"
                    fill="#FF6B6B"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    °C
                  </text>
                </svg>
                <div className="flex flex-col w-auto items-start justify-center relative">
                  {/* Menghilangkan margin negatif */}
                  <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                    Suhu Lingkungan
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center relative">
                <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                  30°C
                </span>
              </div>
            </div>
            {/* Data Kelembaban Lingkungan */}
            <div className="flex h-[95px] items-center justify-between p-4 relative w-full bg-white rounded-lg border border-solid border-[#1f4e20]">
              {/* Mengubah h-[95px] menjadi h-24 (96px), justify-center menjadi justify-between */}
              <div className="inline-flex items-center gap-5 relative">
                <svg
                  className="relative w-8 h-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Droplet Icon SVG */}
                  <path
                    d="M17.5 6C17.5 6 10 14 10 20C10 24.418 13.582 28 17.5 28C21.418 28 25 24.418 25 20C25 14 17.5 6 17.5 6Z"
                    fill="#4A90E2"
                    stroke="#4A90E2"
                    strokeWidth="2"
                  />
                </svg>
                <div className="flex flex-col w-auto items-start justify-center relative">
                  <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                    Kelembaban <br />
                    Lingkungan
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center relative">
                <span className="relative font-poppins font-semibold text-base text-[#1F4E20]">
                  25°C
                </span>
              </div>
            </div>
          </div>

          {/* Detail Button */}
          <Link
            href="#"
            className="flex w-full items-center justify-center gap-8 py-4 relative bg-[#1F4E20] rounded-lg"
          >
            <span className="relative font-poppins font-semibold text-base text-white">
              Lihat Detail Lahan
            </span>
            <svg
              className="relative w-6 h-6"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
      </article>
    </>
  );
}
