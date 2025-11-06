"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Plus,
  Settings2 as Filter,
  ChevronLeft,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LahanDetailPage() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showWeekdayModal, setShowWeekdayModal] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);

  const [selectedDayType, setSelectedDayType] = useState<
    "weekday" | "weekend" | "custom"
  >("weekday");
  const [customDate, setCustomDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  return (
    <div className=" bg-gray-50 px-6 w-full flex flex-col">
      <div className="sticky top-0 bg-soft z-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ArrowLeft className="text-gray-700 w-5 h-5" />
            <h1 className="text-xl font-semibold text-gray-800">Lahan #01</h1>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-700 text-sm">Luas: 2 ha</p>
            <p className="text-gray-700 text-sm">Tanaman: Padi</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary p-3 rounded-full" onClick={() => setShowEditModal(true)}> 
              <Pencil className="text-white" />
            </button>
            <button className="bg-primary p-3 rounded-full">
              <Trash2 className="text-white" />
            </button>
          </div>
        </div>

        {/* Tombol Tambah Sensor */}
        <button className="flex items-center justify-center gap-2 w-full py-2 bg-green-600 text-white rounded-lg mb-4">
          <Plus className="w-5 h-5" /> Tambah Sensor
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="space-y-4 overflow-y-auto ">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            {/* Penyiraman Otomatis */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v2m6.364.636l-1.414 1.414M20 12h-2M4 12H2m3.636 7.364l1.414-1.414M12 20v2m4.95-4.95a7 7 0 10-9.9 0"
                  />
                </svg>
                <span className="font-medium text-gray-800">
                  Penyiraman Otomatis
                </span>
              </div>

              {/* Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 transition-all"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></span>
              </label>
            </div>

            {/* Jadwal */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700 font-bold">Jadwal</span>
              <button
                onClick={() => setShowFilterModal(true)}
                className="p-1.5 rounded-full hover:bg-gray-100 border border-secondary"
              >
                <Filter className="w-4 h-4 text-primary" />
              </button>
            </div>

            {/* Waktu */}
            <div className="flex justify-between items-center gap-2 mt-4">
              <div className="flex flex-col items-center flex-1 border rounded-lg p-2">
                <span className="text-xs text-gray-500">Dari</span>
                <span className="text-sm font-medium text-gray-800">
                  07:30 AM
                </span>
              </div>
              <div className="h-[1px] bg-gray-300 w-5"></div>
              <div className="flex flex-col items-center flex-1 border rounded-lg p-2">
                <span className="text-xs text-gray-500">Sampai</span>
                <span className="text-sm font-medium text-gray-800">
                  05:45 PM
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === MODAL: Buat Jadwal Baru === */}
      <AnimatePresence>
        {showFilterModal && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-end z-50"
          >
            <div className="bg-white w-full rounded-t-2xl p-5 space-y-4">
              {/* Header Modal */}
              <div className="flex items-center gap-2 mb-3">
                <ChevronLeft
                  onClick={() => setShowFilterModal(false)}
                  className="w-5 h-5 text-gray-700 cursor-pointer"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  Buat Jadwal Baru
                </h2>
              </div>

              {/* Atur Waktu */}
              <p className="font-medium text-gray-700">Atur Waktu</p>
              <div className="flex justify-between items-center gap-2">
                <input
                  type="time"
                  className="flex-1 border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
                <div className="h-[1px] bg-gray-300 w-5"></div>
                <input
                  type="time"
                  className="flex-1 border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>

              {/* Atur Tanggal */}
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Atur Tanggal</span>
                <button
                  onClick={() => setShowWeekdayModal(true)}
                  className="px-3 py-1 border rounded-lg text-gray-700 text-sm hover:bg-gray-100 transition"
                >
                  {selectedDayType === "custom"
                    ? `${customDate.day}/${customDate.month}/${customDate.year}`
                    : selectedDayType}
                </button>
              </div>

              {/* Tombol Aksi */}
              <div className="flex justify-between gap-3 pt-4">
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
                >
                  Batal
                </button>
                <button className="flex-1 py-2 bg-[#1F4E20] text-white rounded-lg font-medium hover:bg-[#183d19] transition">
                  Simpan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Weekday / Weekend / Custom === */}
      <AnimatePresence>
        {showWeekdayModal && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-end z-50"
          >
            <div className="bg-white w-full rounded-t-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <ChevronLeft
                  onClick={() => setShowWeekdayModal(false)}
                  className="w-5 h-5 text-gray-700 cursor-pointer"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  Atur Tanggal
                </h2>
              </div>

              {["weekday", "weekend", "custom"].map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    if (opt === "custom") {
                      setShowCustomModal(true);
                    }
                    setSelectedDayType(opt as any);
                  }}
                  className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer ${
                    selectedDayType === opt
                      ? "bg-green-100 border-green-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <span className="capitalize text-gray-800">{opt}</span>
                  {selectedDayType === opt && (
                    <Check className="text-green-600" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Custom Date === */}
      <AnimatePresence>
        {showCustomModal && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="sticky inset-0 bg-black/50 flex justify-center items-end z-50"
          >
            <div className="bg-white w-full rounded-t-2xl p-5 space-y-5">
              <div className="flex items-center gap-2 mb-3">
                <ChevronLeft
                  onClick={() => setShowCustomModal(false)}
                  className="w-5 h-5 text-gray-700 cursor-pointer"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  Atur Tanggal
                </h2>
              </div>

              <div className="flex justify-center items-center gap-2 border rounded-lg p-3">
                <input
                  type="number"
                  placeholder="DD"
                  value={customDate.day}
                  onChange={(e) =>
                    setCustomDate({ ...customDate, day: e.target.value })
                  }
                  className="w-12 text-center border-none outline-none"
                />
                <span>/</span>
                <input
                  type="number"
                  placeholder="MM"
                  value={customDate.month}
                  onChange={(e) =>
                    setCustomDate({ ...customDate, month: e.target.value })
                  }
                  className="w-12 text-center border-none outline-none"
                />
                <span>/</span>
                <input
                  type="number"
                  placeholder="YYYY"
                  value={customDate.year}
                  onChange={(e) =>
                    setCustomDate({ ...customDate, year: e.target.value })
                  }
                  className="w-16 text-center border-none outline-none"
                />
              </div>

              <div className="flex justify-between gap-3">
                <button
                  onClick={() => setShowCustomModal(false)}
                  className="flex-1 border rounded-lg py-2 text-gray-700"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setShowCustomModal(false);
                    setShowWeekdayModal(false);
                  }}
                  className="flex-1 bg-green-600 text-white rounded-lg py-2"
                >
                  Simpan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Edit Lahan === */}
      <AnimatePresence>
        {showEditModal && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-end z-50"
          >
            <div className="bg-white w-full rounded-t-2xl p-5 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Edit Lahan
              </h2>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Nama Lahan
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                    placeholder="Masukkan nama lahan"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Jenis Tanaman
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                    placeholder="Masukkan jenis tanaman"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Luas Lahan
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                    placeholder="Masukkan luas lahan"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-3 mt-4">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 border rounded-lg py-2 text-gray-700"
                >
                  Batal
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 bg-green-600 text-white rounded-lg py-2"
                >
                  Simpan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
