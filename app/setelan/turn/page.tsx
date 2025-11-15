"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotifikasiPage() {
  const [aktif, setAktif] = useState(false);

  return (
    <div className="flex flex-col w-[344px] h-[430px] items-start gap-[30px] relative">
      {/* === HEADER === */}
      <header className="flex items-center justify-center gap-5 relative self-stretch w-full flex-none">
        <Link href="/setelan">
          <button
            className="relative w-10 h-10 -rotate-180 aspect-square bg-none border-none p-0 cursor-pointer flex items-center justify-center hover:opacity-80 active:opacity-60"
            type="button"
            aria-label="Kembali"
          >
            <img
              src="/asset/setelan/back.svg"
              alt=""
              className="absolute w-[60.42%] h-[52.08%] top-[23.96%] left-[19.79%] rotate-180 pointer-events-none"
            />
          </button>
        </Link>

        <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
          <div className="flex h-[25px] items-center gap-2.5 relative self-stretch w-full">
            <h1 className="relative w-fit -mt-1.5 -mb-1 font-['Poppins'] font-semibold text-[#000000] text-2xl tracking-normal leading-normal">
              Notifikasi
            </h1>
          </div>
        </div>
      </header>

      {/* === CARD NOTIFIKASI === */}
      <section className="flex flex-col w-[344px] items-start gap-3.5 relative flex-none">
        <article className="flex flex-col h-[84px] items-start gap-2.5 py-3.5 px-2.5 relative self-stretch w-full bg-white rounded-[25px] border border-[#AAAAAA]">
          <div className="inline-flex items-center gap-[61px] relative flex-none -mb-1.5">
            {/* LEFT SECTION (IMAGE + TEXT) */}
            <div className="inline-flex items-center gap-6 relative flex-none">
              <img
                src="/asset/setelan/notif-icon.svg"
                alt="Ikon notifikasi"
                className="relative w-[53px] h-[53px]"
              />
              <div className="flex flex-col w-[140px] items-start relative">
                <h2 className="relative self-stretch -mt-0.5 font-['Poppins'] font-semibold text-[#000000] text-base tracking-normal leading-normal">
                  Notifikasi
                </h2>
                <p className="relative w-[184px] -mr-11 font-['Poppins'] font-normal text-[#000000] text-xs tracking-normal leading-normal">
                  Aktifkan notifikasi untuk menerima secara real-time.
                </p>
              </div>
            </div>

            {/* TOGGLE SWITCH */}
            <label className="relative w-10 h-10 cursor-pointer flex items-center justify-center">
              <input
                type="checkbox"
                className="absolute opacity-0 w-0 h-0 m-0 p-0"
                aria-label="Aktifkan atau nonaktifkan notifikasi"
                checked={aktif}
                onChange={() => setAktif(!aktif)}
              />
              <span className="relative w-10 h-10 flex items-center justify-center">
                {aktif ? (
                  <img
                    src="/asset/active.svg"
                    alt="Notifikasi aktif"
                    className="relative w-10 h-10 aspect-square pointer-events-none"
                  />
                ) : (
                  <img
                    src="/asset/inactive.svg"
                    alt="Notifikasi non-aktif"
                    className="relative w-10 h-10 aspect-square pointer-events-none"
                  />
                )}
              </span>
            </label>
          </div>
        </article>
      </section>
    </div>
  );
}