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

export default function SensorPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"harian" | "mingguan" | "bulanan">("harian");

  // === Dummy data untuk grafik ===
  const nutrientData = [
    { day: "Sen", nitrogen: 40, phospor: 25, kalium: 50 },
    { day: "Sel", nitrogen: 35, phospor: 22, kalium: 45 },
    { day: "Rab", nitrogen: 42, phospor: 27, kalium: 48 },
    { day: "Kam", nitrogen: 45, phospor: 30, kalium: 52 },
    { day: "Jum", nitrogen: 38, phospor: 20, kalium: 40 },
    { day: "Sab", nitrogen: 44, phospor: 28, kalium: 49 },
    { day: "Min", nitrogen: 41, phospor: 26, kalium: 47 },
  ];

  const temperatureData = [
    { day: "Sen", suhu: 28 },
    { day: "Sel", suhu: 30 },
    { day: "Rab", suhu: 29 },
    { day: "Kam", suhu: 31 },
    { day: "Jum", suhu: 27 },
    { day: "Sab", suhu: 33 },
    { day: "Min", suhu: 30 },
  ];

  const periodButtons = ["harian", "mingguan", "bulanan"] as const;

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Pemantauan Sensor</h1>
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
        </button>
      </div>

      {/* Tombol Harian / Mingguan / Bulanan */}
      <div className="flex w-full bg-white rounded-xl overflow-hidden shadow-sm">
        {periodButtons.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`w-1/3 py-2 capitalize font-medium transition ${
              selectedPeriod === period
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Grafik Nutrisi */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Kandungan Nutrisi</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={nutrientData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 60]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nitrogen" stroke="#2563eb" strokeWidth={2} />
            <Line type="monotone" dataKey="phospor" stroke="#16a34a" strokeWidth={2} />
            <Line type="monotone" dataKey="kalium" stroke="#f59e0b" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

        {/* Penjelasan bawah grafik */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-medium">Harian</p>
          <ul className="list-disc pl-5">
            <li>Nitrogen: 20 - 50 ppm</li>
            <li>Phospor: 15 - 30 ppm</li>
            <li>Kalium: 30 - 60 ppm</li>
          </ul>
        </div>
      </div>

      {/* Grafik Suhu Tanah */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Suhu Tanah</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 50]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="suhu" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
