"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-500 text-white py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold">💚 Name</h3>
          <p className="text-sm mt-2">
            Learn how our digital health platform enhances accessibility and improves patient care.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <span className="text-xl cursor-pointer">🔵</span>
            <span className="text-xl cursor-pointer">🟣</span>
            <span className="text-xl cursor-pointer">🔴</span>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h4 className="font-semibold">Departments</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Family Medicine</li>
            <li>Women's Health</li>
            <li>Pediatrics</li>
            <li>Dermatology</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Our Doctors</li>
            <li>Appointment</li>
            <li>Blog Posts</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Blog Posts */}
        <div>
          <h4 className="font-semibold">Blog Post</h4>
          <p className="text-sm mt-2">
            "The Future of Digital Health" - Read about how AI is transforming medical record management.
          </p>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-white pt-4">
        &copy; 2025 Digital Health Platform. All rights reserved.
      </div>
    </footer>
  );
}
