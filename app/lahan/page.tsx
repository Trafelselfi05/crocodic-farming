"use client";

import { useState } from "react";
import { Filter, ChevronRight } from "lucide-react";

interface Lahan {
  id: number;
  nama: string;
  luas: string;
  tanaman: string;
}

export default function LahanPage() {
  const [filter, setFilter] = useState<string>("Semua");

  const dataLahan: Lahan[] = [
    { id: 1, nama: "Lahan 1", luas: "2 ha", tanaman: "Padi" },
    { id: 2, nama: "Lahan 2", luas: "1.5 ha", tanaman: "Jagung" },
    { id: 3, nama: "Lahan 3", luas: "3 ha", tanaman: "Kedelai" },
    { id: 4, nama: "Lahan 4", luas: "2.2 ha", tanaman: "Cabai" },
    { id: 5, nama: "Lahan 5", luas: "1 ha", tanaman: "Tomat" },
    { id: 6, nama: "Lahan 6", luas: "2.8 ha", tanaman: "Tebu" },
    { id: 7, nama: "Lahan 7", luas: "4 ha", tanaman: "Padi" },
    { id: 8, nama: "Lahan 8", luas: "3.3 ha", tanaman: "Kentang" },
    { id: 9, nama: "Lahan 9", luas: "2.6 ha", tanaman: "Kacang Tanah" },
    { id: 10, nama: "Lahan 10", luas: "1.8 ha", tanaman: "Jagung" },
    { id: 11, nama: "Lahan 11", luas: "2.4 ha", tanaman: "Padi" },
    { id: 12, nama: "Lahan 12", luas: "3.1 ha", tanaman: "Singkong" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Lahan</h1>
        <button className="flex items-center gap-2 bg-white shadow p-2 rounded-full border">
          <Filter size={18} />
          <span className="text-sm text-gray-700">Filter</span>
        </button>
      </div>

      {/* Filter Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {["Semua", "Padi", "Jagung", "Cabai", "Kedelai", "Tomat"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full border text-sm whitespace-nowrap ${
              filter === f
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Tombol Tambah Lahan */}
      <button className="w-full py-2 mb-4 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition">
        + Tambah Lahan
      </button>

      {/* Scrollable Card Container */}
      <div className="grid grid-cols-2 gap-4 overflow-y-auto space-y-3 pb-6">
        {dataLahan
          .filter((lahan) =>
            filter === "Semua" ? true : lahan.tanaman === filter
          )
          .map((lahan) => (
            <div
              key={lahan.id}
              className="bg-white rounded-md shadow p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {lahan.nama}
                </h2>
                <ChevronRight className="text-gray-400" size={20} />
              </div>
              <p className="text-sm text-gray-600">Luas: {lahan.luas}</p>
              <p className="text-sm text-gray-600">Tanaman: {lahan.tanaman}</p>

              <button className="mt-3 w-full py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition">
                Detail
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
