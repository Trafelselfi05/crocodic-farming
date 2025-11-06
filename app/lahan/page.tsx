"use client";

import { useState } from "react";
import { Filter, ChevronRight, X, Wifi, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

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
    { id: 3, nama: "Lahan 3", luas: "3 ha", tanaman: "Kentang" },
    { id: 4, nama: "Lahan 4", luas: "2.2 ha", tanaman: "Cabai" },
    { id: 5, nama: "Lahan 5", luas: "1 ha", tanaman: "Tomat" },
    { id: 6, nama: "Lahan 6", luas: "2.8 ha", tanaman: "Padi" },
    { id: 7, nama: "Lahan 7", luas: "4 ha", tanaman: "Padi" },
    { id: 8, nama: "Lahan 8", luas: "3.3 ha", tanaman: "Kentang" },
    { id: 9, nama: "Lahan 9", luas: "2.6 ha", tanaman: "Jagung" },
    { id: 10, nama: "Lahan 10", luas: "1.8 ha", tanaman: "Jagung" },
    { id: 11, nama: "Lahan 11", luas: "2.4 ha", tanaman: "Padi" },
    { id: 12, nama: "Lahan 12", luas: "3.1 ha", tanaman: "Tomat" },
  ];

  const getPlantIcon = (tanaman: string) => {
    const iconMap: { [key: string]: string } = {
      "Padi": "/asset/lahan/padi.svg",
      "Jagung": "/asset/lahan/jagung.svg",
      "Cabai": "/asset/lahan/cabai.svg",
      "Tomat": "/asset/lahan/tomat.svg",
      "Kentang": "/asset/lahan/kentang.svg",
    };

    return iconMap[tanaman] || "/asset/lahan/default.svg";
  };

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
        {["Semua", "Padi", "Jagung", "Cabai", "Tomat", "Kentang"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-1.5 rounded-[10px] text-sm font-semibold whitespace-nowrap transition-colors ${filter === f
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
                className="bg-white rounded-[10px] flex flex-col justify-end h-28 border-[0.5px] border-solid border-[#1F4E20] overflow-hidden"
              >
                {/* Header Card - Nama dan Icon */}
                <div className="flex items-center justify-between h-[33px] px-3">
                  <div className="text-sm font-semibold text-black">
                    {lahan.nama}
                  </div>
                  <div className="w-6 h-6 p-1 bg-[#1F4E20] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image
                      src={getPlantIcon(lahan.tanaman)}
                      alt={lahan.tanaman}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                </div>

                {/* Info Section - Luas dan Tanaman */}
                <div className="flex flex-col items-center px-3 mb-[9px]">
                  <div className="flex flex-col w-full items-start gap-0.5">
                    <p className="text-xs text-black">
                      Luas: {lahan.luas.replace('ha', 'Ha')}
                    </p>
                    <p className="text-xs text-black">
                      Tanaman: {lahan.tanaman}
                    </p>
                  </div>
                </div>

                {/* Detail Button */}
                <Link
                  href={`/lahan/id`}
                  className="flex w-full h-[29px] items-center justify-between px-3 bg-[#7FD083] rounded-b-[10px]"
                >
                  <span className="font-medium text-sm text-white">
                    Detail
                  </span>
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

      {/* === MODAL: Tambah Lahan === */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-black/50 flex justify-center z-50 px-4 ${step === 5 ? 'items-center' : 'items-end'}`}
            onClick={step === 5 ? closeModal : undefined}
          >
            <motion.div
              initial={step === 5 ? { scale: 0.9, opacity: 0 } : { y: "100%", opacity: 0 }}
              animate={step === 5 ? { scale: 1, opacity: 1 } : { y: 0, opacity: 1 }}
              exit={step === 5 ? { scale: 0.9, opacity: 0 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-white w-full mx-auto flex flex-col items-center relative ${
                step === 5 
                  ? 'max-w-[280px] rounded-[20px] px-5 py-6' 
                  : 'max-w-[402px] rounded-t-[24px] px-4 pt-10 pb-6'
              }`}
            >
              {/* Close Button */}
              {step !== 5 && (
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center cursor-pointer bg-transparent border-none"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              )}

              {/* Content Container */}
              <div className={`flex flex-col w-full ${step === 5 ? 'gap-5' : 'gap-[55px]'}`}>
                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    {/* Header Section */}
                    <div className="flex flex-col gap-[30px] w-full">
                      <h2 className="text-2xl font-semibold text-black">
                        Tambah Lahan
                      </h2>

                      {/* Form Inputs */}
                      <div className="flex flex-col gap-5">
                        {/* Nama Lahan */}
                        <div className="relative w-full h-[55px] bg-white rounded-xl border-2 border-gray-300">
                          <input
                            type="text"
                            placeholder="Nama Lahan"
                            value={namaLahan}
                            onChange={(e) => setNamaLahan(e.target.value)}
                            className="absolute inset-0 w-full h-full px-4 text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                          />
                        </div>

                        {/* Jenis Tanaman */}
                        <div className="relative w-full h-[55px] bg-white rounded-xl border-2 border-gray-300">
                          <input
                            type="text"
                            placeholder="Jenis Tanaman"
                            value={tanaman}
                            onChange={(e) => setTanaman(e.target.value)}
                            className="absolute inset-0 w-full h-full px-4 text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                          />
                        </div>

                        {/* Luas Lahan */}
                        <div className="relative w-full h-[55px] bg-white rounded-xl border-2 border-gray-300">
                          <input
                            type="text"
                            placeholder="Luas Lahan"
                            value={ukuran}
                            onChange={(e) => setUkuran(e.target.value)}
                            className="absolute inset-0 w-full h-full px-4 text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 w-full">
                      <button
                        onClick={() => setStep(2)}
                        className="w-full h-[55px] bg-[#1F4E20] text-white rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Selanjutnya
                      </button>
                      <button
                        onClick={closeModal}
                        className="w-full h-[55px] bg-gray-200 bg-opacity-25 text-black rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Batal
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <div className="flex flex-col gap-1 w-full items-center">
                      <h2 className="text-2xl font-semibold text-black text-center w-full">
                        Sambungkan Perangkat Sensor
                      </h2>
                      <p className="text-sm text-black text-center opacity-60">
                        Pindai kode
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-6 w-full">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <QrCode size={64} className="text-gray-400" />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 w-full">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                        <QrCode className="w-5 h-5 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-black">
                          Pindai Kode
                        </h3>
                        <p className="text-xs text-black opacity-60 mt-1">
                          Arahkan kamera Anda ke kode QR pada perangkat untuk memindai.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <button
                        onClick={() => setStep(3)}
                        className="w-full h-[55px] bg-[#1F4E20] text-white rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Selanjutnya
                      </button>
                      <button
                        onClick={() => setStep(1)}
                        className="w-full h-[55px] bg-gray-200 bg-opacity-25 text-black rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Kembali
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <div className="flex flex-col gap-[30px] w-full items-center">
                      <h2 className="text-2xl font-semibold text-black w-full">
                        Konfirmasi Lahan
                      </h2>

                      <div className="flex flex-col items-center gap-6">
                        <Image
                          src="/asset/lahan/perangkat.svg"
                          alt="Wifi Icon"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <button
                        onClick={() => setStep(4)}
                        className="w-full h-[55px] bg-[#1F4E20] text-white rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Sambungkan Sensor
                      </button>
                      <button
                        onClick={() => setStep(2)}
                        className="w-full h-[55px] bg-gray-200 bg-opacity-25 text-black rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Kembali
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <>
                    <div className="flex flex-col gap-[17px] w-full">
                      <div className="flex items-center justify-center w-full">
                        <h2 className="text-base font-semibold text-black">
                          Pilih sensor yang digunakan
                        </h2>
                      </div>

                      <div className="relative w-full h-[400px] overflow-y-auto no-scrollbar">
                        <div className="flex flex-col gap-[5px]">
                          {[
                            "Penyiraman otomatis",
                            "Pemupukan otomatis",
                            "Monitoring NPK",
                            "Monitoring Suhu Tanah",
                            "Monitoring Kelembapan Tanah",
                            "Monitoring pH Tanah",
                            "Monitoring Suhu Lingkungan",
                            "Monitoring Kelembapan Lingkungan",
                            "Monitoring Cuaca"
                          ].map((item, i) => (
                            <label
                              key={i}
                              className="flex items-center justify-center gap-[10px] w-full h-[40px] px-[11px] py-[15px] bg-white rounded-[5px] border border-[#AAAAAA] cursor-pointer hover:bg-[#7FD083]/10 hover:border-[#7FD083] transition-all"
                            >
                              <div className="flex items-center justify-center gap-[31px] w-full">
                                <input 
                                  type="checkbox" 
                                  className="w-[25px] h-[25px] accent-[#1F4E20] cursor-pointer flex-shrink-0" 
                                  defaultChecked
                                />
                                <div className="flex-1 flex items-start">
                                  <span className="text-[10px] text-black font-normal leading-normal w-full">
                                    {item}
                                  </span>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <button
                        onClick={() => setStep(5)}
                        className="w-full h-[55px] bg-[#1F4E20] text-white rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Selanjutnya
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="w-full h-[55px] bg-[#AAAAAA]/25 text-black rounded-xl text-base font-semibold hover:bg-[#AAAAAA]/35 transition-all"
                      >
                        Kembali
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                  <>
                    <div className="flex flex-col gap-5 w-full items-center py-2">
                      {/* Success Icon */}
                      <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.987 13.4257C29.372 12.7765 28.345 12.7479 27.695 13.3652L17.343 23.1831L12.405 18.1133C11.779 17.4717 10.754 17.4576 10.112 18.0831C9.47 18.7079 9.457 19.7344 10.081 20.376L16.136 26.5917C16.453 26.9177 16.874 27.082 17.297 27.082C17.698 27.082 18.099 26.9338 18.413 26.6371L29.927 15.7182C30.577 15.102 30.604 14.0755 29.987 13.4257Z" fill="#1F4E20"/>
                        <path d="M20 0C8.972 0 0 8.9719 0 20C0 31.0281 8.972 40 20 40C31.028 40 40 31.0281 40 20C40 8.9719 31.028 0 20 0ZM20 36.7568C10.761 36.7568 3.243 29.2401 3.243 20C3.243 10.7605 10.76 3.2432 20 3.2432C29.24 3.2432 36.757 10.7605 36.757 20C36.757 29.24 29.24 36.7568 20 36.7568Z" fill="#1F4E20"/>
                      </svg>

                      <p className="text-sm text-black text-center px-2">
                        "Lahan {namaLahan || "13"}" berhasil ditambahkan
                      </p>
                    </div>

                    <div className="flex flex-col gap-2.5 w-full">
                      <button
                        className="w-full h-[45px] bg-[#1F4E20] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        Detail
                      </button>
                      <button
                        onClick={closeModal}
                        className="w-full h-[45px] bg-[#AAAAAA]/25 text-black rounded-xl text-sm font-semibold hover:bg-[#AAAAAA]/35 transition-all"
                      >
                        Selesai
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}