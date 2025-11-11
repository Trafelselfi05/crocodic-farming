"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

export default function SensorPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "harian" | "mingguan" | "bulanan"
  >("harian");
  const [selectedLahan, setSelectedLahan] = useState("Semua Lahan");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // === Data lengkap untuk semua periode dan lahan ===
  const allData = {
    "Lahan 1": {
      harian: {
        nutrient: [
          { day: "Sen", nitrogen: 40, phospor: 25, kalium: 50 },
          { day: "Sel", nitrogen: 35, phospor: 22, kalium: 45 },
          { day: "Rab", nitrogen: 42, phospor: 27, kalium: 48 },
          { day: "Kam", nitrogen: 45, phospor: 30, kalium: 52 },
          { day: "Jum", nitrogen: 38, phospor: 20, kalium: 40 },
          { day: "Sab", nitrogen: 44, phospor: 28, kalium: 49 },
          { day: "Min", nitrogen: 41, phospor: 26, kalium: 47 },
        ],
        suhu: [
          { day: "Sen", suhu: 28 },
          { day: "Sel", suhu: 30 },
          { day: "Rab", suhu: 29 },
          { day: "Kam", suhu: 31 },
          { day: "Jum", suhu: 27 },
          { day: "Sab", suhu: 33 },
          { day: "Min", suhu: 30 },
        ],
      },
      mingguan: {
        nutrient: [
          { day: "Mgg 1", nitrogen: 42, phospor: 26, kalium: 48 },
          { day: "Mgg 2", nitrogen: 38, phospor: 24, kalium: 46 },
          { day: "Mgg 3", nitrogen: 44, phospor: 28, kalium: 50 },
          { day: "Mgg 4", nitrogen: 40, phospor: 25, kalium: 47 },
        ],
        suhu: [
          { day: "Mgg 1", suhu: 29 },
          { day: "Mgg 2", suhu: 28 },
          { day: "Mgg 3", suhu: 31 },
          { day: "Mgg 4", suhu: 30 },
        ],
      },
      bulanan: {
        nutrient: [
          { day: "Jan", nitrogen: 41, phospor: 25, kalium: 48 },
          { day: "Feb", nitrogen: 39, phospor: 24, kalium: 46 },
          { day: "Mar", nitrogen: 43, phospor: 27, kalium: 50 },
          { day: "Apr", nitrogen: 42, phospor: 26, kalium: 49 },
          { day: "Mei", nitrogen: 40, phospor: 25, kalium: 47 },
          { day: "Jun", nitrogen: 44, phospor: 28, kalium: 51 },
        ],
        suhu: [
          { day: "Jan", suhu: 29 },
          { day: "Feb", suhu: 28 },
          { day: "Mar", suhu: 30 },
          { day: "Apr", suhu: 31 },
          { day: "Mei", suhu: 29 },
          { day: "Jun", suhu: 32 },
        ],
      },
    },
    "Lahan 2": {
      harian: {
        nutrient: [
          { day: "Sen", nitrogen: 48, phospor: 20, kalium: 45 },
          { day: "Sel", nitrogen: 44, phospor: 22, kalium: 50 },
          { day: "Rab", nitrogen: 46, phospor: 25, kalium: 52 },
          { day: "Kam", nitrogen: 42, phospor: 28, kalium: 48 },
          { day: "Jum", nitrogen: 39, phospor: 21, kalium: 44 },
          { day: "Sab", nitrogen: 45, phospor: 26, kalium: 47 },
          { day: "Min", nitrogen: 43, phospor: 27, kalium: 49 },
        ],
        suhu: [
          { day: "Sen", suhu: 26 },
          { day: "Sel", suhu: 29 },
          { day: "Rab", suhu: 28 },
          { day: "Kam", suhu: 30 },
          { day: "Jum", suhu: 27 },
          { day: "Sab", suhu: 32 },
          { day: "Min", suhu: 31 },
        ],
      },
      mingguan: {
        nutrient: [
          { day: "Mgg 1", nitrogen: 45, phospor: 24, kalium: 47 },
          { day: "Mgg 2", nitrogen: 43, phospor: 23, kalium: 46 },
          { day: "Mgg 3", nitrogen: 46, phospor: 26, kalium: 49 },
          { day: "Mgg 4", nitrogen: 44, phospor: 25, kalium: 48 },
        ],
        suhu: [
          { day: "Mgg 1", suhu: 28 },
          { day: "Mgg 2", suhu: 29 },
          { day: "Mgg 3", suhu: 30 },
          { day: "Mgg 4", suhu: 29 },
        ],
      },
      bulanan: {
        nutrient: [
          { day: "Jan", nitrogen: 44, phospor: 23, kalium: 47 },
          { day: "Feb", nitrogen: 43, phospor: 22, kalium: 45 },
          { day: "Mar", nitrogen: 46, phospor: 25, kalium: 49 },
          { day: "Apr", nitrogen: 45, phospor: 24, kalium: 48 },
          { day: "Mei", nitrogen: 44, phospor: 23, kalium: 46 },
          { day: "Jun", nitrogen: 47, phospor: 26, kalium: 50 },
        ],
        suhu: [
          { day: "Jan", suhu: 28 },
          { day: "Feb", suhu: 27 },
          { day: "Mar", suhu: 29 },
          { day: "Apr", suhu: 30 },
          { day: "Mei", suhu: 28 },
          { day: "Jun", suhu: 31 },
        ],
      },
    },
    "Lahan 3": {
      harian: {
        nutrient: [
          { day: "Sen", nitrogen: 37, phospor: 23, kalium: 47 },
          { day: "Sel", nitrogen: 41, phospor: 26, kalium: 49 },
          { day: "Rab", nitrogen: 39, phospor: 24, kalium: 46 },
          { day: "Kam", nitrogen: 43, phospor: 28, kalium: 51 },
          { day: "Jum", nitrogen: 36, phospor: 22, kalium: 44 },
          { day: "Sab", nitrogen: 42, phospor: 27, kalium: 48 },
          { day: "Min", nitrogen: 40, phospor: 25, kalium: 47 },
        ],
        suhu: [
          { day: "Sen", suhu: 27 },
          { day: "Sel", suhu: 29 },
          { day: "Rab", suhu: 28 },
          { day: "Kam", suhu: 30 },
          { day: "Jum", suhu: 26 },
          { day: "Sab", suhu: 31 },
          { day: "Min", suhu: 29 },
        ],
      },
      mingguan: {
        nutrient: [
          { day: "Mgg 1", nitrogen: 40, phospor: 25, kalium: 47 },
          { day: "Mgg 2", nitrogen: 39, phospor: 24, kalium: 46 },
          { day: "Mgg 3", nitrogen: 42, phospor: 27, kalium: 49 },
          { day: "Mgg 4", nitrogen: 41, phospor: 26, kalium: 48 },
        ],
        suhu: [
          { day: "Mgg 1", suhu: 28 },
          { day: "Mgg 2", suhu: 27 },
          { day: "Mgg 3", suhu: 30 },
          { day: "Mgg 4", suhu: 29 },
        ],
      },
      bulanan: {
        nutrient: [
          { day: "Jan", nitrogen: 40, phospor: 24, kalium: 47 },
          { day: "Feb", nitrogen: 38, phospor: 23, kalium: 45 },
          { day: "Mar", nitrogen: 42, phospor: 26, kalium: 49 },
          { day: "Apr", nitrogen: 41, phospor: 25, kalium: 48 },
          { day: "Mei", nitrogen: 39, phospor: 24, kalium: 46 },
          { day: "Jun", nitrogen: 43, phospor: 27, kalium: 50 },
        ],
        suhu: [
          { day: "Jan", suhu: 28 },
          { day: "Feb", suhu: 27 },
          { day: "Mar", suhu: 29 },
          { day: "Apr", suhu: 30 },
          { day: "Mei", suhu: 28 },
          { day: "Jun", suhu: 31 },
        ],
      },
    },
  };

  // Generate data untuk Lahan 4-10 (menggunakan variasi dari Lahan 1-3)
  for (let i = 4; i <= 10; i++) {
    const baseLahan = allData[`Lahan ${((i - 1) % 3) + 1}` as keyof typeof allData];
    allData[`Lahan ${i}` as keyof typeof allData] = {
      harian: {
        nutrient: baseLahan.harian.nutrient.map(d => ({
          ...d,
          nitrogen: d.nitrogen + Math.floor(Math.random() * 6 - 3),
          phospor: d.phospor + Math.floor(Math.random() * 4 - 2),
          kalium: d.kalium + Math.floor(Math.random() * 6 - 3),
        })),
        suhu: baseLahan.harian.suhu.map(d => ({
          ...d,
          suhu: d.suhu + Math.floor(Math.random() * 4 - 2),
        })),
      },
      mingguan: {
        nutrient: baseLahan.mingguan.nutrient.map(d => ({
          ...d,
          nitrogen: d.nitrogen + Math.floor(Math.random() * 6 - 3),
          phospor: d.phospor + Math.floor(Math.random() * 4 - 2),
          kalium: d.kalium + Math.floor(Math.random() * 6 - 3),
        })),
        suhu: baseLahan.mingguan.suhu.map(d => ({
          ...d,
          suhu: d.suhu + Math.floor(Math.random() * 4 - 2),
        })),
      },
      bulanan: {
        nutrient: baseLahan.bulanan.nutrient.map(d => ({
          ...d,
          nitrogen: d.nitrogen + Math.floor(Math.random() * 6 - 3),
          phospor: d.phospor + Math.floor(Math.random() * 4 - 2),
          kalium: d.kalium + Math.floor(Math.random() * 6 - 3),
        })),
        suhu: baseLahan.bulanan.suhu.map(d => ({
          ...d,
          suhu: d.suhu + Math.floor(Math.random() * 4 - 2),
        })),
      },
    };
  }

  // Fungsi untuk menghitung rata-rata semua lahan
  const calculateAverageData = (period: "harian" | "mingguan" | "bulanan") => {
    const lahanKeys = Object.keys(allData).filter(key => key !== "Semua Lahan");
    const firstLahan = allData[lahanKeys[0] as keyof typeof allData][period];

    return {
      nutrient: firstLahan.nutrient.map((_, index) => {
        const dayName = firstLahan.nutrient[index].day;
        let totalN = 0, totalP = 0, totalK = 0;

        lahanKeys.forEach(lahan => {
          const data = allData[lahan as keyof typeof allData][period].nutrient[index];
          totalN += data.nitrogen;
          totalP += data.phospor;
          totalK += data.kalium;
        });

        return {
          day: dayName,
          nitrogen: Math.round(totalN / lahanKeys.length),
          phospor: Math.round(totalP / lahanKeys.length),
          kalium: Math.round(totalK / lahanKeys.length),
        };
      }),
      suhu: firstLahan.suhu.map((_, index) => {
        const dayName = firstLahan.suhu[index].day;
        let totalSuhu = 0;

        lahanKeys.forEach(lahan => {
          const data = allData[lahan as keyof typeof allData][period].suhu[index];
          totalSuhu += data.suhu;
        });

        return {
          day: dayName,
          suhu: Math.round(totalSuhu / lahanKeys.length),
        };
      }),
    };
  };

  const lahanList = [
    "Semua Lahan",
    ...Array.from({ length: 10 }, (_, i) => `Lahan ${i + 1}`),
  ];

  // Mendapatkan data berdasarkan filter
  const getFilteredData = () => {
    if (selectedLahan === "Semua Lahan") {
      return calculateAverageData(selectedPeriod);
    }
    return allData[selectedLahan as keyof typeof allData]?.[selectedPeriod] || calculateAverageData(selectedPeriod);
  };

  const selectedData = getFilteredData();
  const nutrientData = selectedData.nutrient;
  const temperatureData = selectedData.suhu;

  const periodButtons = ["harian", "mingguan", "bulanan"] as const;

  // Custom Tooltip untuk Suhu
  const CustomTooltipSuhu = ({ active, payload, coordinate }: any) => {
    if (active && payload && payload.length && coordinate) {
      return (
        <div
          className="flex flex-col items-center pointer-events-none"
          style={{
            position: 'absolute',
            left: `${coordinate.x}px`,
            top: `${coordinate.y - 55}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-[#1F4E20] text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg">
            {payload[0].value}°C
          </div>
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '10px solid #1F4E20',
              marginTop: '-1px'
            }}
          ></div>
        </div>
      );
    }
    return null;
  };

  // Custom Tooltip untuk NPK
  const CustomTooltipNPK = ({ active, payload, coordinate }: any) => {
    if (active && payload && payload.length && coordinate) {
      const nitrogenData = payload.find((p: any) => p.dataKey === "nitrogen");
      const phosporData = payload.find((p: any) => p.dataKey === "phospor");
      const kaliumData = payload.find((p: any) => p.dataKey === "kalium");

      return (
        <div
          className="flex flex-col gap-1 items-center pointer-events-none"
          style={{
            position: 'absolute',
            left: `${coordinate.x}px`,
            top: `${coordinate.y - 10}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {/* Kalium - paling atas */}
          {kaliumData && (
            <div className="flex flex-col items-center">
              <div className="bg-[#6691FF] text-white px-4 py-2 rounded-full text-base font-semibold shadow-lg whitespace-nowrap">
                {kaliumData.value} ppm
              </div>
            </div>
          )}

          {/* Nitrogen - tengah */}
          {nitrogenData && (
            <div className="flex flex-col items-center">
              <div className="bg-[#1F4E20] text-white px-4 py-2 rounded-full text-base font-semibold shadow-lg whitespace-nowrap">
                {nitrogenData.value} ppm
              </div>
            </div>
          )}

          {/* Phospor - paling bawah dengan panah */}
          {phosporData && (
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB310] text-white px-4 py-2 rounded-full text-base font-semibold shadow-lg whitespace-nowrap">
                {phosporData.value} ppm
              </div>
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '12px solid #FFB310',
                  marginTop: '-1px'
                }}
              ></div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-[#F4FAF4] px-6 pb-6 space-y-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between relative pt-4">
        <h1 className="text-2xl font-bold text-[#1F4E20]">
          Statistic {selectedLahan}
        </h1>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:opacity-80 transition outline-none focus:outline-none focus-visible:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="16.5" transform="matrix(-1 0 0 1 34 0)" fill="#F4FAF4" stroke="#1F4E20" />
              <path d="M16 10C15.3793 9.99968 14.7739 10.1919 14.267 10.5501C13.7602 10.9083 13.3769 11.4148 13.17 12H10V14H13.17C13.3766 14.5855 13.7597 15.0926 14.2666 15.4512C14.7735 15.8099 15.3791 16.0025 16 16.0025C16.6209 16.0025 17.2265 15.8099 17.7334 15.4512C18.2403 15.0926 18.6234 14.5855 18.83 14H26V12H18.83C18.6231 11.4148 18.2398 10.9083 17.733 10.5501C17.2261 10.1919 16.6207 9.99968 16 10ZM15 13C15 12.7348 15.1054 12.4804 15.2929 12.2929C15.4804 12.1054 15.7348 12 16 12C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13C17 13.2652 16.8946 13.5196 16.7071 13.7071C16.5196 13.8946 16.2652 14 16 14C15.7348 14 15.4804 13.8946 15.2929 13.7071C15.1054 13.5196 15 13.2652 15 13ZM20 18C19.3793 17.9997 18.7739 18.1919 18.267 18.5501C17.7602 18.9083 17.3769 19.4148 17.17 20H10V22H17.17C17.3766 22.5855 17.7597 23.0926 18.2666 23.4512C18.7735 23.8099 19.3791 24.0025 20 24.0025C20.6209 24.0025 21.2265 23.8099 21.7334 23.4512C22.2403 23.0926 22.6234 22.5855 22.83 22H26V20H22.83C22.6231 19.4148 22.2398 18.9083 21.733 18.5501C21.2261 18.1919 20.6207 17.9997 20 18ZM19 21C19 20.7348 19.1054 20.4804 19.2929 20.2929C19.4804 20.1054 19.7348 20 20 20C20.2652 20 20.5196 20.1054 20.7071 20.2929C20.8946 20.4804 21 20.7348 21 21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22C19.7348 22 19.4804 21.8946 19.2929 21.7071C19.1054 21.5196 19 21.2652 19 21Z" fill="#1F4E20" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#1F4E20] border border-[#1F4E20] rounded-lg shadow-md z-10 w-40 max-h-60 overflow-y-auto">
              {lahanList.map((lahan) => (
                <button
                  key={lahan}
                  onClick={() => {
                    setSelectedLahan(lahan);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-white/10 text-sm outline-none focus:outline-none focus-visible:outline-none ${selectedLahan === lahan
                      ? "bg-white/20 font-semibold text-white"
                      : "text-white"
                    }`}
                >
                  {lahan}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tombol Harian / Mingguan / Bulanan */}
      <div className="flex w-full bg-white rounded-xl border border-[#1F4E20] overflow-hidden shadow-sm">
        {periodButtons.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`w-1/3 py-2.5 capitalize font-medium transition text-sm outline-none focus:outline-none focus-visible:outline-none ${selectedPeriod === period
                ? "bg-[#1F4E20] text-white"
                : "bg-[#ffffff] text-[#1F4E20] hover:bg-[#7FD083]/20"
              }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Grafik Nutrisi */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-[#1F4E20] mb-4">
          Kandungan Nutrisi
        </h2>

        <div className="flex justify-end mb-4">
          <img
            src="/asset/statistik/npk.svg"
            alt="NPK Legend"
            className="h-12"
          />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={nutrientData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EEEEEE" />
            <XAxis
              dataKey="day"
              tick={{ fill: '#1F4E20', fontSize: 11 }}
              axisLine={{ stroke: '#EEEEEE' }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 60]}
              ticks={[10, 20, 30, 40, 50]}
              tick={{ fill: '#1F4E20', fontSize: 11 }}
              axisLine={{ stroke: '#EEEEEE' }}
              tickLine={false}
              label={{
                value: "Tingkat NPK (ppm)",
                angle: -90,
                position: "insideLeft",
                style: {
                  textAnchor: "middle",
                  fill: "#1F4E20",
                  fontWeight: 600,
                  fontSize: 11,
                },
              }}
            />
            <Tooltip
              content={<CustomTooltipNPK />}
              cursor={false}
              wrapperStyle={{ outline: 'none', pointerEvents: 'none' }}
              allowEscapeViewBox={{ x: true, y: true }}
              isAnimationActive={false}
              trigger="hover"
              offset={0}
            />
            <Line
              type="linear"
              dataKey="nitrogen"
              stroke="#1F4E20"
              strokeWidth={2}
              dot={{ fill: '#1F4E20', stroke: '#fff', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#1F4E20', stroke: '#fff', strokeWidth: 2 }}
              name="Nitrogen"
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="phospor"
              stroke="#FFB310"
              strokeWidth={2}
              dot={{ fill: '#FFB310', stroke: '#fff', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#FFB310', stroke: '#fff', strokeWidth: 2 }}
              name="Phospor"
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="kalium"
              stroke="#6691FF"
              strokeWidth={2}
              dot={{ fill: '#6691FF', stroke: '#fff', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#6691FF', stroke: '#fff', strokeWidth: 2 }}
              name="Kalium"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-4">
          <p className="text-base font-bold text-black mb-2 text-center">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-sm font-semibold text-[#1F4E20] mb-2">Zona ideal untuk :</p>
          <ul className="text-sm text-[#1F4E20] space-y-1">
            <li>• Nitrogen (20–50 ppm)</li>
            <li>• Phospor (15–30 ppm)</li>
            <li>• Kalium (30–60 ppm)</li>
          </ul>
        </div>
      </div>

      {/* Grafik Suhu Tanah */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-[#1F4E20] mb-4">
          Suhu Tanah
        </h2>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={temperatureData}
              margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
            >
              <defs>
                <linearGradient id="colorSuhu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7FD083" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#7FD083" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="0"
                stroke="#EEEEEE"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                tick={{ fill: '#1F4E20', fontSize: 11 }}
                axisLine={{ stroke: '#EEEEEE' }}
                tickLine={false}
              />

              <YAxis
                domain={[0, 50]}
                ticks={[10, 20, 30, 40, 50]}
                tick={{ fill: '#1F4E20', fontSize: 11 }}
                axisLine={{ stroke: '#EEEEEE' }}
                tickLine={false}
                label={{
                  value: "Jumlah Suhu (°C)",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fill: "#1F4E20",
                    fontWeight: 600,
                    fontSize: 11,
                  },
                }}
              />

              <Tooltip
                content={<CustomTooltipSuhu />}
                cursor={false}
                wrapperStyle={{ outline: 'none', pointerEvents: 'none' }}
                allowEscapeViewBox={{ x: true, y: true }}
                isAnimationActive={false}
                trigger="hover"
                offset={0}
              />

              <Area
                type="linear"
                dataKey="suhu"
                stroke="#7FD083"
                strokeWidth={2}
                fill="url(#colorSuhu)"
                dot={{
                  fill: '#1F4E20',
                  stroke: '#fff',
                  strokeWidth: 2,
                  r: 6
                }}
                activeDot={{
                  r: 8,
                  fill: '#1F4E20',
                  stroke: '#fff',
                  strokeWidth: 2
                }}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4">
          <p className="text-xs text-black font-semibold mb-1">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-xs text-black mb-1">
            Rata-rata suhu tanah {selectedPeriod === 'harian' ? 'hari ini' : selectedPeriod === 'mingguan' ? 'minggu ini' : 'bulan ini'} :
          </p>
          <p className="text-2xl text-[#1F4E20] font-bold">
            {Math.round(temperatureData.reduce((acc, curr) => acc + curr.suhu, 0) / temperatureData.length)}°C
          </p>
        </div>
      </div>
    </div>
  );
}