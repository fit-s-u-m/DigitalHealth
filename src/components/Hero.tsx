"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-white py-20 px-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase font-semibold text-gray-500">
          Medical And Health
        </h2>
        <h1 className="text-5xl font-bold text-black leading-tight mt-2">
          A professional and friendly care provider.
        </h1>
        <p className="text-gray-600 mt-4">
          Excepteur sint occaecat cupidatat non proident sunt officia.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
          More →
        </button>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-10 right-20 w-52 h-52 bg-green-500 rounded-full"></div>
    </section>
  );
}
