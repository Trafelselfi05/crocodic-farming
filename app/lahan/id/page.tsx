"use client";

import { useState } from "react";
import { ArrowLeft, Pencil, Trash2, Plus, ChevronDown, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LahanDetailPage() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showWeekdayModal, setShowWeekdayModal] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  const [selectedDayType, setSelectedDayType] = useState<"weekday" | "weekend" | "custom">("weekday");
  const [customDate, setCustomDate] = useState({ day: "", month: "", year: "" });
  const [timeFrom, setTimeFrom] = useState("08:30");
  const [timeTo, setTimeTo] = useState("05:30");
  const [periodFrom, setPeriodFrom] = useState<"AM" | "PM">("AM");
  const [periodTo, setPeriodTo] = useState<"PM" | "AM">("PM");

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

  return (
    <div className="bg-gray-50 w-full flex flex-col h-screen">
      <div className="sticky top-0 bg-gray-50 z-20 px-6 pt-2 pb-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button onClick={handleBack} className="cursor-pointer">
              <ArrowLeft className="text-gray-700 w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Lahan #01</h1>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-gray-700 text-sm">Luas: 2 ha</p>
            <p className="text-gray-700 text-sm">Tanaman: Padi</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-green-700 p-3 rounded-full" onClick={() => setShowEditModal(true)}>
              <Pencil className="text-white w-5 h-5" />
            </button>
            <button className="bg-green-700 p-3 rounded-full">
              <Trash2 className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tombol Tambah Sensor */}
        <button className="flex items-center justify-center gap-2 w-full py-2 bg-green-700 text-white rounded-lg mb-0">
          <Plus className="w-5 h-5" /> Tambah Sensor
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="space-y-4 overflow-y-auto flex-1 px-6 pb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            {/* Penyiraman Otomatis */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m6.364.636l-1.414 1.414M20 12h-2M4 12H2m3.636 7.364l1.414-1.414M12 20v2m4.95-4.95a7 7 0 10-9.9 0" />
                </svg>
                <span className="font-medium text-gray-800">Penyiraman Otomatis</span>
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
              <button onClick={() => setShowFilterModal(true)} className="p-1.5 rounded-full hover:bg-gray-100 border border-gray-300">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>

            {/* Waktu */}
            <div className="flex justify-between items-center gap-2 mt-4">
              <div className="flex flex-col items-center flex-1 border rounded-lg p-2">
                <span className="text-xs text-gray-500">Dari</span>
                <span className="text-sm font-medium text-gray-800">07:30 AM</span>
              </div>
              <div className="h-[1px] bg-gray-300 w-5"></div>
              <div className="flex flex-col items-center flex-1 border rounded-lg p-2">
                <span className="text-xs text-gray-500">Sampai</span>
                <span className="text-sm font-medium text-gray-800">05:45 PM</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === ALERT MODAL: Buat Jadwal Baru === */}
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
                    // Add save logic here
                  }}
                  className="flex-1 py-3 bg-green-800 text-white rounded-xl text-base font-semibold hover:bg-green-900 transition"
                >
                  Simpan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === ALERT MODAL: Atur Tanggal (Weekday/Weekend/Custom) === */}
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
                    <svg 
                      className="absolute left-5 w-4 h-3" 
                      viewBox="0 0 16 12" 
                      fill="none"
                    >
                      <path 
                        d="M1 6L6 11L15 1" 
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
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
                    <svg 
                      className="absolute left-5 w-4 h-3" 
                      viewBox="0 0 16 12" 
                      fill="none"
                    >
                      <path 
                        d="M1 6L6 11L15 1" 
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
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

      {/* === ALERT MODAL: Custom Date (Scroll Picker) === */}
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
                    className="px-5 py-2 bg-green-800 text-white rounded-lg text-sm font-semibold hover:bg-green-900 transition"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === ALERT MODAL: Edit Lahan === */}
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
              className="bg-white rounded-2xl w-full max-w-sm shadow-xl"
            >
              {/* Header */}
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-lg font-bold text-gray-800">Edit Lahan</h2>
              </div>

              {/* Form Fields */}
              <div className="px-5 pb-5 space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Nama Lahan</label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Masukkan nama lahan"
                    defaultValue="Lahan #01"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Jenis Tanaman</label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Masukkan jenis tanaman"
                    defaultValue="Padi"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Luas Lahan</label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Masukkan luas lahan"
                    defaultValue="2 ha"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="flex-1 py-2.5 bg-green-800 text-white rounded-lg font-medium hover:bg-green-900 transition"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === ALERT MODAL: Validation Alert === */}
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
                className="w-full py-2.5 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition"
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