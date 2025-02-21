"use client";
import React from "react";

export default function Features() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-black">Our Features</h2>
        <p className="text-gray-600 mt-2">
          Revolutionizing healthcare administration with AI-powered automation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">AI-Powered Patient Record Digitization</h3>
            <p className="text-gray-600 mt-2">
              Automatically converts handwritten and printed medical records into structured digital formats.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">Automated Data Extraction</h3>
            <p className="text-gray-600 mt-2">
              AI-driven technology accurately extracts patient information, reducing errors and improving efficiency.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">Secure & Accessible Digital Records</h3>
            <p className="text-gray-600 mt-2">
              Cloud-based storage ensures patient data is secure, easily retrievable, and accessible by authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
