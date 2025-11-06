"use client";

import { useState } from "react";
import { Filter, ChevronRight, X, Wifi, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface Lahan {
  id: number;
  nama: string;
  luas: string;
  tanaman: string;
}

export default function LahanPage() {
  const [filter, setFilter] = useState<string>("Semua");
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);

  const [namaLahan, setNamaLahan] = useState("");
  const [tanaman, setTanaman] = useState("");
  const [ukuran, setUkuran] = useState("");

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

  const checkboxItems = Array.from({ length: 10 }, (_, i) => `Sensor ${i + 1}`);

  const closeModal = () => {
    setShowModal(false);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#F4FAF4] w-full px-6 pb-24 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#1F4E20]">Lahan</h1>
      </div>

      {/* Filter Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 px-2.5 no-scrollbar">
        {["Semua", "Padi", "Jagung", "Cabai", "Kedelai", "Tomat"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-1.5 rounded-[10px] text-sm font-semibold whitespace-nowrap transition-colors ${
              filter === f
                ? "bg-white text-[#1F4E20] border border-[#1F4E20]"
                : "bg-[#1F4E20] text-white border border-transparent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Tombol Tambah Lahan */}
      <button
        onClick={() => setShowModal(true)}
        className="w-full py-2 mb-4 bg-[#1F4E20] text-white rounded-md font-medium hover:bg-[#163b17] transition"
      >
        + Tambah Lahan
      </button>

      {/* === Grid Card Container === */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-2.5 pb-6">
          {dataLahan
            .filter((lahan) =>
              filter === "Semua" ? true : lahan.tanaman === filter
            )
            .map((lahan) => (
              <div
                key={lahan.id}
                className="bg-white rounded-[10px] shadow pt-4 flex flex-col justify-between h-[112px] border border-[#1F4E20]/50"
              >
                <div className="flex justify-between items-center mb-2 px-4">
                  <h2 className="text-sm font-semibold text-black">
                    {lahan.nama}
                  </h2>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>

                <div className="px-4 flex-1">
                  <p className="text-xs text-black">Luas: {lahan.luas}</p>
                  <p className="text-xs text-black">
                    Tanaman: {lahan.tanaman}
                  </p>
                </div>

                {/* Detail Button */}
                <Link
                  href={`/lahan/id`}
                  className="flex w-full h-[29px] items-center justify-between px-3 relative bg-[#7FD083] rounded-b-[10px]"
                >
                  <span className="font-medium text-sm text-white">Detail</span>
                  <svg
                    className="w-[18px] h-[18px]"
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
              </div>
            ))}
        </div>
      </div>

      {/* === MODAL: Tambah Lahan (Animasi dari Bawah) === */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-end z-50"
          >
            <div className="bg-white w-full rounded-t-2xl p-5 space-y-4 max-h-[90vh] overflow-y-auto">
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#1F4E20]">
                  {step === 1 && "Tambah Lahan"}
                  {step === 2 && "Sambungkan Perangkat Sensor"}
                  {step === 3 && "Konfirmasi Lahan"}
                  {step === 4 && "Pilih Sensor"}
                  {step === 5 && "Lahan Berhasil Dibuat"}
                </h2>
                <button onClick={closeModal}>
                  <X className="text-gray-600" />
                </button>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Nama Lahan
                    </label>
                    <input
                      placeholder="Masukkan nama lahan"
                      value={namaLahan}
                      onChange={(e) => setNamaLahan(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Jenis Tanaman
                    </label>
                    <input
                      placeholder="Masukkan nama tanaman"
                      value={tanaman}
                      onChange={(e) => setTanaman(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Luas Lahan
                    </label>
                    <input
                      placeholder="Masukkan ukuran lahan"
                      value={ukuran}
                      onChange={(e) => setUkuran(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                  </div>

                  <div className="flex justify-between gap-3 mt-4">
                    <button
                      onClick={closeModal}
                      className="flex-1 border rounded-lg py-2 text-gray-700"
                    >
                      Batal
                    </button>
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 bg-[#1F4E20] text-white rounded-lg py-2"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6 text-center">
                  <p className="text-gray-700">Pindai kode untuk menyambungkan</p>
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <QrCode size={64} className="text-gray-400" />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    className="w-full py-2 bg-[#1F4E20] text-white rounded-lg"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6 text-center">
                  <Wifi size={40} className="text-[#1F4E20] mx-auto" />
                  <p className="text-gray-700">
                    Lahan <b>{namaLahan || "Baru"}</b> siap disambungkan
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 border rounded-lg py-2 text-gray-700"
                    >
                      Kembali
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 bg-[#1F4E20] text-white rounded-lg py-2"
                    >
                      Sambungkan Sensor
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-3">
                  <div className="max-h-60 overflow-y-auto border p-2 rounded-md">
                    {checkboxItems.map((item, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 border-b py-2 text-sm"
                      >
                        <input type="checkbox" className="accent-[#1F4E20]" />
                        {item}
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 border rounded-lg py-2 text-gray-700"
                    >
                      Kembali
                    </button>
                    <button
                      onClick={() => setStep(5)}
                      className="flex-1 bg-[#1F4E20] text-white rounded-lg py-2"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <div className="text-center space-y-5">
                  <p className="text-gray-700">
                    🎉 Lahan <b>{namaLahan || "Baru"}</b> berhasil dibuat!
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => closeModal()}
                      className="flex-1 border rounded-lg py-2 text-gray-700"
                    >
                      Selesai
                    </button>
                    <button className="flex-1 bg-[#1F4E20] text-white rounded-lg py-2">
                      Detail
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
