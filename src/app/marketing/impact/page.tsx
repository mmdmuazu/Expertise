"use client";
import { useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const step = Math.ceil(value / (duration / stepTime));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <span className="font-bold text-2xl text-primary">
      {count.toLocaleString()}
    </span>
  );
}

export default function ImpactPage() {
  const stats = [
    { label: "Youth trained", value: 50000 },
    { label: "States reached", value: 5 },
    { label: "Pillars active", value: 4 },
    { label: "People reached", value: 1000000 },
  ];

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-center">Impact & Reports</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Indicators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 bg-white rounded-lg shadow group hover:shadow-lg transition"
            >
              <Counter value={s.value} />
              <p className="mt-2 text-gray-700">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          Periodic impact updates and reports are published to ensure
          transparency and accountability. Stay tuned for our latest data.
        </p>
      </section>
    </main>
  );
}
