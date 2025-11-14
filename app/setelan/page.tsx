"use client";

import { User, Globe, Bell, Info, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { 
    name: "Profil", 
    icon: User, 
    iconImage: "/asset/setelan/profile.svg", 
    href: "/profile" 
  },
  { 
    name: "Aturan Zona Waktu", 
    icon: Globe, 
    iconImage: "/asset/setelan/zona-waktu.svg", 
    href: "/zona-waktu" 
  },
  { 
    name: "Notifikasi", 
    icon: Bell, 
    iconImage: "/asset/setelan/notifikasi.svg", 
    href: "/notifikasi" 
  },
  { 
    name: "Tentang Kami", 
    icon: Info, 
    iconImage: "/asset/setelan/tentang.svg", 
    href: "/tentang" 
  },
  { 
    name: "Keluar", 
    icon: LogOut, 
    iconImage: "/asset/setelan/keluar.svg", 
    href: "/logout" 
  },
];

export default function SetelanPage() {
  return (
    <div className="w-full px-6 bg-[#F4FAF4] flex flex-col">
      {/* Header */}
      <h1 className="text-2xl font-bold text-[#1F4E20] mb-6">Setelan</h1>

      {/* Menu List */}
      <div className="flex flex-col gap-[25px]">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={`setelan/${item.href}`}
            className={`flex items-center justify-between w-full bg-white rounded-[25px] px-3 py-4 border border-[#7FD083] hover:bg-[#F4FAF4] hover:border-[#1F4E20] transition border-secondary`}
          >
            <div className="flex items-center gap-6">
              <div className="bg-primary rounded-full p-3">
                <Image
                  src={item.iconImage}
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <span className="text-[#1F4E20] font-bold">{item.name}</span>
            </div>
            <ChevronRight className="text-primary w-5 h-5" />
          </Link>
        ))}
      </div>
    </div>
  );
}