"use client";

import {
  ArrowLeft,
  Camera,
  User,
  Phone,
  Mail,
  Lock,
  Pencil,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const profileItems = [
    { icon: User, label: "Nama", value: "Aziz Azzam" },
    { icon: Phone, label: "Nomor Telepon", value: "+62 812 3456 7890" },
    { icon: Mail, label: "Email", value: "aziz@example.com" },
    { icon: Lock, label: "Kata Sandi", value: "********" },
  ];

  return (
    <div className=" w-full flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-4 py-4  sticky top-0">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-gray-700 hover:text-[#1F4E20] transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-lg font-semibold text-gray-800 ">
            Profile
          </h1>
        </button>
      </header>

      {/* AVATAR */}
      <div className="relative mt-10">
        <Image
          src="/avatar-placeholder.png" // ganti dengan gambar user
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-white shadow-md"
        />
        {/* ICON CAMERA */}
        <button className="absolute bottom-1 left-1 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
          <Camera className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* PROFILE CARD */}
      <div className="w-full max-w-md mt-8 px-4 flex flex-col gap-4">
        {profileItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-center justify-between w-full bg-white rounded-4xl px-4 py-6 shadow-sm hover:bg-[#7FD083]/10 transition border-secondary border`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[#1F4E20]" />
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-[#1F4E20] transition">
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
