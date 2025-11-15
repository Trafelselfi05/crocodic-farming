"use client";

import Link from "next/link";
import { useState } from "react";

export default function AturZonaWaktuPage() {
  const [zona, setZona] = useState("wib");

  const zonaOptions = [
    {
      value: "wib",
      label: "WIB – Waktu Indonesia Barat (UTC+7)",
    },
    {
      value: "wita",
      label: "WITA – Waktu Indonesia Tengah (UTC+8)",
    },
    {
      value: "wit",
      label: "WIT – Waktu Indonesia Timur (UTC+9)",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4FAF4] px-6 py-4">
      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <Link href="/setelan">
          <button
            className="flex items-center justify-center w-10 h-10 transition-transform hover:scale-105"
            type="button"
            aria-label="Kembali"
          >
            <img
              className="w-6 h-6"
              src="/asset/setelan/back.svg"
              alt="Kembali"
            />
          </button>
        </Link>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-[#1F4E20]">
            Atur Zona Waktu
          </h1>
        </div>
      </div>

      {/* Radio Options */}
      <form className="space-y-4" role="radiogroup">
        {zonaOptions.map((option) => (
          <div key={option.value} className="flex justify-center">
            <label className="flex items-center w-full p-4 bg-white border border-[#AAAAAA] rounded-[25px] cursor-pointer transition-all hover:bg-[#F8FCF8] hover:border-[#7FD083]">
              <div className="flex items-center w-full gap-8">
                {/* Custom Radio Button */}
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="timezone"
                    value={option.value}
                    checked={zona === option.value}
                    onChange={(e) => setZona(e.target.value)}
                    className="absolute w-6 h-6 opacity-0 cursor-pointer"
                  />

                  {/* Radio Circle */}
                  <div className={`w-6 h-6 rounded-full border-4 transition-all ${zona === option.value
                      ? "border-[#7FD083] bg-[#1F4E20]"
                      : "border-[#7FD083] bg-transparent"
                    }`}>
                    {zona === option.value && (
                      <div className="w-full h-full rounded-full bg-[#1F4E20] border border-white" />
                    )}
                  </div>
                </div>

                {/* Label */}
                <span className="text-sm font-normal text-black">
                  {option.label}
                </span>
              </div>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}