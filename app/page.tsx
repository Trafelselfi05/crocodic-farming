"use client";

import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <section
      className="flex flex-col w-[373px] items-center gap-5 mx-auto pt-5 pb-5 overflow-hidden overflow-y-scroll"
      style={{ maxHeight: "calc(100vh - 101px)" }}
      aria-label="Main content"
    >
      {/* Header */}
      <div className="relative w-[361px] h-5">
        <div className="flex w-[295px] h-[19px] items-center gap-2.5 px-[5px] py-0 relative">
          <svg
            className="relative w-[19px] h-[19px]"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="19" height="19" rx="4" fill="#1F4E20" />
            <path
              d="M9.5 5V14M6 9.5H13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="relative flex items-center justify-center w-[283px] h-[19px] mt-[-1.00px] mr-[-27.00px] font-['Poppins',Helvetica] font-medium text-hijau-tua text-sm tracking-[0] leading-[normal]">
            Pertanian Cerdas, Panen Berkualitas
          </p>
        </div>
      </div>

      {/* User Profile & Weather */}
      <div className="inline-flex items-start gap-[23px] flex-col relative flex-[0_0_auto]">
        <div className="flex items-center gap-24 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-[53px] h-[53px] rounded-full bg-hijau-muda overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26.5" cy="26.5" r="26.5" fill="#7FD083" />
                <circle cx="26.5" cy="20" r="8" fill="#1F4E20" />
                <path
                  d="M40 45C40 37.268 34.18 31 27 31H26C18.82 31 13 37.268 13 45"
                  fill="#1F4E20"
                />
              </svg>
            </div>
            <div className="flex-col w-[141px] items-start flex relative">
              <div className="inline-flex h-[18px] items-center justify-center gap-2.5 p-2.5 relative">
                <p className="relative w-fit mt-[-12.50px] mb-[-10.50px] font-poppins-medium-14 font-[number:var(--poppins-medium-14-font-weight)] text-hijau-tua text-[length:var(--poppins-medium-14-font-size)] tracking-[var(--poppins-medium-14-letter-spacing)] leading-[var(--poppins-medium-14-line-height)] [font-style:var(--poppins-medium-14-font-style)]">
                  Good Morning
                </p>
              </div>
              <div className="flex h-[25px] items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full">
                <p className="relative w-[122px] mt-[-10.50px] mb-[-8.50px] ml-[-0.50px] mr-[-0.50px] font-['Poppins',Helvetica] font-semibold text-hijau-tua text-base tracking-[0] leading-[normal]">
                  Dian
                </p>
              </div>
            </div>
          </div>
          <button type="button" aria-label="Notifications">
            <svg
              className="relative w-[53px] h-[53px]"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26.5" r="26.5" fill="white" />
              <path
                d="M26.5 40C28.433 40 30 38.433 30 36.5H23C23 38.433 24.567 40 26.5 40ZM37 30.5V23C37 18.365 34.717 14.463 30.5 13.438V12.5C30.5 11.119 29.381 10 26.5 10C23.619 10 22.5 11.119 22.5 12.5V13.438C18.283 14.463 16 18.365 16 23V30.5L13 33.5V35H40V33.5L37 30.5Z"
                fill="#1F4E20"
              />
              <circle cx="38" cy="15" r="7" fill="#FF3B30" />
            </svg>
          </button>
        </div>

        {/* Weather Card */}
        <article
          className="flex w-[343px] items-center gap-2.5 px-0 py-3.5 bg-white rounded-[25px] flex-col relative flex-[0_0_auto]"
          aria-label="Weather information"
        >
          <Link
            href="#"
            className="flex w-[333px] items-center gap-[5px] relative flex-[0_0_auto]"
          >
            <div className="relative w-[72px] h-[53px]">
              <svg
                className="absolute top-2 right-0.5 w-[68px] h-[38px]"
                viewBox="0 0 68 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="19" cy="19" r="12" fill="#FDB813" />
                <path
                  d="M19 7V4M19 34V31M31.66 7.34L33.78 5.22M4.22 33.78L6.34 31.66M36 19H39M0 19H3M31.66 30.66L33.78 32.78M4.22 4.22L6.34 6.34"
                  stroke="#FDB813"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="flex flex-col w-[171px] items-start gap-[3px] relative">
                <p className="relative self-stretch h-[21px] mt-[-1.00px] font-poppins-medium-14 font-[number:var(--poppins-medium-14-font-weight)] text-hijau-tua text-[length:var(--poppins-medium-14-font-size)] tracking-[var(--poppins-medium-14-letter-spacing)] leading-[var(--poppins-medium-14-line-height)] [font-style:var(--poppins-medium-14-font-style)]">
                  Semarang, Indonesia
                </p>
                <p className="relative self-stretch h-[21px] font-['Poppins',Helvetica] font-semibold text-hijau-tua text-base tracking-[0] leading-[normal]">
                  Sunny
                </p>
              </div>
              <p className="relative w-16 h-[30px] ml-[-13px] font-poppins-bold-24 font-[number:var(--poppins-bold-24-font-weight)] text-hijau-tua text-[length:var(--poppins-bold-24-font-size)] tracking-[var(--poppins-bold-24-letter-spacing)] leading-[var(--poppins-bold-24-line-height)] [font-style:var(--poppins-bold-24-font-style)]">
                23°C
              </p>
            </div>
            <svg
              className="mr-[-1.00px] relative w-[30px] h-[30px]"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 22.5L18.75 15L11.25 7.5"
                stroke="#1F4E20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </article>
      </div>

      {/* Lahan Section */}
      <section
        className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]"
        aria-labelledby="lahan-heading"
      >
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="flex w-[343px] items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="flex h-[25px] items-center gap-2.5 relative flex-1 grow">
              <h2
                id="lahan-heading"
                className="relative w-fit mt-[-0.50px] font-semibold text-hijau-tua text-base font-['Poppins',Helvetica] tracking-[0] leading-[normal]"
              >
                Lahan
              </h2>
            </div>
          </div>
          <div className="flex w-[343px] items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="flex h-[25px] items-center gap-2.5 relative flex-1 grow">
              <p className="relative w-fit font-['Poppins',Helvetica] font-medium text-hijau-tua text-sm tracking-[0] leading-[normal]">
                Jumlah : 12 lahan
              </p>
            </div>
            <Link href="#" className="flex w-[118px] items-center relative">
              <div className="w-[99px] h-[25px] items-center gap-2.5 flex relative">
                <span className="relative w-fit font-['Poppins',Helvetica] font-medium text-hijau-tua text-sm tracking-[0] leading-[normal]">
                  Semua Lahan
                </span>
              </div>
              <svg
                className="relative w-[18px] h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="#1F4E20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Lahan Cards */}
        <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
          <div className="flex w-[343px] items-start gap-2.5 relative flex-[0_0_auto]">
            {/* Lahan 1 */}
            <article
              className="flex flex-col w-[167px] h-28 items-center justify-end relative bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]"
              aria-label="Lahan 1"
            >
              <div className="flex w-[185px] h-[33px] items-center justify-center gap-[60px] relative ml-[-9.00px] mr-[-9.00px]">
                <div className="flex w-[53px] items-start relative mt-[-4.00px] mb-[-4.00px]">
                  <div className="flex items-center justify-center gap-2.5 p-2.5 relative flex-1 grow">
                    <h3 className="relative w-fit mt-[-1.00px] ml-[-10.00px] mr-[-10.00px] font-[number:var(--poppins-semibold-14-font-weight)] text-[#000000] text-[length:var(--poppins-semibold-14-font-size)] font-poppins-semibold-14 tracking-[var(--poppins-semibold-14-letter-spacing)] leading-[var(--poppins-semibold-14-line-height)] [font-style:var(--poppins-semibold-14-font-style)]">
                      Lahan 1
                    </h3>
                  </div>
                </div>
                <button type="button" aria-label="More options for Lahan 1">
                  <svg
                    className="relative w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="6" r="2" fill="#000000" />
                    <circle cx="12" cy="12" r="2" fill="#000000" />
                    <circle cx="12" cy="18" r="2" fill="#000000" />
                  </svg>
                </button>
              </div>
              <div className="inline-flex flex-col items-center gap-[9px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[138px] items-start justify-center relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-[#000000] text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                      Luas: 2 Ha
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-[#000000] text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                      Tanaman: Padi
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="flex w-[167px] h-[29px] items-center gap-[60px] relative bg-hijau-muda rounded-[0px_0px_10px_10px]"
                >
                  <div className="flex w-[70px] h-[53px] items-center justify-center relative mt-[-12.00px] mb-[-12.00px] rounded-[10px]">
                    <span className="relative w-fit font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-putih text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                      Detail
                    </span>
                  </div>
                  <svg
                    className="relative w-[18px] h-[18px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 13.5L11.25 9L6.75 4.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Lahan 2 */}
            <article
              className="flex flex-col w-[167px] h-28 items-center justify-end relative mr-[-1.00px] bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]"
              aria-label="Lahan 2"
            >
              <div className="flex w-[185px] h-[33px] items-center justify-center gap-[60px] relative ml-[-9.00px] mr-[-9.00px]">
                <div className="flex w-[53px] items-start relative mt-[-4.00px] mb-[-4.00px]">
                  <div className="flex items-center justify-center gap-2.5 p-2.5 relative flex-1 grow">
                    <h3 className="relative w-fit mt-[-1.00px] ml-[-11.50px] mr-[-11.50px] font-[number:var(--poppins-semibold-14-font-weight)] text-[#000000] text-[length:var(--poppins-semibold-14-font-size)] font-poppins-semibold-14 tracking-[var(--poppins-semibold-14-letter-spacing)] leading-[var(--poppins-semibold-14-line-height)] [font-style:var(--poppins-semibold-14-font-style)]">
                      Lahan 2
                    </h3>
                  </div>
                </div>
                <button type="button" aria-label="More options for Lahan 2">
                  <svg
                    className="relative w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="6" r="2" fill="#000000" />
                    <circle cx="12" cy="12" r="2" fill="#000000" />
                    <circle cx="12" cy="18" r="2" fill="#000000" />
                  </svg>
                </button>
              </div>
              <div className="inline-flex flex-col items-center gap-[9px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[138px] items-start justify-center relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-[#000000] text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                      Luas: 4 Ha
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-[#000000] text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                      Tanaman: Jagung
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="flex w-[167px] h-[29px] items-center gap-[60px] relative bg-hijau-muda rounded-[0px_0px_10px_10px]"
                >
                  <div className="flex w-[70px] h-[53px] items-center justify-center relative mt-[-12.00px] mb-[-12.00px] rounded-[10px]">
                    <span className="relative w-fit font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-putih text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                      Detail
                    </span>
                  </div>
                  <svg
                    className="relative w-[18px] h-[18px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 13.5L11.25 9L6.75 4.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Lahan Detail Card */}
      <article
        className="flex flex-col w-[344px] items-center gap-2.5 relative bg-putih rounded-[10px] border border-solid border-[#1f4e20]"
        aria-labelledby="lahan-detail-heading"
      >
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[34px] items-start gap-2.5 p-2.5 relative self-stretch w-full">
            <h2
              id="lahan-detail-heading"
              className="relative w-fit mt-[-1.00px] mb-[-9.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-[#000000] text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]"
            >
              Lahan 1
            </h2>
          </div>
        </div>

        {/* Toggle Switches */}
        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[155px] h-[54px] items-center gap-2 relative bg-hijau-paling-muda rounded-[10px] border-[0.1px] border-solid border-[#1f4e20]">
            <div className="flex w-[110px] justify-center gap-[5px] items-center relative">
              <svg
                className="relative w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2V4M10 16V18M4.22 4.22L5.64 5.64M14.36 14.36L15.78 15.78M2 10H4M16 10H18M4.22 15.78L5.64 14.36M14.36 5.64L15.78 4.22"
                  stroke="#1F4E20"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 6C10 8 8 10 10 12C12 10 10 8 10 6Z"
                  fill="#4A90E2"
                  stroke="#4A90E2"
                  strokeWidth="1.5"
                />
              </svg>
              <label className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-[#000000] text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                  Penyiraman <br />
                  Otomatis
                </span>
              </label>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked="true"
              aria-label="Toggle penyiraman otomatis"
            >
              <svg
                className="relative w-[31px] h-[31px]"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="10"
                  width="29"
                  height="11"
                  rx="5.5"
                  fill="#7FD083"
                />
                <circle cx="21" cy="15.5" r="6.5" fill="white" />
              </svg>
            </button>
          </div>
          <div className="flex w-[155px] h-[54px] items-center gap-[15px] relative bg-hijau-paling-muda rounded-[10px] border-[0.1px] border-solid border-[#1f4e20]">
            <div className="inline-flex gap-[5px] flex-[0_0_auto] items-center relative">
              <svg
                className="relative w-[26px] h-[26px]"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="4"
                  width="14"
                  height="18"
                  rx="2"
                  stroke="#1F4E20"
                  strokeWidth="2"
                />
                <path
                  d="M10 10H16M10 14H16M10 18H14"
                  stroke="#1F4E20"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <label className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-reguler-12 font-[number:var(--poppins-reguler-12-font-weight)] text-[#000000] text-[length:var(--poppins-reguler-12-font-size)] tracking-[var(--poppins-reguler-12-letter-spacing)] leading-[var(--poppins-reguler-12-line-height)] [font-style:var(--poppins-reguler-12-font-style)]">
                  Pemupukan
                  <br />
                  Otomatis
                </span>
              </label>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked="false"
              aria-label="Toggle pemupukan otomatis"
            >
              <svg
                className="relative w-[31px] h-[31px]"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="10"
                  width="29"
                  height="11"
                  rx="5.5"
                  fill="#E0E0E0"
                />
                <circle cx="10" cy="15.5" r="6.5" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sensor Data */}
        <div className="flex flex-col w-[321px] items-center gap-2.5 relative flex-[0_0_auto]">
          {/* NPK */}
          <div className="flex h-[73px] items-center justify-center gap-[30px] relative self-stretch w-full bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <svg
                className="relative w-[35px] h-[35px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="8"
                  width="19"
                  height="19"
                  rx="2"
                  fill="#8B4513"
                />
                <text
                  x="17.5"
                  y="20"
                  fontSize="10"
                  fill="white"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  NPK
                </text>
              </svg>
              <div className="flex flex-col w-[138px] items-start justify-center relative">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                    NPK
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                  50ppm
                </span>
              </div>
            </div>
          </div>

          {/* Suhu Tanah */}
          <div className="flex h-[73px] items-center justify-center gap-[50px] relative self-stretch w-full bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <svg
                className="relative w-[35px] h-[35px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="14"
                  y="5"
                  width="7"
                  height="18"
                  rx="3.5"
                  fill="#FF6B6B"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="26" r="5" fill="#FF6B6B" />
                <line
                  x1="17.5"
                  y1="10"
                  x2="17.5"
                  y2="22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col w-[138px] items-start justify-center relative">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                    Suhu Tanah
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                  25°C
                </span>
              </div>
            </div>
          </div>

          {/* pH Tanah */}
          <div className="flex h-[73px] items-center justify-center gap-[65px] relative self-stretch w-full bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <svg
                className="relative w-[35px] h-[35px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 7L14 15H21L17.5 28L21 20H14L17.5 7Z"
                  fill="#4ECDC4"
                  stroke="#4ECDC4"
                  strokeWidth="1.5"
                />
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  stroke="#4ECDC4"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="flex flex-col w-[138px] items-start justify-center relative">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                    pH Tanah
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                  7.5
                </span>
              </div>
            </div>
          </div>

          {/* Kelembaban Tanah */}
          <div className="flex h-[73px] items-center justify-center gap-[65px] relative self-stretch w-full bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <svg
                className="relative w-[35px] h-[35px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 6C17.5 6 10 14 10 20C10 24.418 13.582 28 17.5 28C21.418 28 25 24.418 25 20C25 14 17.5 6 17.5 6Z"
                  fill="#4A90E2"
                  stroke="#4A90E2"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex flex-col w-[138px] items-start justify-center relative">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]">
                  <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                    Kelembaban Tanah
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                  5%
                </span>
              </div>
            </div>
          </div>

          {/* Suhu Lingkungan */}
          <div className="flex h-[73px] items-center justify-center gap-[55px] relative self-stretch w-full bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20]">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <svg
                className="relative w-[35px] h-[35px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="12"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  fill="none"
                />
                <text
                  x="17.5"
                  y="21"
                  fontSize="14"
                  fill="#FF6B6B"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  °C
                </text>
              </svg>
              <div className="flex flex-col w-[138px] items-start justify-center relative">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-4.00px]">
                  <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                    Suhu Lingkungan
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                  30°C
                </span>
              </div>
            </div>
          </div>

          {/* Kelembaban Lingkungan */}
          <div className="flex h-[95px] justify-center gap-[55px] self-stretch w-full bg-putih rounded-[10px] border-[0.5px] border-solid border-[#1f4e20] items-center relative">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <svg
                className="relative w-[35px] h-[35px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 6C17.5 6 10 14 10 20C10 24.418 13.582 28 17.5 28C21.418 28 25 24.418 25 20C25 14 17.5 6 17.5 6Z"
                  fill="#4A90E2"
                  stroke="#4A90E2"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex flex-col w-[138px] items-start justify-center relative">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                    Kelembaban <br />
                    Lingkungan
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-hijau-tua text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
                  25°C
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Button */}
        <Link
          href="#"
          className="flex w-[321px] items-center justify-center gap-[100px] relative flex-[0_0_auto] bg-hijau-tua rounded-[10px]"
        >
          <div className="flex w-36 h-[53px] items-center justify-center relative rounded-[10px]">
            <span className="relative w-fit ml-[-0.50px] mr-[-0.50px] font-poppins-semibold-16 font-[number:var(--poppins-semibold-16-font-weight)] text-putih text-[length:var(--poppins-semibold-16-font-size)] tracking-[var(--poppins-semibold-16-letter-spacing)] leading-[var(--poppins-semibold-16-line-height)] [font-style:var(--poppins-semibold-16-font-style)]">
              Lihat Detail Lahan
            </span>
          </div>
          <svg
            className="relative w-[30px] h-[30px]"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 22.5L18.75 15L11.25 7.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </article>
    </section>
  );
}