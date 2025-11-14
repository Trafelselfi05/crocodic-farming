"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AturZonaWaktuPage() {
  const [zona, setZona] = useState("WIB");

  return (
    <div className="w-full min-h-screen px-6 bg-[#F4FAF4] flex flex-col">
      {/* === HEADER === */}
      <div className="flex items-center gap-4 py-4">
        <Link href="/setelan">
          <ArrowLeft className="text-[#1F4E20] w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-[#1F4E20]">Atur Zona Waktu</h1>
      </div>

      {/* === RADIO LIST === */}
      <div className="flex flex-col gap-4 mt-2">

        {/* WIB */}
        <label
          className="flex items-center gap-3 bg-white px-4 py-4 rounded-full border border-[#7FD083] cursor-pointer"
        >
          <input
            type="radio"
            name="zona"
            value="WIB"
            checked={zona === "WIB"}
            onChange={(e) => setZona(e.target.value)}
            className="w-5 h-5 accent-[#1F4E20]"
          />
          <span className="text-[#1F4E20] font-medium">
            WIB – Waktu Indonesia Barat (UTC+7)
          </span>
        </label>

        {/* WITA */}
        <label
          className="flex items-center gap-3 bg-white px-4 py-4 rounded-full border border-[#7FD083] cursor-pointer"
        >
          <input
            type="radio"
            name="zona"
            value="WITA"
            checked={zona === "WITA"}
            onChange={(e) => setZona(e.target.value)}
            className="w-5 h-5 accent-[#1F4E20]"
          />
          <span className="text-[#1F4E20] font-medium">
            WITA – Waktu Indonesia Tengah (UTC+8)
          </span>
        </label>

        {/* WIT */}
        <label
          className="flex items-center gap-3 bg-white px-4 py-4 rounded-full border border-[#7FD083] cursor-pointer"
        >
          <input
            type="radio"
            name="zona"
            value="WIT"
            checked={zona === "WIT"}
            onChange={(e) => setZona(e.target.value)}
            className="w-5 h-5 accent-[#1F4E20]"
          />
          <span className="text-[#1F4E20] font-medium">
            WIT – Waktu Indonesia Timur (UTC+9)
          </span>
        </label>
      </div>
    </div>
  );
}
