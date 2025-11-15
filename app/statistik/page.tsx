"use client";

import { useState, useEffect } from "react";
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
  BarChart,
  Bar,
} from "recharts";

// Data statis yang lengkap dan konsisten untuk semua grafik
const generateCompleteData = () => {
  const baseHarian = {
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
    ph: [
      { day: "Sen", ph: 6.5 },
      { day: "Sel", ph: 6.8 },
      { day: "Rab", ph: 6.3 },
      { day: "Kam", ph: 6.9 },
      { day: "Jum", ph: 6.6 },
      { day: "Sab", ph: 6.7 },
      { day: "Min", ph: 6.4 },
    ],
    kelembapanTanah: [
      { day: "Sen", kelembapan: 42 },
      { day: "Sel", kelembapan: 45 },
      { day: "Rab", kelembapan: 38 },
      { day: "Kam", kelembapan: 47 },
      { day: "Jum", kelembapan: 35 },
      { day: "Sab", kelembapan: 40 },
      { day: "Min", kelembapan: 43 },
    ],
    suhuLingkungan: [
      { day: "Sen", suhu: 26 },
      { day: "Sel", suhu: 28 },
      { day: "Rab", suhu: 27 },
      { day: "Kam", suhu: 29 },
      { day: "Jum", suhu: 25 },
      { day: "Sab", suhu: 30 },
      { day: "Min", suhu: 28 },
    ],
    kelembapanLingkungan: [
      { day: "Sen", kelembapan: 65 },
      { day: "Sel", kelembapan: 68 },
      { day: "Rab", kelembapan: 62 },
      { day: "Kam", kelembapan: 70 },
      { day: "Jum", kelembapan: 60 },
      { day: "Sab", kelembapan: 72 },
      { day: "Min", kelembapan: 66 },
    ],
  };

  const baseMingguan = {
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
    ph: [
      { day: "Mgg 1", ph: 6.6 },
      { day: "Mgg 2", ph: 6.4 },
      { day: "Mgg 3", ph: 6.8 },
      { day: "Mgg 4", ph: 6.5 },
    ],
    kelembapanTanah: [
      { day: "Mgg 1", kelembapan: 43 },
      { day: "Mgg 2", kelembapan: 40 },
      { day: "Mgg 3", kelembapan: 45 },
      { day: "Mgg 4", kelembapan: 42 },
    ],
    suhuLingkungan: [
      { day: "Mgg 1", suhu: 27 },
      { day: "Mgg 2", suhu: 26 },
      { day: "Mgg 3", suhu: 29 },
      { day: "Mgg 4", suhu: 28 },
    ],
    kelembapanLingkungan: [
      { day: "Mgg 1", kelembapan: 66 },
      { day: "Mgg 2", kelembapan: 64 },
      { day: "Mgg 3", kelembapan: 68 },
      { day: "Mgg 4", kelembapan: 65 },
    ],
  };

  const baseBulanan = {
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
    ph: [
      { day: "Jan", ph: 6.5 },
      { day: "Feb", ph: 6.4 },
      { day: "Mar", ph: 6.7 },
      { day: "Apr", ph: 6.6 },
      { day: "Mei", ph: 6.5 },
      { day: "Jun", ph: 6.8 },
    ],
    kelembapanTanah: [
      { day: "Jan", kelembapan: 42 },
      { day: "Feb", kelembapan: 40 },
      { day: "Mar", kelembapan: 44 },
      { day: "Apr", kelembapan: 43 },
      { day: "Mei", kelembapan: 41 },
      { day: "Jun", kelembapan: 45 },
    ],
    suhuLingkungan: [
      { day: "Jan", suhu: 28 },
      { day: "Feb", suhu: 27 },
      { day: "Mar", suhu: 29 },
      { day: "Apr", suhu: 30 },
      { day: "Mei", suhu: 28 },
      { day: "Jun", suhu: 31 },
    ],
    kelembapanLingkungan: [
      { day: "Jan", kelembapan: 65 },
      { day: "Feb", kelembapan: 63 },
      { day: "Mar", kelembapan: 67 },
      { day: "Apr", kelembapan: 66 },
      { day: "Mei", kelembapan: 64 },
      { day: "Jun", kelembapan: 68 },
    ],
  };

  const allData: any = {};

  // Generate data untuk semua lahan (1-10)
  for (let i = 1; i <= 10; i++) {
    allData[`Lahan ${i}`] = {
      harian: JSON.parse(JSON.stringify(baseHarian)),
      mingguan: JSON.parse(JSON.stringify(baseMingguan)),
      bulanan: JSON.parse(JSON.stringify(baseBulanan)),
    };

    // Tambahkan variasi untuk membuat data setiap lahan berbeda
    if (i > 1) {
      const variation = (i - 1) * 0.8;

      // Apply variation to all data types
      ['harian', 'mingguan', 'bulanan'].forEach(period => {
        ['nutrient', 'suhu', 'ph', 'kelembapanTanah', 'suhuLingkungan', 'kelembapanLingkungan'].forEach(dataType => {
          allData[`Lahan ${i}`][period][dataType] = allData[`Lahan ${i}`][period][dataType].map((item: any) => {
            const newItem = { ...item };

            if (dataType === 'nutrient') {
              newItem.nitrogen = Math.max(20, Math.min(55, Math.round(item.nitrogen + (Math.sin(i) * 4))));
              newItem.phospor = Math.max(15, Math.min(35, Math.round(item.phospor + (Math.cos(i) * 3))));
              newItem.kalium = Math.max(30, Math.min(65, Math.round(item.kalium + (Math.sin(i * 1.5) * 5))));
            } else if (dataType === 'suhu' || dataType === 'suhuLingkungan') {
              newItem.suhu = Math.max(20, Math.min(40, Math.round(item.suhu + (Math.sin(i) * 3))));
            } else if (dataType === 'ph') {
              newItem.ph = Math.max(5.5, Math.min(7.5, Number((item.ph + (Math.cos(i) * 0.3)).toFixed(1))));
            } else if (dataType.includes('kelembapan')) {
              newItem.kelembapan = Math.max(30, Math.min(80, Math.round(item.kelembapan + (Math.sin(i) * 8))));
            }

            return newItem;
          });
        });
      });
    }
  }

  return allData;
};

const allData = generateCompleteData();

export default function SensorPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "harian" | "mingguan" | "bulanan"
  >("harian");
  const [selectedLahan, setSelectedLahan] = useState("Semua Lahan");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fungsi untuk menghitung rata-rata semua lahan dengan error handling
  const calculateAverageData = (period: "harian" | "mingguan" | "bulanan") => {
    try {
      const lahanKeys = Object.keys(allData).filter(key => key !== "Semua Lahan");

      if (lahanKeys.length === 0) {
        return getEmptyData();
      }

      const firstLahan = allData[lahanKeys[0]][period];

      if (!firstLahan) {
        return getEmptyData();
      }

      // Helper function untuk menghitung rata-rata array data
      const calculateAverageForType = (dataType: string) => {
        return firstLahan[dataType]?.map((_: any, index: number) => {
          const dayName = firstLahan[dataType][index]?.day || `Day ${index + 1}`;
          let total = 0;
          let count = 0;

          lahanKeys.forEach(lahan => {
            const data = allData[lahan]?.[period]?.[dataType]?.[index];
            if (data) {
              if (dataType === 'nutrient') {
                // Do nothing here, handled separately for each nutrient
              } else {
                const value = data[getValueKey(dataType)] || 0;
                total += value;
                count++;
              }
            }
          });

          if (dataType === 'nutrient') {
            let totalN = 0, totalP = 0, totalK = 0;
            let nutrientCount = 0;

            lahanKeys.forEach(lahan => {
              const data = allData[lahan]?.[period]?.[dataType]?.[index];
              if (data) {
                totalN += data.nitrogen || 0;
                totalP += data.phospor || 0;
                totalK += data.kalium || 0;
                nutrientCount++;
              }
            });

            return {
              day: dayName,
              nitrogen: nutrientCount > 0 ? Math.round(totalN / nutrientCount) : 0,
              phospor: nutrientCount > 0 ? Math.round(totalP / nutrientCount) : 0,
              kalium: nutrientCount > 0 ? Math.round(totalK / nutrientCount) : 0,
            };
          } else {
            return {
              day: dayName,
              [getValueKey(dataType)]: count > 0 ?
                (dataType === 'ph' ? Number((total / count).toFixed(1)) : Math.round(total / count))
                : 0,
            };
          }
        }) || [];
      };

      return {
        nutrient: calculateAverageForType('nutrient'),
        suhu: calculateAverageForType('suhu'),
        ph: calculateAverageForType('ph'),
        kelembapanTanah: calculateAverageForType('kelembapanTanah'),
        suhuLingkungan: calculateAverageForType('suhuLingkungan'),
        kelembapanLingkungan: calculateAverageForType('kelembapanLingkungan'),
      };
    } catch (error) {
      console.error('Error calculating average data:', error);
      return getEmptyData();
    }
  };

  // Helper function untuk mendapatkan key value berdasarkan tipe data
  const getValueKey = (dataType: string) => {
    switch (dataType) {
      case 'suhu':
      case 'suhuLingkungan':
        return 'suhu';
      case 'ph':
        return 'ph';
      case 'kelembapanTanah':
      case 'kelembapanLingkungan':
        return 'kelembapan';
      default:
        return 'value';
    }
  };

  // Helper function untuk data kosong
  const getEmptyData = () => ({
    nutrient: [],
    suhu: [],
    ph: [],
    kelembapanTanah: [],
    suhuLingkungan: [],
    kelembapanLingkungan: [],
  });

  const lahanList = [
    "Semua Lahan",
    ...Array.from({ length: 10 }, (_, i) => `Lahan ${i + 1}`),
  ];

  // Mendapatkan data berdasarkan filter dengan error handling
  const getFilteredData = () => {
    try {
      if (selectedLahan === "Semua Lahan") {
        return calculateAverageData(selectedPeriod);
      }

      const lahanData = allData[selectedLahan]?.[selectedPeriod];
      if (!lahanData) {
        console.warn(`No data found for ${selectedLahan} - ${selectedPeriod}`);
        return calculateAverageData(selectedPeriod);
      }

      return lahanData;
    } catch (error) {
      console.error('Error getting filtered data:', error);
      return calculateAverageData(selectedPeriod);
    }
  };

  const selectedData = getFilteredData();

  // Data dengan fallback ke array kosong
  const nutrientData = selectedData?.nutrient || [];
  const temperatureData = selectedData?.suhu || [];
  const phData = selectedData?.ph || [];
  const soilMoistureData = selectedData?.kelembapanTanah || [];
  const environmentTemperatureData = selectedData?.suhuLingkungan || [];
  const environmentHumidityData = selectedData?.kelembapanLingkungan || [];

  const periodButtons = ["harian", "mingguan", "bulanan"] as const;

  // Helper function untuk menghitung rata-rata dengan aman
  const calculateSafeAverage = (data: any[], key: string) => {
    if (!data || data.length === 0) return 0;
    const sum = data.reduce((acc, curr) => acc + (curr[key] || 0), 0);
    return dataType === 'ph' ? Number((sum / data.length).toFixed(1)) : Math.round(sum / data.length);
  };

  let dataType = '';

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

  // Custom Tooltip untuk Bar Charts
  const CustomTooltipBar = ({ active, payload, coordinate, dataKey }: any) => {
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
            {payload[0].value}{dataKey === 'ph' ? '' : dataKey.includes('kelembapan') ? '%' : '°C'}
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

  // Weather forecast data
  const weatherData = [
    { day: "Sen", weather: "☀", temp: "28 °C", rain: "0 mm", desc: "Cerah" },
    { day: "Sel", weather: "🌤️", temp: "27 °C", rain: "1 mm", desc: "Cerah Berawan" },
    { day: "Rab", weather: "☁️", temp: "26 °C", rain: "3 mm", desc: "Berawan" },
    { day: "Kam", weather: "🌧️", temp: "25 °C", rain: "12 mm", desc: "Hujan Ringan" },
    { day: "Jum", weather: "⛈️", temp: "23 °C", rain: "35 mm", desc: "Hujan Lebat" },
    { day: "Sab", weather: "🌧️", temp: "24 °C", rain: "12 mm", desc: "Hujan Ringan" },
    { day: "Min", weather: "☁️", temp: "25 °C", rain: "2 mm", desc: "Berawan" },
  ];

  // Prevent hydration mismatch by showing loading on server
  if (!isClient) {
    return (
      <div className="w-full bg-[#F4FAF4] px-6 pb-6 space-y-4 relative">
        <div className="flex items-center justify-between relative pt-4">
          <h1 className="text-2xl font-bold text-[#1F4E20]">Loading...</h1>
        </div>
      </div>
    );
  }

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

        {nutrientData.length > 0 ? (
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
        ) : (
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            Tidak ada data yang tersedia
          </div>
        )}

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
          {temperatureData.length > 0 ? (
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
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Tidak ada data yang tersedia
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs text-black font-semibold mb-1">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-xs text-black mb-1">
            Rata-rata suhu tanah {selectedPeriod === 'harian' ? 'hari ini' : selectedPeriod === 'mingguan' ? 'minggu ini' : 'bulan ini'} :
          </p>
          <p className="text-2xl text-[#1F4E20] font-bold">
            {calculateSafeAverage(temperatureData, 'suhu')}°C
          </p>
        </div>
      </div>

      {/* Grafik pH Tanah */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-[#1F4E20] mb-4">
          Grafik pH Tanah
        </h2>

        <div className="h-[300px] w-full">
          {phData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={phData}
                margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEEE" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: '#1F4E20', fontSize: 11 }}
                  axisLine={{ stroke: '#EEEEEE' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 14]}
                  ticks={[0, 2, 4, 6, 8, 10, 12, 14]}
                  tick={{ fill: '#1F4E20', fontSize: 11 }}
                  axisLine={{ stroke: '#EEEEEE' }}
                  tickLine={false}
                  label={{
                    value: "Tingkat pH",
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
                  content={(props) => <CustomTooltipBar {...props} dataKey="ph" />}
                  cursor={false}
                  wrapperStyle={{ outline: 'none', pointerEvents: 'none' }}
                  allowEscapeViewBox={{ x: true, y: true }}
                  isAnimationActive={false}
                  trigger="hover"
                  offset={0}
                />
                <Bar
                  dataKey="ph"
                  fill="#7FD083"
                  radius={[5, 5, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Tidak ada data yang tersedia
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs text-black font-semibold mb-1">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-xs text-black mb-1">
            Zona ideal pH tanah: 6.0 - 7.0
          </p>
        </div>
      </div>

      {/* Grafik Kelembapan Tanah */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-[#1F4E20] mb-4">
          Grafik Kelembapan Tanah
        </h2>

        <div className="h-[300px] w-full">
          {soilMoistureData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={soilMoistureData}
                margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEEE" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: '#1F4E20', fontSize: 11 }}
                  axisLine={{ stroke: '#EEEEEE' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  tick={{ fill: '#1F4E20', fontSize: 11 }}
                  axisLine={{ stroke: '#EEEEEE' }}
                  tickLine={false}
                  label={{
                    value: "Tingkat Kelembapan (%)",
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
                  content={(props) => <CustomTooltipBar {...props} dataKey="kelembapan" />}
                  cursor={false}
                  wrapperStyle={{ outline: 'none', pointerEvents: 'none' }}
                  allowEscapeViewBox={{ x: true, y: true }}
                  isAnimationActive={false}
                  trigger="hover"
                  offset={0}
                />
                <Bar
                  dataKey="kelembapan"
                  fill="#7FD083"
                  radius={[5, 5, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Tidak ada data yang tersedia
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs text-black font-semibold mb-1">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-xs text-black mb-1">
            Rata-rata kelembapan tanah {selectedPeriod === 'harian' ? 'hari ini' : selectedPeriod === 'mingguan' ? 'minggu ini' : 'bulan ini'} :
          </p>
          <p className="text-2xl text-[#1F4E20] font-bold">
            {calculateSafeAverage(soilMoistureData, 'kelembapan')}%
          </p>
        </div>
      </div>

      {/* Grafik Suhu Lingkungan */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-[#1F4E20] mb-4">
          Grafik Suhu Lingkungan
        </h2>

        <div className="h-[300px] w-full">
          {environmentTemperatureData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={environmentTemperatureData}
                margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
              >
                <defs>
                  <linearGradient id="colorSuhuLingkungan" x1="0" y1="0" x2="0" y2="1">
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
                  fill="url(#colorSuhuLingkungan)"
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
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Tidak ada data yang tersedia
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs text-black font-semibold mb-1">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-xs text-black mb-1">
            Rata-rata suhu lingkungan {selectedPeriod === 'harian' ? 'hari ini' : selectedPeriod === 'mingguan' ? 'minggu ini' : 'bulan ini'} :
          </p>
          <p className="text-2xl text-[#1F4E20] font-bold">
            {calculateSafeAverage(environmentTemperatureData, 'suhu')}°C
          </p>
        </div>
      </div>

      {/* Grafik Kelembapan Lingkungan */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-[#1F4E20] mb-4">
          Grafik Kelembapan Lingkungan
        </h2>

        <div className="h-[300px] w-full">
          {environmentHumidityData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={environmentHumidityData}
                margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEEE" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: '#1F4E20', fontSize: 11 }}
                  axisLine={{ stroke: '#EEEEEE' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  tick={{ fill: '#1F4E20', fontSize: 11 }}
                  axisLine={{ stroke: '#EEEEEE' }}
                  tickLine={false}
                  label={{
                    value: "Tingkat Kelembapan (%)",
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
                  content={(props) => <CustomTooltipBar {...props} dataKey="kelembapan" />}
                  cursor={false}
                  wrapperStyle={{ outline: 'none', pointerEvents: 'none' }}
                  allowEscapeViewBox={{ x: true, y: true }}
                  isAnimationActive={false}
                  trigger="hover"
                  offset={0}
                />
                <Bar
                  dataKey="kelembapan"
                  fill="#7FD083"
                  radius={[5, 5, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Tidak ada data yang tersedia
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs text-black font-semibold mb-1">
            {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </p>
          <p className="text-xs text-black mb-1">
            Rata-rata kelembapan lingkungan {selectedPeriod === 'harian' ? 'hari ini' : selectedPeriod === 'mingguan' ? 'minggu ini' : 'bulan ini'} :
          </p>
          <p className="text-2xl text-[#1F4E20] font-bold">
            {calculateSafeAverage(environmentHumidityData, 'kelembapan')}%
          </p>
        </div>
      </div>

      {/* Weather Forecast */}
      <div className="bg-[#6691FF] p-5 rounded-2xl shadow-sm">
        <div className="flex overflow-x-auto pb-4 space-x-4">
          {weatherData.map((day, index) => (
            <div key={index} className="flex flex-col items-center text-white min-w-[60px]">
              <div className="text-2xl mb-1">{day.weather}</div>
              <div className="text-xs text-center mb-1">{day.desc}</div>
              <div className="text-xs font-semibold">{day.temp}</div>
              <div className="text-xs">{day.rain}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <p className="text-sm font-semibold">Cuaca hari ini:</p>
              <p className="text-lg font-bold">Cerah Berawan, 27 °C, 1 mm</p>
              <p className="text-xs opacity-90">Selasa, 8 September 2025</p>
            </div>
            <div className="text-4xl">🌤️</div>
          </div>
        </div>
      </div>
    </div>
  );
}