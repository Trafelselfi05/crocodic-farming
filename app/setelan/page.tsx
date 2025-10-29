"use client";

import { User, Globe, Bell, Info, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Profil", icon: User, href: "/profil" },
  { name: "Aturan Zona Waktu", icon: Globe, href: "/zona-waktu" },
  { name: "Notifikasi", icon: Bell, href: "/notifikasi" },
  { name: "Tentang Kami", icon: Info, href: "/tentang" },
  { name: "Keluar", icon: LogOut, href: "/logout" },
];

export default function SetelanPage() {
  return (
    <div className="w-full px-6 bg-[#F4FAF4] flex flex-col">
      {/* Header */}
      <h1 className="text-2xl font-bold text-[#1F4E20] mb-6">Setelan</h1>

      {/* Menu List */}
      <div className="flex flex-col gap-3">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={`setelan/${item.href}`}
            className={`flex items-center justify-between w-full bg-white rounded-4xl px-4 py-6 shadow-sm hover:bg-[#7FD083]/10 transition border-secondary border`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary  rounded-full p-3">
                <item.icon className="text-white" />
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
