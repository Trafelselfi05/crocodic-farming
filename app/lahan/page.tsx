"use client";

import { useState } from "react";

interface Lahan {
  id: number;
  nama: string;
  luas: string;
  tanaman: string;
}

const dummyLahan: Lahan[] = [
  { id: 1, nama: "Lahan 1", luas: "2 ha", tanaman: "Padi" },
  { id: 2, nama: "Lahan 2", luas: "1.5 ha", tanaman: "Jagung" },
  { id: 3, nama: "Lahan 3", luas: "3 ha", tanaman: "Kedelai" },
  { id: 4, nama: "Lahan 4", luas: "2.2 ha", tanaman: "Tebu" },
  { id: 5, nama: "Lahan 5", luas: "1.8 ha", tanaman: "Kopi" },
  { id: 6, nama: "Lahan 6", luas: "4 ha", tanaman: "Padi" },
  { id: 7, nama: "Lahan 7", luas: "2.7 ha", tanaman: "Jagung" },
  { id: 8, nama: "Lahan 8", luas: "1.9 ha", tanaman: "Kedelai" },
  { id: 9, nama: "Lahan 9", luas: "2.5 ha", tanaman: "Tebu" },
  { id: 10, nama: "Lahan 10", luas: "3.1 ha", tanaman: "Kopi" },
  { id: 11, nama: "Lahan 11", luas: "2 ha", tanaman: "Padi" },
  { id: 12, nama: "Lahan 12", luas: "3.5 ha", tanaman: "Jagung" },
];

export default function LahanPage() {
  const [filter, setFilter] = useState<string>("");

  return (
    <div className="min-h-screen bg-[#F4FAF4] p-4 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#1F4E20]">Lahan</h1>
        <button
          onClick={() => setFilter("clicked")}
          className="flex items-center gap-2 bg-[#7FD083] text-[#1F4E20] px-4 py-2 rounded-full shadow hover:bg-[#6ac172] transition"
        >
          ft Filter
        </button>
      </header>

      {/* Scrollable Filter Options (jika ingin vertical scroll filter) */}
      <div className="flex flex-col gap-2 max-h-[120px] overflow-y-auto mb-4">
        <button className="bg-white text-[#1F4E20] border border-[#7FD083] rounded-full px-4 py-2 text-sm hover:bg-[#7FD083] hover:text-white transition">
          Semua
        </button>
        <button className="bg-white text-[#1F4E20] border border-[#7FD083] rounded-full px-4 py-2 text-sm hover:bg-[#7FD083] hover:text-white transition">
          Padi
        </button>
        <button className="bg-white text-[#1F4E20] border border-[#7FD083] rounded-full px-4 py-2 text-sm hover:bg-[#7FD083] hover:text-white transition">
          Jagung
        </button>
        <button className="bg-white text-[#1F4E20] border border-[#7FD083] rounded-full px-4 py-2 text-sm hover:bg-[#7FD083] hover:text-white transition">
          Kopi
        </button>
      </div>

      {/* Tombol Tambah Lahan */}
      <button className="flex items-center justify-center w-full bg-[#1F4E20] text-white py-3 rounded-md mb-4 hover:bg-[#2f6532] transition">
        pl{" "}
      </button>

      {/* Container Card (scrollable) */}
      <div className="grid grid-cols-2 grid-flow-row gap-4 overflow-y-auto">
        {dummyLahan.map((lahan) => (
          <div
            key={lahan.id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between border border-[#7FD083]"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-[#1F4E20]">
                {lahan.nama}
              </h2>
              lf{" "}
            </div>

            <p className="text-sm text-[#1F4E20]">Luas: {lahan.luas}</p>
            <p className="text-sm text-[#1F4E20] mb-4">
              Tanaman: {lahan.tanaman}
            </p>

            <button className="bg-[#7FD083] text-[#1F4E20] font-semibold rounded-b-md py-2 hover:bg-[#6ac172] transition">
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
