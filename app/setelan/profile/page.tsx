"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PROFILE_ITEMS = [
  { 
    icon: "/asset/setelan/profile2.svg", 
    label: "Nama", 
    value: "Selfi",
  },
  { 
    icon: "/asset/setelan/tlp.svg", 
    label: "Nomor Telepon", 
    value: "+62 812 3456 7890",
  },
  { 
    icon: "/asset/setelan/email-icon.svg", 
    label: "Email", 
    value: "aziz@example.com",
  },
  { 
    icon: "/asset/setelan/lock-icon.svg", 
    label: "Kata Sandi", 
    value: "********",
  },
];

export default function ProfilePage() {
  const router = useRouter();

  return (
    <main className="inline-flex flex-col min-h-[670px] items-center gap-[30px] relative">
      {/* Header */}
      <header className="flex items-center justify-center gap-5 relative self-stretch w-full">
        <button
          onClick={() => router.back()}
          type="button"
          aria-label="Kembali ke halaman sebelumnya"
          className="relative w-10 h-10 rotate-180 bg-transparent border-none p-0 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <Image
            src="/asset/setelan/back.svg"
            alt=""
            width={24}
            height={21}
            className="absolute w-[60.42%] h-[52.08%] top-[23.96%] left-[19.79%] rotate-180"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              console.error('Failed to load back.svg');
            }}
          />
        </button>

        <div className="flex flex-col items-start gap-2.5 relative flex-1">
          <h1 className="relative w-fit -mt-[6.5px] -mb-[4.5px] font-['Poppins'] font-semibold text-black text-2xl tracking-normal leading-normal">
            Profile
          </h1>
        </div>
      </header>

      {/* Avatar Section */}
      <section className="flex flex-col w-44 items-end relative">
        <Image
          src="/asset/setelan/avatar.svg"
          alt="Foto profil"
          width={176}
          height={176}
          className="relative self-stretch w-full h-44 object-cover rounded-full"
          onError={(e) => handleImageError(e, FALLBACK_IMAGES.avatar, 'Failed to load avatar.svg')}
        />
        
        <button
          type="button"
          aria-label="Ubah foto profil"
          className="relative w-[47px] h-[34px] -mt-[42px] bg-transparent border-none p-0 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <Image
            src="/asset/setelan/camera-icon.svg"
            alt=""
            width={28}
            height={26}
            className="object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              console.error('Failed to load camera-icon.svg');
            }}
          />
        </button>
      </section>

      {/* Profile Items */}
      <section className="flex flex-col w-[344px] items-start gap-[15px] relative">
        {PROFILE_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col h-[84px] items-start gap-2.5 p-[15px_11px] relative self-stretch w-full bg-white rounded-[25px] border border-[#AAAAAA] hover:shadow-md transition-shadow"
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
                    {item.value}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label={`Edit ${item.label.toLowerCase()}`}
                className="relative w-[21.75px] h-[21.75px] bg-transparent border-none p-0 cursor-pointer hover:opacity-70 transition-opacity"
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
    </main>
  );
}