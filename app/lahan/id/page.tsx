"use client";

import { useState } from "react";
import { ArrowLeft, Pencil, Trash2, Plus, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LahanDetailPage() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showWeekdayModal, setShowWeekdayModal] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedDayType, setSelectedDayType] = useState<"weekday" | "weekend" | "custom">("weekday");
  const [customDate, setCustomDate] = useState({ day: "", month: "", year: "" });
  const [timeFrom, setTimeFrom] = useState("08:30");
  const [timeTo, setTimeTo] = useState("05:30");
  const [periodFrom, setPeriodFrom] = useState<"AM" | "PM">("AM");
  const [periodTo, setPeriodTo] = useState<"PM" | "AM">("PM");
  
  // State untuk toggle aktif
  const [penyiramanAktif, setPenyiramanAktif] = useState(true);
  const [pemupukanAktif, setPemupukanAktif] = useState(true);

  // State untuk form edit lahan
  const [formData, setFormData] = useState({
    namaLahan: "Lahan 01",
    jenisTanaman: "Padi",
    luasLahan: "2 ha"
  });

  const handleBack = () => {
    window.history.back();
  };

  const getDayTypeDisplay = () => {
    if (selectedDayType === "custom") {
      if (customDate.day && customDate.month && customDate.year) {
        return `${customDate.day}/${customDate.month}/${customDate.year}`;
      }
      return "DD/MM/YYYY";
    }
    return selectedDayType.charAt(0).toUpperCase() + selectedDayType.slice(1);
  };

  const handleDeleteLahan = () => {
    // Logika untuk menghapus lahan
    console.log("Lahan dihapus");
    setShowDeleteModal(false);
    // Tambahkan redirect atau update state sesuai kebutuhan
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika untuk menyimpan data lahan
    console.log("Data lahan disimpan:", formData);
    setShowEditModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Komponen Toggle SVG
  const ToggleSwitch = ({ isActive, onToggle }: { isActive: boolean; onToggle: () => void }) => {
    return (
      <button 
        onClick={onToggle}
        className="cursor-pointer transition-opacity hover:opacity-80"
      >
        {isActive ? (
          // Toggle Aktif
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="34" 
            height="21" 
            viewBox="0 0 34 21" 
            fill="none"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M33.9938 10.2083C33.9938 7.50091 32.9182 4.90439 31.0038 2.98995C29.0894 1.07552 26.4928 0 23.7854 0H10.2083C7.50091 4.03437e-08 4.90439 1.07552 2.98995 2.98995C1.07552 4.90439 0 7.50091 0 10.2083C0 12.9158 1.07552 15.5123 2.98995 17.4267C4.90439 19.3411 7.50091 20.4167 10.2083 20.4167H23.7854C26.4928 20.4167 29.0894 19.3411 31.0038 17.4267C32.9182 15.5123 33.9938 12.9158 33.9938 10.2083ZM23.886 3.78875C24.729 3.78875 25.5637 3.95478 26.3424 4.27736C27.1212 4.59993 27.8288 5.07274 28.4249 5.66879C29.0209 6.26483 29.4937 6.97244 29.8163 7.75121C30.1389 8.52999 30.3049 9.36467 30.3049 10.2076C30.3049 11.0505 30.1389 11.8852 29.8163 12.664C29.4937 13.4428 29.0209 14.1504 28.4249 14.7464C27.8288 15.3425 27.1212 15.8153 26.3424 16.1379C25.5637 16.4604 24.729 16.6265 23.886 16.6265C22.1837 16.6265 20.551 15.9502 19.3472 14.7464C18.1435 13.5427 17.4672 11.91 17.4672 10.2076C17.4672 8.50522 18.1435 6.87256 19.3472 5.66879C20.551 4.46502 22.1837 3.78875 23.886 3.78875Z" 
              fill="#1F4E20"
            />
          </svg>
        ) : (
          // Toggle Non-Aktif
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="34" 
            height="20" 
            viewBox="0 0 34 20" 
            fill="none"
          >
            <path 
              d="M33.1235 9.86458C33.1235 7.44725 32.1633 5.12892 30.4539 3.4196C28.7446 1.71028 26.4263 0.75 24.009 0.75H9.86458C7.44725 0.75 5.12892 1.71028 3.4196 3.4196C1.71028 5.12892 0.75 7.44725 0.75 9.86458C0.75 12.2819 1.71028 14.6003 3.4196 16.3096C5.12892 18.0189 7.44725 18.9792 9.86458 18.9792H24.0075C26.4248 18.9792 28.7432 18.0189 30.4525 16.3096C32.1618 14.6003 33.1221 12.2819 33.1221 9.86458H33.1235Z" 
              stroke="#AAAAAA" 
              strokeWidth="1.5" 
              strokeLinejoin="round"
            />
            <path 
              d="M16.7569 9.86476C16.7569 8.37162 16.1637 6.93963 15.1079 5.88382C14.0521 4.82801 12.6201 4.23486 11.127 4.23486C9.63383 4.23486 8.20184 4.82801 7.14603 5.88382C6.09022 6.93963 5.49707 8.37162 5.49707 9.86476C5.49707 11.3577 6.09014 12.7895 7.14581 13.8452C8.20149 14.9009 9.63329 15.4939 11.1262 15.4939C12.6192 15.4939 14.051 14.9009 15.1067 13.8452C16.1623 12.7895 16.7569 11.3577 16.7569 9.86476Z" 
              stroke="#AAAAAA" 
              strokeWidth="1.5" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    );
  };

  return (
    <div className="bg-gray-50 w-full flex flex-col h-screen">
      <div className="sticky top-0 bg-gray-50 z-20 px-6 pt-2 pb-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button onClick={handleBack} className="cursor-pointer">
              <ArrowLeft className="text-gray-700 w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Lahan 01</h1>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-gray-700 text-sm">Luas: 2 ha</p>
            <p className="text-gray-700 text-sm">Tanaman: Padi</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#1F4E20] p-3 rounded-full" onClick={() => setShowEditModal(true)}>
              <Pencil className="text-white w-5 h-5" />
            </button>
            <button 
              className="bg-[#1F4E20] p-3 rounded-full"
              onClick={() => setShowDeleteModal(true)}
            >
              <Trash2 className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tombol Tambah Sensor */}
        <button className="flex items-center justify-center gap-2 w-full py-2 bg-[#1F4E20] text-white rounded-lg mb-0">
          <Plus className="w-5 h-5" /> Tambah Sensor
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="space-y-4 overflow-y-auto flex-1 px-6 pb-6">
        {/* Card 1: Penyiraman Otomatis */}
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-3 border border-[#1F4E20]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Icon Penyiraman Otomatis */}
              <div 
                className="w-6 h-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/asset/lahan/penyiraman-otomatis.svg')" }}
              />
              <span className="font-semibold text-black text-base">Penyiraman Otomatis</span>
            </div>

            {/* Toggle Aktif */}
            <ToggleSwitch 
              isActive={penyiramanAktif} 
              onToggle={() => setPenyiramanAktif(!penyiramanAktif)} 
            />
          </div>

          {/* Jadwal Section */}
          <div className="bg-white rounded-2xl">
            <div className="flex flex-col gap-3">
              {/* Header Jadwal */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col w-20 h-10 justify-around">
                  <div className="flex flex-col w-20 items-center justify-center">
                    <span className="font-semibold text-black text-sm">Jadwal</span>
                  </div>
                </div>
                <div className="flex flex-col w-12 items-center justify-center gap-2 py-1 px-0.5">
                  <button 
                    onClick={() => setShowFilterModal(true)}
                    className="relative w-8 h-8 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 bg-[#AAAAAA] bg-opacity-25 rounded-full"></span>
                    <span className="relative z-10">
                      <img 
                        src="/asset/lahan/filter-icon.svg" 
                        alt="Filter" 
                        className="w-4 h-4"
                      />
                    </span>
                  </button>
                </div>
              </div>

              {/* Waktu */}
              <div className="relative w-full h-20">
                {/* Dari */}
                <div className="flex flex-col w-28 h-20 items-start justify-center gap-2 px-3 absolute top-0 left-0 bg-white rounded-2xl border border-[#AAAAAA]">
                  <div className="flex flex-col w-full items-start justify-center">
                    <span className="text-[#AAAAAA] text-xs font-normal">Dari</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <time className="text-black text-sm font-medium">07 : 30</time>
                    <span className="text-black text-sm font-medium">AM</span>
                  </div>
                </div>

                {/* Sampai */}
                <div className="flex flex-col w-28 h-20 items-start justify-center gap-2 px-3 absolute top-0 right-0 bg-white rounded-2xl border border-[#AAAAAA]">
                  <div className="flex flex-col w-full items-start justify-center">
                    <span className="text-[#AAAAAA] text-xs font-normal">Sampai</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <time className="text-black text-sm font-medium">05 : 45</time>
                    <span className="text-black text-sm font-medium">PM</span>
                  </div>
                </div>

                {/* Garis Pemisah */}
                <div className="absolute w-12 h-px top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Pemupukan Otomatis */}
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-3 border border-[#1F4E20]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Icon Pemupukan Otomatis */}
              <div 
                className="w-6 h-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/asset/lahan/pemupukan-otomatis.svg')" }}
              />
              <span className="font-semibold text-black text-base">Pemupukan Otomatis</span>
            </div>

            {/* Toggle Aktif */}
            <ToggleSwitch 
              isActive={pemupukanAktif} 
              onToggle={() => setPemupukanAktif(!pemupukanAktif)} 
            />
          </div>

          {/* Jadwal Section */}
          <div className="bg-white rounded-2xl">
            <div className="flex flex-col gap-3">
              {/* Header Jadwal */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col w-20 h-10 justify-around">
                  <div className="flex flex-col w-20 items-center justify-center">
                    <span className="font-semibold text-black text-sm">Jadwal</span>
                  </div>
                </div>
                <div className="flex flex-col w-12 items-center justify-center gap-2 py-1 px-0.5">
                  <button 
                    onClick={() => setShowFilterModal(true)}
                    className="relative w-8 h-8 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 bg-[#AAAAAA] bg-opacity-25 rounded-full"></span>
                    <span className="relative z-10">
                      <img 
                        src="/asset/lahan/filter-icon.svg" 
                        alt="Filter" 
                        className="w-4 h-4"
                      />
                    </span>
                  </button>
                </div>
              </div>

              {/* Waktu */}
              <div className="relative w-full h-20">
                {/* Dari */}
                <div className="flex flex-col w-28 h-20 items-start justify-center gap-2 px-3 absolute top-0 left-0 bg-white rounded-2xl border border-[#AAAAAA]">
                  <div className="flex flex-col w-full items-start justify-center">
                    <span className="text-[#AAAAAA] text-xs font-normal">Dari</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <time className="text-black text-sm font-medium">08 : 00</time>
                    <span className="text-black text-sm font-medium">AM</span>
                  </div>
                </div>

                {/* Sampai */}
                <div className="flex flex-col w-28 h-20 items-start justify-center gap-2 px-3 absolute top-0 right-0 bg-white rounded-2xl border border-[#AAAAAA]">
                  <div className="flex flex-col w-full items-start justify-center">
                    <span className="text-[#AAAAAA] text-xs font-normal">Sampai</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <time className="text-black text-sm font-medium">04 : 30</time>
                    <span className="text-black text-sm font-medium">PM</span>
                  </div>
                </div>

                {/* Garis Pemisah */}
                <div className="absolute w-12 h-px top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === MODAL: Konfirmasi Hapus Lahan === */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-[60] px-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-xs shadow-xl overflow-hidden border border-[#1F4E20]"
            >
              <div className="flex flex-col items-center gap-2.5 py-5 px-1">
                {/* Icon Trash */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg 
                    width="24" 
                    height="30" 
                    viewBox="0 0 24 30" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M2.99999 26.5C2.99999 28.15 4.34999 29.5 5.99999 29.5H18C19.65 29.5 21 28.15 21 26.5V8.5H2.99999V26.5ZM24 4.5H18L16.5 3H7.49999L5.99999 4.5H0V7H24V4.5Z" 
                      fill="#1F4E20"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="text-center">
                  <p className="text-black text-sm font-normal leading-normal">
                    Apakah kamu yakin ingin <br />menghapus Lahan 01?
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col w-32 gap-3">
                  <button
                    onClick={handleDeleteLahan}
                    className="h-9 flex items-center justify-center gap-2.5 py-1.5 px-6 bg-[#1F4E20] rounded-2xl hover:opacity-90 transition-opacity"
                  >
                    <span className="text-white text-sm font-medium">Hapus</span>
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="h-9 flex items-center justify-center gap-2.5 py-1.5 px-6 bg-[#EEEEEE] rounded-2xl hover:opacity-90 transition-opacity"
                  >
                    <span className="text-[#1F4E20] text-sm font-medium">Batal</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Edit Lahan (Desain Baru) === */}
      <AnimatePresence>
        {showEditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
            onClick={() => setShowEditModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden border-2 border-[#7FD083] min-h-[427px] flex items-center justify-center p-2.5"
            >
              <form 
                onSubmit={handleFormSubmit}
                className="flex flex-col w-full max-w-[354px] items-end gap-12"
              >
                {/* Form Fields */}
                <div className="flex flex-col items-start gap-5 w-full">
                  {/* Nama Lahan */}
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <label className="inline-flex items-center justify-center gap-2.5">
                      <span className="text-black text-sm font-normal">Nama Lahan</span>
                    </label>
                    <div className="relative w-full h-14 bg-white rounded-xl border-2 border-[#1F4E20]">
                      <input
                        type="text"
                        name="namaLahan"
                        value={formData.namaLahan}
                        onChange={handleInputChange}
                        className="w-full h-full px-4 bg-transparent border-none outline-none text-[#1F4E20] text-sm font-normal rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Jenis Tanaman */}
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <label className="inline-flex items-center justify-center gap-2.5">
                      <span className="text-black text-sm font-normal">Jenis Tanaman</span>
                    </label>
                    <div className="relative w-full h-14 bg-white rounded-xl border-2 border-[#1F4E20]">
                      <input
                        type="text"
                        name="jenisTanaman"
                        value={formData.jenisTanaman}
                        onChange={handleInputChange}
                        className="w-full h-full px-4 bg-transparent border-none outline-none text-[#1F4E20] text-sm font-normal rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Luas Lahan */}
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <label className="inline-flex items-center justify-center gap-2.5">
                      <span className="text-black text-sm font-normal">Luas Lahan</span>
                    </label>
                    <div className="relative w-full h-14 bg-white rounded-xl border-2 border-[#1F4E20]">
                      <input
                        type="text"
                        name="luasLahan"
                        value={formData.luasLahan}
                        onChange={handleInputChange}
                        className="w-full h-full px-4 bg-transparent border-none outline-none text-[#1F4E20] text-sm font-normal rounded-xl"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="inline-flex items-center gap-4.5">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="inline-flex h-8 items-center justify-center gap-2.5 px-2.5 py-1 bg-[#EEEEEE] rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-[#1F4E20] text-base font-semibold">Batal</span>
                  </button>
                  <button
                    type="submit"
                    className="inline-flex h-8 items-center justify-center gap-2.5 px-2.5 py-1 bg-[#1F4E20] rounded-lg hover:bg-green-900 transition-colors"
                  >
                    <span className="text-white text-base font-semibold">Simpan</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Buat Jadwal Baru === */}
      <AnimatePresence>
        {showFilterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
            onClick={() => setShowFilterModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-gray-100">
                <button onClick={() => setShowFilterModal(false)} className="cursor-pointer -ml-1">
                  <ArrowLeft className="w-5 h-5 text-black" />
                </button>
                <h2 className="text-xl font-bold text-black">Buat Jadwal Baru</h2>
              </div>

              {/* Content */}
              <div className="px-5 py-5 space-y-5">
                {/* Atur Waktu */}
                <div>
                  <label className="text-sm font-semibold text-gray-900 mb-3 block">Atur Waktu</label>
                  <div className="flex items-center gap-3">
                    {/* Dari */}
                    <div className="flex-1 space-y-1.5">
                      <p className="text-[11px] text-gray-500 font-medium">Dari</p>
                      <div className="flex items-center justify-between gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2.5 focus-within:border-green-700 focus-within:ring-1 focus-within:ring-green-700">
                        <input
                          type="text"
                          value={timeFrom}
                          onChange={(e) => setTimeFrom(e.target.value)}
                          className="text-sm font-semibold outline-none bg-transparent text-left w-16"
                          placeholder="08:30"
                        />
                        <button
                          onClick={() => setPeriodFrom(periodFrom === "AM" ? "PM" : "AM")}
                          className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900 transition"
                        >
                          <span>{periodFrom}</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-5 h-px bg-gray-400 mt-7"></div>

                    {/* Sampai */}
                    <div className="flex-1 space-y-1.5">
                      <p className="text-[11px] text-gray-500 font-medium">Sampai</p>
                      <div className="flex items-center justify-between gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2.5 focus-within:border-green-700 focus-within:ring-1 focus-within:ring-green-700">
                        <input
                          type="text"
                          value={timeTo}
                          onChange={(e) => setTimeTo(e.target.value)}
                          className="text-sm font-semibold outline-none bg-transparent text-left w-16"
                          placeholder="05:30"
                        />
                        <button
                          onClick={() => setPeriodTo(periodTo === "PM" ? "AM" : "PM")}
                          className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900 transition"
                        >
                          <span>{periodTo}</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Atur Tanggal */}
                <div className="flex justify-between items-center pt-1">
                  <label className="text-sm font-semibold text-gray-900">Atur Tanggal</label>
                  <button
                    onClick={() => setShowWeekdayModal(true)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition"
                  >
                    <span>{getDayTypeDisplay()}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 px-5 pb-5 pt-2">
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="flex-1 py-3 bg-gray-200 text-green-900 rounded-xl text-base font-semibold hover:bg-gray-300 transition"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setShowFilterModal(false);
                  }}
                  className="flex-1 py-3 bg-[#1F4E20] text-white rounded-xl text-base font-semibold hover:bg-green-900 transition"
                >
                  Simpan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Atur Tanggal (Weekday/Weekend/Custom) === */}
      <AnimatePresence>
        {showWeekdayModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
            onClick={() => setShowWeekdayModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[30px] w-full max-w-sm shadow-xl relative py-[60px] px-[23px]"
            >
              {/* Back Button */}
              <button 
                onClick={() => setShowWeekdayModal(false)} 
                className="absolute top-6 left-5 cursor-pointer z-10"
              >
                <ArrowLeft className="w-6 h-6 text-black" />
              </button>

              {/* Options */}
              <div className="space-y-5">
                {/* Weekday Option */}
                <label
                  className={`relative flex items-center w-full h-14 rounded-[20px] border border-black cursor-pointer transition-colors ${
                    selectedDayType === "weekday" ? "bg-[#7FD083]" : "bg-white hover:bg-[#7FD083]/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="day-type"
                    value="weekday"
                    checked={selectedDayType === "weekday"}
                    onChange={() => {
                      setSelectedDayType("weekday");
                      setShowWeekdayModal(false);
                    }}
                    className="sr-only"
                  />
                  {selectedDayType === "weekday" && (
                    <img 
                      src="/asset/lahan/check-icon.svg" 
                      alt="Selected" 
                      className="absolute left-5 w-4 h-3" 
                    />
                  )}
                  <span className="absolute left-12 font-semibold text-base text-black">
                    Weekday
                  </span>
                </label>

                {/* Weekend Option */}
                <label
                  className={`relative flex items-center w-full h-14 rounded-[20px] border border-black cursor-pointer transition-colors ${
                    selectedDayType === "weekend" ? "bg-[#7FD083]" : "bg-white hover:bg-[#7FD083]/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="day-type"
                    value="weekend"
                    checked={selectedDayType === "weekend"}
                    onChange={() => {
                      setSelectedDayType("weekend");
                      setShowWeekdayModal(false);
                    }}
                    className="sr-only"
                  />
                  {selectedDayType === "weekend" && (
                    <img 
                      src="/asset/lahan/check-icon.svg" 
                      alt="Selected" 
                      className="absolute left-5 w-4 h-3" 
                    />
                  )}
                  <span className="absolute left-12 font-semibold text-base text-black">
                    Weekend
                  </span>
                </label>

                {/* Custom Option */}
                <label
                  className={`relative flex items-center w-full h-14 rounded-[20px] border border-black cursor-pointer transition-colors ${
                    selectedDayType === "custom" ? "bg-[#7FD083]" : "bg-white hover:bg-[#7FD083]/10"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCustomModal(true);
                  }}
                >
                  <input
                    type="radio"
                    name="day-type"
                    value="custom"
                    checked={selectedDayType === "custom"}
                    readOnly
                    className="sr-only"
                  />
                  <span className="absolute left-12 font-semibold text-base text-black">
                    Custom
                  </span>
                  <ChevronRight className="absolute right-5 w-3 h-5 text-black" />
                </label>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Custom Date === */}
      <AnimatePresence>
        {showCustomModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
            onClick={() => setShowCustomModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-sm font-semibold text-black">Atur tanggal</h2>
              </div>

              {/* Date Picker Container */}
              <div className="px-5 pb-5 space-y-4">
                {/* Labels */}
                <div className="flex justify-around px-2">
                  <span className="text-xs text-black font-normal w-16 text-center">Tanggal</span>
                  <span className="text-xs text-black font-normal w-16 text-center">Bulan</span>
                  <span className="text-xs text-black font-normal w-20 text-center">Tahun</span>
                </div>

                {/* Input Fields */}
                <div className="relative">
                  {/* Border Container */}
                  <div className="border border-black rounded-full h-12 flex items-center justify-around px-4 relative">
                    {/* Day Input */}
                    <div className="w-12 relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={2}
                        value={customDate.day}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          if (val === '' || (val.length <= 2 && parseInt(val) >= 0 && parseInt(val) <= 31)) {
                            setCustomDate({ ...customDate, day: val });
                          }
                        }}
                        className="w-full text-base font-semibold text-center bg-transparent outline-none text-black"
                      />
                      {!customDate.day && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-base font-semibold" style={{ color: '#9E9E9E' }}>
                          Tanggal
                        </div>
                      )}
                    </div>

                    {/* Divider 1 */}
                    <div className="w-0.5 h-7 bg-black rounded-full transform rotate-[30deg]"></div>

                    {/* Month Input */}
                    <div className="w-12 relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={2}
                        value={customDate.month}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          if (val === '' || (val.length <= 2 && parseInt(val) >= 0 && parseInt(val) <= 12)) {
                            setCustomDate({ ...customDate, month: val });
                          }
                        }}
                        className="w-full text-base font-semibold text-center bg-transparent outline-none text-black"
                      />
                      {!customDate.month && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-base font-semibold" style={{ color: '#9E9E9E' }}>
                          Bulan
                        </div>
                      )}
                    </div>

                    {/* Divider 2 */}
                    <div className="w-0.5 h-7 bg-black rounded-full transform rotate-[30deg]"></div>

                    {/* Year Input */}
                    <div className="w-16 relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={4}
                        value={customDate.year}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          if (val.length <= 4) {
                            setCustomDate({ ...customDate, year: val });
                          }
                        }}
                        className="w-full text-base font-semibold text-center bg-transparent outline-none text-black"
                      />
                      {!customDate.year && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-base font-semibold" style={{ color: '#9E9E9E' }}>
                          Tahun
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      setCustomDate({ day: "", month: "", year: "" });
                      setShowCustomModal(false);
                    }}
                    className="px-5 py-2 bg-gray-200 text-black rounded-lg text-sm font-semibold hover:bg-gray-300 transition"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => {
                      if (customDate.day && customDate.month && customDate.year) {
                        const day = customDate.day.padStart(2, '0');
                        const month = customDate.month.padStart(2, '0');
                        setCustomDate({ day, month, year: customDate.year });
                        setSelectedDayType("custom");
                        setShowCustomModal(false);
                        setShowWeekdayModal(false);
                      } else {
                        setShowAlertModal(true);
                      }
                    }}
                    className="px-5 py-2 bg-[#1F4E20] text-white rounded-lg text-sm font-semibold hover:bg-green-900 transition"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MODAL: Validation Alert === */}
      <AnimatePresence>
        {showAlertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-[60] px-4"
            onClick={() => setShowAlertModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6"
            >
              <p className="text-center text-gray-800 text-base mb-4">
                Mohon pilih tanggal, bulan, dan tahun terlebih dahulu
              </p>
              <button
                onClick={() => setShowAlertModal(false)}
                className="w-full py-2.5 bg-[#1F4E20] text-white rounded-lg font-semibold hover:bg-green-900 transition"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}