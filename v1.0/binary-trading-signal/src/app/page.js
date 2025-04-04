"use client";
import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function Home() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: { backgroundColor: "#0f172a", textColor: "#ffffff" },
      grid: { vertLines: { color: "#1e293b" }, horzLines: { color: "#1e293b" } },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderDownColor: "#ef5350",
      borderUpColor: "#26a69a",
      wickDownColor: "#ef5350",
      wickUpColor: "#26a69a",
    });

    // Simulated candle data
    candleSeries.setData([
      { time: "2024-04-01", open: 1.01, high: 1.05, low: 1.00, close: 1.03 },
      { time: "2024-04-02", open: 1.03, high: 1.06, low: 1.02, close: 1.05 },
      { time: "2024-04-03", open: 1.05, high: 1.07, low: 1.04, close: 1.06 },
      { time: "2024-04-04", open: 1.06, high: 1.08, low: 1.05, close: 1.07 },
    ]);

    return () => chart.remove();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Binary Trading Signals</h1>
        <button className="bg-blue-600 px-4 py-2 rounded">Semi-Live Data</button>
      </header>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Price Chart</h2>
        <div ref={chartContainerRef} className="w-full h-[300px]"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Trading Signal</h3>
          <p className="text-green-500 text-2xl font-bold">BUY</p>
          <p>Strong buying signal detected</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Pattern Recognition</h3>
          <p>No patterns detected</p>
        </div>
      </div>
    </div>
  );
}
