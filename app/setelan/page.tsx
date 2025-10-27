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
    <div className="min-h-screen bg-[#F4FAF4] p-4 flex flex-col">
      {/* Header */}
      <h1 className="text-2xl font-bold text-[#1F4E20] mb-6">Setelan</h1>

      {/* Menu List */}
      <div className="flex flex-col gap-3">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center justify-between w-full bg-white rounded-lg px-4 py-3 shadow-sm hover:bg-[#7FD083]/10 transition`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="text-[#1F4E20] w-5 h-5" />
              <span className="text-[#1F4E20] font-medium">{item.name}</span>
            </div>
            <ChevronRight className="text-[#7FD083] w-5 h-5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
