"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gray-100 py-28 min-h-[100vh] flex items-center"
    >
      <div className="max-w-6xl  mx-auto text-center px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-[#2CAA83]"
        >
          Our Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mt-3 max-w-10xl mx-auto"
        >
          Revolutionizing healthcare administration with AI-powered automation.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-20 mt-2  0">
          {[
            {
              title: "AI-Powered Patient Records",
              description:
                "Automatically converts handwritten and printed medical records into structured digital formats.",
            },
            {
              title: "Automated Data Extraction",
              description:
                "AI-driven technology accurately extracts patient information, reducing errors and improving efficiency.",
            },
            {
              title: "Secure Digital Storage",
              description:
                "Cloud-based storage ensures patient data is secure, easily retrievable, and accessible by authorized personnel.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-[#2CAA83] font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
