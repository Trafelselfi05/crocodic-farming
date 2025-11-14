"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <main className="max-w-md mx-auto flex flex-col gap-8">
        {/* Header */}
        <header className="flex items-center gap-5">
          <button 
            type="button" 
            aria-label="Kembali ke halaman sebelumnya"
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <svg 
              width="24" 
              height="21" 
              viewBox="0 0 24 21" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path 
                d="M14 5L20 10.5L14 16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M20 10.5H4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </button>
          
          <h1 className="text-2xl font-semibold text-black">
            Tentang Kami
          </h1>
        </header>
        
        {/* Content Card */}
        <section className="w-full">
          <article className="bg-white rounded-[25px] border border-gray-300 p-6 shadow-sm">
            <div className="text-justify">
              <p className="text-xs leading-relaxed text-black">
                <span className="font-normal">
                  Crocodic Smart Farming adalah aplikasi pertanian cerdas yang dirancang untuk membantu petani dan
                  pengelola lahan dalam mengoptimalkan hasil pertanian dengan memanfaatkan teknologi digital dan
                  Internet of Things (IoT).
                </span>
              </p>
              
              <p className="text-xs leading-relaxed text-black mt-4">
                <span className="font-normal">Melalui aplikasi ini, pengguna dapat:</span>
              </p>
              
              <ul className="text-xs leading-relaxed text-black mt-2 space-y-1">
                <li className="font-normal">• Menambahkan dan mengelola lahan sesuai kebutuhan.</li>
                <li className="font-normal">• Mengontrol sistem penyiraman dan pemupukan otomatis.</li>
                <li className="font-normal">• Memantau NPK (Nitrogen, Fosfor, Kalium) untuk kesuburan tanah.</li>
                <li className="font-normal">• Melakukan monitoring kondisi tanah seperti suhu, pH, dan kelembapan.</li>
                <li className="font-normal">• Memantau kondisi lingkungan, termasuk suhu, kelembapan udara, dan cuaca secara real time.</li>
              </ul>
              
              <p className="text-xs leading-relaxed text-black mt-4">
                <span className="font-normal">
                  Kami hadir untuk mendukung pertanian modern yang lebih efisien, ramah lingkungan, dan berkelanjutan.
                </span>
              </p>
              
              <p className="text-sm font-medium text-black mt-6">
                Crocodic Smart Farming<br />
                — Pertanian Cerdas, Panen Berkualitas
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}