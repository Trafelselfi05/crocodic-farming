"use client";

import { ArrowLeft, Trash2,Settings2 as Filter, Clock, Droplet } from "lucide-react";
import React, { useState } from "react";

type Notifikasi = {
  id: number;
  lahan: string;
  judul: string;
  deskripsi: string;
  waktu: string;
};

const dummyNotifikasi: Notifikasi[] = [
  {
    id: 1,
    lahan: "Lahan 1",
    judul: "Penyiraman Otomatis",
    deskripsi: "Penyiraman berjalan 15 menit",
    waktu: "27 menit yang lalu",
  },
  {
    id: 2,
    lahan: "Lahan 2",
    judul: "Pemupukan Otomatis",
    deskripsi: "Pemupukan selesai 10 menit lalu",
    waktu: "10 menit yang lalu",
  },
  {
    id: 3,
    lahan: "Lahan 1",
    judul: "Penyiraman Otomatis",
    deskripsi: "Penyiraman selesai",
    waktu: "1 jam yang lalu",
  },
  {
    id: 4,
    lahan: "Lahan 3",
    judul: "Sensor Kelembapan",
    deskripsi: "Kelembapan turun 20%",
    waktu: "2 jam yang lalu",
  },
  {
    id: 5,
    lahan: "Lahan 2",
    judul: "Penyiraman Otomatis",
    deskripsi: "Penyiraman berjalan 10 menit",
    waktu: "15 menit yang lalu",
  },
  {
    id: 6,
    lahan: "Lahan 4",
    judul: "Penyiraman Otomatis",
    deskripsi: "Penyiraman dimulai",
    waktu: "5 menit yang lalu",
  },
  {
    id: 7,
    lahan: "Lahan 3",
    judul: "Pemupukan Otomatis",
    deskripsi: "Pemupukan dimulai",
    waktu: "30 menit yang lalu",
  },
  {
    id: 8,
    lahan: "Lahan 5",
    judul: "Sensor Suhu Tanah",
    deskripsi: "Suhu meningkat 3°C",
    waktu: "12 menit yang lalu",
  },
  {
    id: 9,
    lahan: "Lahan 1",
    judul: "Sensor Kelembapan",
    deskripsi: "Kelembapan normal kembali",
    waktu: "50 menit yang lalu",
  },
  {
    id: 10,
    lahan: "Lahan 4",
    judul: "Penyiraman Otomatis",
    deskripsi: "Penyiraman selesai",
    waktu: "20 menit yang lalu",
  },
  {
    id: 11,
    lahan: "Lahan 5",
    judul: "Pemupukan Otomatis",
    deskripsi: "Pemupukan berjalan 8 menit",
    waktu: "8 menit yang lalu",
  },
  {
    id: 12,
    lahan: "Lahan 2",
    judul: "Sensor Suhu Tanah",
    deskripsi: "Suhu turun 2°C",
    waktu: "25 menit yang lalu",
  },
];

export default function NotifikasiPage() {
  const [filter, setFilter] = useState<string>("Semua");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const lahanOptions = [
    "Semua",
    "Lahan 1",
    "Lahan 2",
    "Lahan 3",
    "Lahan 4",
    "Lahan 5",
  ];

  const filteredData =
    filter === "Semua"
      ? dummyNotifikasi
      : dummyNotifikasi.filter((n) => n.lahan === filter);

  return (
    <div className="bg-[#F4FAF4] px-6 w-full flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-soft">
        <div className="flex justify-between items-center mb-4 ">
          <button className="p-2 rounded-full hover:bg-[#7FD083]/20 transition">
            <ArrowLeft className="w-5 h-5 text-[#1F4E20]" />
          </button>
          <h1 className="text-xl font-semibold text-[#1F4E20]">Notifikasi</h1>
          <button className="p-2 rounded-full hover:bg-[#7FD083]/20 transition">
            <Trash2 className="w-5 h-5 text-[#1F4E20]" />
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative mb-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center bg-white border border-[#7FD083] px-4 py-2 rounded-lg shadow-sm text-[#1F4E20] hover:bg-[#7FD083]/10 transition"
          >
            <span>{filter}</span>
            <Filter className="w-5 h-5 text-[#7FD083]" />
          </button>

          {dropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border border-[#7FD083] rounded-lg shadow-md z-10">
              {lahanOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-[#7FD083]/10 ${
                    option === filter ? "bg-[#7FD083]/10 font-semibold" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="flex flex-col gap-3 overflow-y-auto pb-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-white rounded-lg shadow-sm border border-[#7FD083]/50 p-4"
          >
            <Droplet className="w-9 h-9 text-[#7FD083]" />
            <div className="flex flex-col space-y-2">
              <p className="text-[#1F4E20] font-semibold">
                {item.lahan} - {item.judul}
              </p>
              <p className="text-gray-700 text-sm">{item.deskripsi}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4" />
                <span>{item.waktu}</span>
              </div>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            Tidak ada notifikasi untuk {filter}.
          </p>
        )}
      </div>
    </div>
  );
}
