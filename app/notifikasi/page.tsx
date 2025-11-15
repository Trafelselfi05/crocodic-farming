"use client";

import { Settings2 as Filter, Clock } from "lucide-react";
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
    judul: "Sensor Kelembaban Tanah",
    deskripsi: "Kelembaban turun 20%",
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
    judul: "Sensor Kelembaban Lingkungan",
    deskripsi: "Kelembaban normal kembali",
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
    judul: "Sensor NPK",
    deskripsi: "Kadar NPK menurun",
    waktu: "8 menit yang lalu",
  },
  {
    id: 12,
    lahan: "Lahan 2",
    judul: "Sensor Suhu Lingkungan",
    deskripsi: "Suhu turun 2°C",
    waktu: "25 menit yang lalu",
  },
  {
    id: 13,
    lahan: "Lahan 3",
    judul: "Sensor pH Tanah",
    deskripsi: "pH tanah berubah menjadi 6.5",
    waktu: "40 menit yang lalu",
  },
];

// Function to get icon based on notification title
const getNotificationIcon = (judul: string): string => {
  const judulLower = judul.toLowerCase();
  
  if (judulLower.includes("kelembaban lingkungan")) {
    return "/asset/beranda/kelembapanlingkungan.svg";
  } else if (judulLower.includes("suhu tanah")) {
    return "/asset/beranda/suhu.svg";
  } else if (judulLower.includes("npk")) {
    return "/asset/beranda/npk.svg";
  } else if (judulLower.includes("suhu lingkungan")) {
    return "/asset/beranda/suhulingkungan.svg";
  } else if (judulLower.includes("ph tanah")) {
    return "/asset/beranda/ph.svg";
  } else if (judulLower.includes("kelembaban tanah") || judulLower.includes("kelembapan")) {
    return "/asset/beranda/kelembapantanah.svg";
  } else if (judulLower.includes("penyiraman")) {
    return "/asset/beranda/kelembapantanah.svg";
  } else if (judulLower.includes("pemupukan")) {
    return "/asset/beranda/npk.svg";
  }
  
  return "/asset/beranda/kelembapantanah.svg";
};

// Modal Component untuk Konfirmasi Hapus
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      <div 
        className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg max-w-xs w-full border border-gray-200"
        role="alertdialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        {/* Trash Icon */}
        <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full" role="img" aria-label="Ikon tempat sampah">
          <img 
            className="w-13 h-13" 
            src="/asset/setelan/trash.svg" 
            alt="Ikon hapus" 
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-5 w-full">
          <p 
            id="dialog-description"
            className="w-full text-center font-poppins font-normal text-black text-base leading-normal"
          >
            Apakah Anda yakin ingin menghapus semua notifikasi?
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col w-full gap-3">
            <button 
              className="h-12 flex items-center justify-center w-full bg-[#1F4E20] rounded-2xl border-none cursor-pointer transition-colors hover:bg-[#1F4E20]/90 active:bg-[#1F4E20]/80"
              type="button" 
              aria-label="Hapus semua notifikasi"
              onClick={onConfirm}
            >
              <span className="font-poppins font-medium text-white text-base text-center leading-normal">
                Hapus
              </span>
            </button>
            
            <button 
              className="h-12 flex items-center justify-center w-full bg-gray-100 rounded-2xl border border-gray-300 cursor-pointer transition-colors hover:bg-gray-200 active:bg-gray-300"
              type="button" 
              aria-label="Batal hapus notifikasi"
              onClick={onClose}
            >
              <span className="font-poppins font-medium text-[#1F4E20] text-base text-center leading-normal">
                Batal
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NotifikasiPage() {
  const [filter, setFilter] = useState<string>("Semua");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notifikasi[]>(dummyNotifikasi);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

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
      ? notifications
      : notifications.filter((n) => n.lahan === filter);

  // Function to handle back button
  const handleBack = () => {
    window.history.back();
  };

  // Function to open delete modal
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  // Function to close delete modal
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  // Function to handle delete all notifications
  const handleDeleteAll = () => {
    setNotifications([]);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="bg-[#F4FAF4] w-full h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-[#F4FAF4] z-20 px-6 pt-2 pb-3 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          {/* Back Button */}
          <button 
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-[#7FD083]/20 transition"
          >
            <img 
              src="/asset/setelan/back.svg" 
              alt="Back" 
              className="w-6 h-6"
            />
          </button>
          
          <h1 className="text-xl font-semibold text-[#1F4E20]">Notifikasi</h1>
          
          {/* Delete Button */}
          <button 
            onClick={handleOpenDeleteModal}
            className="p-2 rounded-full hover:bg-[#7FD083]/20 transition"
          >
            <img 
              src="/asset/setelan/trash.svg" 
              alt="Delete All" 
              className="w-13 h-13"
            />
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center bg-white border border-[#7FD083] px-4 py-2 rounded-lg shadow-sm text-[#1F4E20] hover:bg-[#7FD083]/10 transition"
          >
            <span>{filter}</span>
            <img 
              src="/asset/beranda/icon-filter.svg" 
              alt="Filter" 
              className="w-8 h-8"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border border-[#7FD083] rounded-lg shadow-md z-30 max-h-60 overflow-y-auto">
              {lahanOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-[#7FD083]/10 transition ${
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
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto px-6 py-3">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-white rounded-lg shadow-sm border border-[#7FD083]/50 p-4 hover:shadow-md transition"
          >
            {/* Dynamic Icon */}
            <div className="flex-shrink-0">
              <img
                src={getNotificationIcon(item.judul)}
                alt={item.judul}
                className="w-9 h-9"
              />
            </div>
            
            <div className="flex flex-col space-y-2 flex-1">
              <p className="text-[#1F4E20] font-semibold">
                {item.lahan} - {item.judul}
              </p>
              <p className="text-gray-700 text-sm">{item.deskripsi}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <img 
                  src="/asset/beranda/clock.svg" 
                  alt="Clock" 
                  className="w-4 h-4"
                />
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

      {/* Delete Confirmation Modal */}
      <DeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteAll}
      />
    </div>
  );
}