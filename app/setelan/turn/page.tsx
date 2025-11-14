"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NotifikasiPage() {
  const [aktif, setAktif] = useState(false);

  return (
    <div className="w-full min-h-screen px-6 bg-[#F4FAF4] flex flex-col">
      {/* === HEADER === */}
      <div className="flex items-center gap-4 py-4">
        <Link href="/setelan">
          <ArrowLeft className="text-[#1F4E20] w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-[#1F4E20]">Notifikasi</h1>
      </div>

      {/* === CARD NOTIFIKASI === */}
      <div className="flex items-center justify-between w-full bg-white rounded-[25px] px-4 py-6 border border-[#7FD083] hover:bg-[#F4FAF4] transition">
        
        {/* LEFT SECTION (IMAGE + TEXT) */}
        <div className="flex items-start gap-4">
          <Image
            src="/asset/setelan/notifikasi.svg"
            alt="notifikasi icon"
            width={30}
            height={30}
          />

          <div className="flex flex-col">
            <span className="text-[#1F4E20] font-bold text-lg">Notifikasi</span>
            <span className="text-gray-600 text-sm">
              Aktifkan notifikasi untuk menerima secara real-time.
            </span>
          </div>
        </div>

        {/* === CUSTOM TOGGLE === */}
        <button
          onClick={() => setAktif(!aktif)}
          className={`relative w-12 h-6 rounded-full transition ${
            aktif ? "bg-[#1F4E20]" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all ${
              aktif ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
