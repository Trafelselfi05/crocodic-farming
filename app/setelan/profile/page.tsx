"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

const PROFILE_ITEMS = [
  { 
    icon: "/asset/setelan/profile2.svg", 
    label: "Nama", 
    value: "Selfi",
    type: "text",
    field: "nama"
  },
  { 
    icon: "/asset/setelan/tlp.svg", 
    label: "Nomor Telepon", 
    value: "+62 812 3456 7890",
    type: "tel",
    field: "telepon"
  },
  { 
    icon: "/asset/setelan/email-icon.svg", 
    label: "Email", 
    value: "aziz@example.com",
    type: "email",
    field: "email"
  },
  { 
    icon: "/asset/setelan/lock-icon.svg", 
    label: "Kata Sandi", 
    value: "********",
    type: "password",
    field: "password"
  },
];

// Komponen Keyboard Virtual iOS Style
function VirtualKeyboard({ onKeyPress, onDelete, onSpace }: {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
  onSpace: () => void;
}) {
  const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bottomRow = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div className="bg-[#D1D5DB] px-1 pt-2 pb-0">
      {/* Top Row */}
      <div className="flex justify-center gap-[5px] mb-[8px]">
        {topRow.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onKeyPress(key)}
            className="flex-1 h-[40px] bg-white rounded-md flex items-center justify-center text-[20px] font-normal shadow-sm active:bg-gray-200 transition-colors duration-100"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Middle Row */}
      <div className="flex justify-center gap-[5px] mb-[8px] px-3">
        {middleRow.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onKeyPress(key)}
            className="flex-1 h-[40px] bg-white rounded-md flex items-center justify-center text-[20px] font-normal shadow-sm active:bg-gray-200 transition-colors duration-100"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-[5px] mb-[8px]">
        <button
          type="button"
          className="w-[40px] h-[40px] bg-[#AEB4BE] rounded-md flex items-center justify-center shadow-sm active:bg-gray-400 transition-colors duration-100"
        >
          <span className="text-[18px]">⇧</span>
        </button>
        {bottomRow.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onKeyPress(key)}
            className="flex-1 h-[40px] bg-white rounded-md flex items-center justify-center text-[20px] font-normal shadow-sm active:bg-gray-200 transition-colors duration-100"
          >
            {key}
          </button>
        ))}
        <button
          type="button"
          onClick={onDelete}
          className="w-[40px] h-[40px] bg-[#AEB4BE] rounded-md flex items-center justify-center shadow-sm active:bg-gray-400 transition-colors duration-100"
        >
          <span className="text-[18px]">⌫</span>
        </button>
      </div>

      {/* Control Row */}
      <div className="flex justify-center gap-[5px] pb-1">
        <button
          type="button"
          onClick={() => onKeyPress('123')}
          className="w-[85px] h-[40px] bg-[#AEB4BE] rounded-md flex items-center justify-center text-[15px] font-normal shadow-sm active:bg-gray-400 transition-colors duration-100"
        >
          123
        </button>
        <button
          type="button"
          onClick={onSpace}
          className="flex-1 h-[40px] bg-white rounded-md flex items-center justify-center text-[15px] font-normal shadow-sm active:bg-gray-200 transition-colors duration-100"
        >
          space
        </button>
        <button
          type="button"
          className="w-[85px] h-[40px] bg-[#1C7ED6] rounded-md flex items-center justify-center text-white text-[15px] font-medium shadow-sm active:bg-blue-700 transition-colors duration-100"
        >
          kembali
        </button>
      </div>
    </div>
  );
}

// Komponen Modal Edit - TOMBOL SIMPAN DIPERBAIKI
function EditModal({ isOpen, onClose, field, currentValue, onSave }: {
  isOpen: boolean;
  onClose: () => void;
  field: string;
  currentValue: string;
  onSave: (value: string) => void;
}) {
  const [value, setValue] = useState(currentValue);

  const handleKeyPress = (key: string) => {
    setValue(prev => prev + key);
  };

  const handleDelete = () => {
    setValue(prev => prev.slice(0, -1));
  };

  const handleSpace = () => {
    setValue(prev => prev + ' ');
  };

  const getModalTitle = () => {
    switch (field) {
      case "nama": return "Ubah Nama";
      case "telepon": return "Ubah Nomor Telepon";
      case "email": return "Ubah Email";
      case "password": return "Ubah Kata Sandi";
      default: return "Ubah Data";
    }
  };

  const getInputType = () => {
    switch (field) {
      case "nama": return "text";
      case "telepon": return "tel";
      case "email": return "email";
      case "password": return "password";
      default: return "text";
    }
  };

  const getPlaceholder = () => {
    switch (field) {
      case "nama": return "Nama";
      case "telepon": return "Nomor Telepon";
      case "email": return "Email";
      case "password": return "Kata Sandi";
      default: return "";
    }
  };

  const handleSave = () => {
    if (value.trim()) {
      onSave(value);
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Bottom Sheet Modal - starts from 40% of screen */}
      <div className="absolute top-[40%] left-0 right-0 bottom-0 bg-white rounded-t-[20px] shadow-2xl animate-slideUpFromBottom flex flex-col overflow-hidden">
        {/* Handle Bar */}
        <div className="flex justify-center pt-2 pb-2">
          <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="px-5 pb-2">
          <h2 className="text-[17px] font-semibold text-black font-['Poppins']">
            {getModalTitle()}
          </h2>
        </div>

        {/* Input Section */}
        <div className="px-5 pb-3">
          <div className="relative">
            <input
              type={getInputType()}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={getPlaceholder()}
              className="w-full px-4 py-2.5 bg-white outline-none text-black font-['Poppins'] text-[15px] rounded-[10px] border border-gray-300 focus:border-blue-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Action Buttons - DIUBAH: background putih, text hitam untuk kedua tombol */}
        <div className="flex justify-end gap-3 px-5 pb-3">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-black font-['Poppins'] font-normal text-[15px] border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            disabled={!value.trim()}
            className="px-4 py-1.5 bg-white text-black font-['Poppins'] font-semibold text-[15px] border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Simpan
          </button>
        </div>

        {/* Virtual Keyboard */}
        <VirtualKeyboard 
          onKeyPress={handleKeyPress}
          onDelete={handleDelete}
          onSpace={handleSpace}
        />
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
        
        @keyframes slideUpFromBottom {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          background-color: rgba(0, 0, 0, 0.3);
        }
        
        .animate-slideUpFromBottom {
          animation: slideUpFromBottom 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
      `}</style>
    </div>
  );
}

// Komponen Modal untuk Upload Gambar Profil
function UploadProfileImageModal({ 
  isOpen, 
  onClose,
  onGalleryOpen
}: {
  isOpen: boolean;
  onClose: () => void;
  onGalleryOpen: () => void;
}) {
  const handleCameraClick = () => {
    console.log("Membuka kamera...");
    // Implementasi akses kamera di sini
  };

  const handleGalleryClick = () => {
    onGalleryOpen();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-30 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Main Modal Container */}
      <div className="flex flex-col w-full max-w-[402px] items-center gap-8 p-4 relative bg-white rounded-t-[24px] border border-[#1F4E20] animate-slideUpFromBottom">
        
        {/* Header Section */}
        <section className="flex flex-col items-center gap-6 w-full">
          {/* Spacer div */}
          <div className="w-full h-6"></div>
          
          <h1 className="text-[16px] font-semibold text-black font-['Poppins'] text-center">
            Tambahkan gambar profil Anda
          </h1>
        </section>

        {/* Button Options */}
        <section className="flex flex-col items-center gap-4 w-full">
          <div className="flex w-full max-w-[358px] gap-4">
            {/* Kamera Button */}
            <button
              type="button"
              onClick={handleCameraClick}
              className="flex flex-1 h-[60px] items-center justify-center bg-[#1F4E20] rounded-[12px] hover:bg-[#1F4E20] hover:bg-opacity-90 active:bg-[#1F4E20] active:bg-opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7FD083] focus:ring-offset-2"
              aria-label="Ambil foto dengan kamera"
            >
              <div className="relative w-6 h-6 mr-2">
                <Image
                  src="/asset/setelan/kamera.svg"
                  alt=""
                  width={20}
                  height={18}
                  className="absolute w-[83.33%] h-[75%] top-[8.33%] left-[8.33%]"
                />
              </div>
              <span className="text-white font-['Poppins'] font-semibold text-[16px]">
                Kamera
              </span>
            </button>

            {/* Galeri Button */}
            <button
              type="button"
              onClick={handleGalleryClick}
              className="flex flex-1 h-[60px] items-center justify-center bg-[#1F4E20] rounded-[12px] hover:bg-[#1F4E20] hover:bg-opacity-90 active:bg-[#1F4E20] active:bg-opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7FD083] focus:ring-offset-2"
              aria-label="Pilih gambar dari galeri"
            >
              <div className="relative w-6 h-6 mr-2">
                <Image
                  src="/asset/setelan/galeri.svg"
                  alt=""
                  width={20}
                  height={18}
                  className="absolute w-[83.33%] h-[75%] top-[8.33%] left-[8.33%]"
                />
              </div>
              <span className="text-white font-['Poppins'] font-semibold text-[16px]">
                Galeri
              </span>
            </button>
          </div>
        </section>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 bg-transparent border-none p-0 cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#7FD083] focus:ring-offset-2 rounded"
          aria-label="Tutup dialog"
        >
          <div className="relative w-6 h-6">
            <Image
              src="/asset/setelan/close-icon.svg"
              alt=""
              width={20}
              height={20}
              className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            />
          </div>
        </button>

        {/* Back Button */}
        <section className="flex flex-col items-start gap-2 w-full">
          <button
            type="button"
            onClick={onClose}
            className="flex w-full max-w-[354px] h-[55px] items-center justify-center gap-2 p-2 bg-[#AAAAAA] bg-opacity-25 rounded-[12px] hover:bg-opacity-35 active:bg-opacity-45 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7FD083] focus:ring-offset-2"
          >
            <span className="text-black font-['Poppins'] font-semibold text-[16px]">
              Kembali
            </span>
          </button>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
        
        @keyframes slideUpFromBottom {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideUpFromBottom {
          animation: slideUpFromBottom 0.35s cubic-bezier(0.32, 0.72, 0, 1);
        }
      `}</style>
    </div>
  );
}

// Komponen Image Editor Modal
function ImageEditorModal({ 
  isOpen, 
  onClose,
  imageUrl,
  onSave
}: {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  onSave: (imageUrl: string) => void;
}) {
  const handleBatalClick = () => {
    onClose();
  };

  const handleSelesaiClick = () => {
    onSave(imageUrl);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center bg-white animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[360px] min-h-[729px] gap-[264px] py-[25px] items-center relative mx-auto">
        
        {/* Image Container */}
        <figure className="image-container relative w-full max-w-[328px] m-0">
          <img 
            src={imageUrl} 
            alt="Foto profil yang dipilih" 
            className="relative w-full h-auto max-h-[344px] object-contain"
          />
        </figure>

        {/* Action Buttons */}
        <nav className="frame-wrapper inline-flex flex-col items-center gap-[260px] relative flex-0-auto w-full">
          <div className="flex w-full max-w-[322px] items-center justify-between relative flex-0-auto">
            {/* Batal Button */}
            <button
              type="button"
              onClick={handleBatalClick}
              className="flex min-w-[90px] items-center justify-center gap-2.5 p-2.5 bg-[#AAAAAA] rounded-[10px] hover:bg-opacity-90 active:bg-opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7FD083] focus:ring-offset-2"
              aria-label="Batal"
            >
              <span className="font-['Poppins'] font-medium text-[15px] text-white text-center leading-4 whitespace-nowrap">
                Batal
              </span>
            </button>

            {/* Selesai Button */}
            <button
              type="button"
              onClick={handleSelesaiClick}
              className="flex min-w-[90px] items-center justify-center gap-2.5 p-2.5 bg-[#1F4E20] rounded-[10px] hover:bg-opacity-90 active:bg-opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7FD083] focus:ring-offset-2"
              aria-label="Selesai"
            >
              <span className="font-['Poppins'] font-medium text-[15px] text-white text-center leading-4 whitespace-nowrap">
                Selesai
              </span>
            </button>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Komponen Avatar dengan fallback yang lebih baik
function AvatarImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    // Jika gambar gagal dimuat, gunakan fallback
    setImgSrc("/asset/setelan/avatar.svg");
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const [modalState, setModalState] = useState({
    isOpen: false,
    field: "",
    currentValue: ""
  });
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [imageEditorOpen, setImageEditorOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    nama: "Selfi",
    telepon: "+62 812 3456 7890",
    email: "aziz@example.com",
    password: "********"
  });
  const [avatarImage, setAvatarImage] = useState("/asset/setelan/avatar.svg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = (field: string, currentValue: string) => {
    setModalState({
      isOpen: true,
      field,
      currentValue: field === "password" ? "" : currentValue
    });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, field: "", currentValue: "" });
  };

  const handleSave = (newValue: string) => {
    setProfileData(prev => ({
      ...prev,
      [modalState.field]: newValue
    }));
    handleCloseModal();
  };

  const handleAvatarClick = () => {
    setUploadModalOpen(true);
  };

  const handleCloseUploadModal = () => {
    setUploadModalOpen(false);
  };

  // Fungsi untuk langsung mengakses galeri perangkat
  const handleGalleryOpen = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle ketika gambar dipilih dari file input
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validasi tipe file
      if (!file.type.startsWith('image/')) {
        alert('Harap pilih file gambar yang valid');
        return;
      }

      // Validasi ukuran file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file terlalu besar. Maksimal 5MB');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageEditorOpen(true);
    }
    
    // Reset input file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCloseImageEditor = () => {
    setImageEditorOpen(false);
    // Clean up object URL jika batal
    if (selectedImage && selectedImage.startsWith('blob:')) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(null);
  };

  const handleSaveImage = (imageUrl: string) => {
    // Simpan gambar ke state avatarImage - INI YANG MENGUBAH AVATAR
    setAvatarImage(imageUrl);
    console.log("Gambar profil berhasil diubah!");
    
    // Tidak perlu revoke URL di sini karena kita ingin menggunakan gambar yang dipilih
    // URL akan tetap valid selama komponen mounted
    
    setImageEditorOpen(false);
    setSelectedImage(null);
  };

  return (
    <main className="inline-flex flex-col min-h-[670px] items-center gap-[30px] relative bg-gray-100">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
        aria-label="Pilih gambar dari galeri"
      />

      {/* Header */}
      <header className="flex items-center justify-center gap-5 relative self-stretch w-full">
        <button
          onClick={() => router.back()}
          type="button"
          aria-label="Kembali ke halaman sebelumnya"
          className="relative w-10 h-10 rotate-180 bg-transparent border-none p-0 cursor-pointer hover:opacity-70 transition-opacity duration-200"
        >
          <Image
            src="/asset/setelan/back.svg"
            alt=""
            width={24}
            height={21}
            className="absolute w-[60.42%] h-[52.08%] top-[23.96%] left-[19.79%] rotate-180"
          />
        </button>

        <div className="flex flex-col items-start gap-2.5 relative flex-1">
          <h1 className="relative w-fit -mt-[6.5px] -mb-[4.5px] font-['Poppins'] font-semibold text-black text-2xl tracking-normal leading-normal">
            Profil
          </h1>
        </div>
      </header>

      {/* Avatar Section - INI YANG AKAN BERUBAH */}
      <section className="flex flex-col w-44 items-end relative">
        <AvatarImage
          src={avatarImage}
          alt="Foto profil"
          className="relative self-stretch w-full h-44 object-cover rounded-full"
        />
        
        <button
          type="button"
          aria-label="Ubah foto profil"
          className="relative w-[47px] h-[34px] -mt-[42px] bg-transparent border-none p-0 cursor-pointer hover:opacity-70 transition-opacity duration-200"
          onClick={handleAvatarClick}
        >
          <Image
            src="/asset/setelan/camera-icon.svg"
            alt=""
            width={28}
            height={26}
            className="object-contain"
          />
        </button>
      </section>

      {/* Profile Items */}
      <section className="flex flex-col w-[344px] items-start gap-[15px] relative">
        {PROFILE_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col h-[84px] items-start gap-2.5 p-[15px_11px] relative self-stretch w-full bg-white rounded-[25px] border border-[#AAAAAA] hover:shadow-md transition-all duration-200"
          >
            <div className="inline-flex items-center gap-[61px] relative">
              <div className="inline-flex items-center gap-[25px] relative">
                <div className="relative w-[53px] h-[53px] bg-[#AAAAAA] bg-opacity-50 rounded-full flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col w-[140px] items-start relative">
                  <h2 className="relative self-stretch -mt-px font-['Poppins'] font-semibold text-black text-base tracking-normal leading-normal">
                    {item.label}
                  </h2>
                  <p className="relative self-stretch font-['Poppins'] font-normal text-black text-xs tracking-normal leading-normal">
                    {profileData[item.field as keyof typeof profileData]}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label={`Edit ${item.label.toLowerCase()}`}
                className="relative w-[21.75px] h-[21.75px] bg-transparent border-none p-0 cursor-pointer hover:opacity-70 transition-opacity duration-200"
                onClick={() => handleEditClick(item.field, profileData[item.field as keyof typeof profileData])}
              >
                <Image
                  src="/asset/setelan/edit-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="relative w-[21.75px] h-[21.75px] object-contain"
                />
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Edit Modal */}
      <EditModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        field={modalState.field}
        currentValue={modalState.currentValue}
        onSave={handleSave}
      />

      {/* Upload Profile Image Modal */}
      <UploadProfileImageModal
        isOpen={uploadModalOpen}
        onClose={handleCloseUploadModal}
        onGalleryOpen={handleGalleryOpen}
      />

      {/* Image Editor Modal */}
      <ImageEditorModal
        isOpen={imageEditorOpen}
        onClose={handleCloseImageEditor}
        imageUrl={selectedImage || "/asset/setelan/avatar.svg"}
        onSave={handleSaveImage}
      />
    </main>
  );
}