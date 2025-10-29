"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Settings2 as Filter } from "lucide-react";

export default function SensorPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "harian" | "mingguan" | "bulanan"
  >("harian");
  const [selectedLahan, setSelectedLahan] = useState("Semua Lahan");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // === Dummy data nutrisi dan suhu ===
  const allData = {
    "Lahan 1": {
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
    "Lahan 2": {
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
  };

  // === Data gabungan untuk "Semua Lahan" ===
  const averageData = {
    nutrient: allData["Lahan 1"].nutrient.map((d, i) => ({
      day: d.day,
      nitrogen: (d.nitrogen + allData["Lahan 2"].nutrient[i].nitrogen) / 2,
      phospor: (d.phospor + allData["Lahan 2"].nutrient[i].phospor) / 2,
      kalium: (d.kalium + allData["Lahan 2"].nutrient[i].kalium) / 2,
    })),
    suhu: allData["Lahan 1"].suhu.map((d, i) => ({
      day: d.day,
      suhu: (d.suhu + allData["Lahan 2"].suhu[i].suhu) / 2,
    })),
  };

  const lahanList = [
    "Semua Lahan",
    ...Array.from({ length: 10 }, (_, i) => `Lahan ${i + 1}`),
  ];

  const selectedData =
    selectedLahan === "Semua Lahan"
      ? averageData
      : allData[selectedLahan as keyof typeof allData] || averageData;

  const nutrientData = selectedData.nutrient;
  const temperatureData = selectedData.suhu;

  const periodButtons = ["harian", "mingguan", "bulanan"] as const;

  return (
    <div className=" w-full bg-[#F4FAF4] px-6 space-y-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between relative">
        <h1 className="text-2xl font-bold text-[#1F4E20]">Pemantauan Sensor</h1>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 border border-primary bg-white rounded-full shadow-sm hover:bg-[#7FD083]/10 transition"
          >
            <Filter className="w-5 h-5 text-[#1F4E20]" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-[#7FD083] rounded-lg shadow-md z-10 w-40">
              {lahanList.map((lahan) => (
                <button
                  key={lahan}
                  onClick={() => {
                    setSelectedLahan(lahan);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-[#7FD083]/10 ${
                    selectedLahan === lahan
                      ? "bg-[#7FD083]/20 font-semibold text-[#1F4E20]"
                      : "text-gray-700"
                  }`}
                >
                  {lahan}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info lahan terpilih */}
      <p className="text-[#1F4E20] font-medium">
        Menampilkan data: <span className="font-semibold">{selectedLahan}</span>
      </p>

      {/* Tombol Harian / Mingguan / Bulanan */}
      <div className="flex w-full bg-white rounded-xl border border-primary overflow-hidden shadow-sm">
        {periodButtons.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`w-1/3 py-2 capitalize font-medium transition ${
              selectedPeriod === period
                ? "bg-[#1F4E20] text-white"
                : "bg-[#F4FAF4] text-[#1F4E20] hover:bg-[#7FD083]/20"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

{/* Grafik Nutrisi */}
<div className="bg-white p-4 rounded-xl shadow-sm">
  <h2 className="text-lg font-semibold text-[#1F4E20] mb-4">
    Kandungan Nutrisi
  </h2>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={nutrientData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis
        domain={[0, 60]}
        label={{
          value: "Tingkat NPK (ppm)",
          angle: -90,
          position: "insideLeft",
          style: {
            textAnchor: "middle",
            fill: "#1F4E20",
            fontWeight: 600,
          },
        }}
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="nitrogen"
        stroke="#1F4E20"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="phospor"
        stroke="#7FD083"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="kalium"
        stroke="#f59e0b"
        strokeWidth={2}
      />
    </LineChart>
  </ResponsiveContainer>

  {/* === Zona Ideal Berdasarkan Periode === */}
  <div className="mt-4 bg-[#F4FAF4] rounded-lg p-3 border border-[#7FD083]/40">
    <p className="text-sm text-[#1F4E20] font-semibold capitalize mb-1">
      {selectedPeriod}
    </p>
    <p className="text-sm text-[#1F4E20] font-medium">Zona ideal untuk:</p>
    <ul className="text-sm text-[#1F4E20] ml-4 list-disc">
      <li>Nitrogen (20–50 ppm)</li>
      <li>Phospor (15–30 ppm)</li>
      <li>Kalium (30–60 ppm)</li>
    </ul>
  </div>
</div>


      {/* Grafik Suhu Tanah */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-[#1F4E20] mb-4">
          Suhu Tanah
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 50]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="suhu"
              stroke="#ef4444"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
