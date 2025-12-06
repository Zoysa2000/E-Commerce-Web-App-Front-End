"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import products from "@/data/products.json";
import Navbar from "@/app/Components/HomeComponent/Navbar";
import Zoom from "react-reveal/Zoom";

const filters = [
  "Availability",
  "Price",
  "Size",
  "Color",
  "Gender",
  "Fit",
  "Sort By: Manual",
];

export default function MensPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
      {/* Header */}
      <div className="px-6 pt-20 pb-6 border-b md:px-16 bg-gray-50">
        <p className="mt-5 text-sm text-gray-500">
          Home / Collections /{" "}
          <span className="font-semibold text-black">Accessorie&apos;s</span>
        </p>
        <div className="flex items-center justify-between mt-3">
          <h1 className="text-4xl font-bold md:text-5xl">Accessorie&apos;s</h1>
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="px-4 py-2 text-sm font-medium border rounded-lg md:hidden"
          >
            Filters
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 px-6 py-10 md:grid-cols-4 md:px-16">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden pr-6 border-r md:block">
          {filters.map((filter, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            >
              <span className="font-medium text-gray-800">{filter}</span>
              <span className="text-gray-500">+</span>
            </div>
          ))}
        </aside>

        {/* Product Grid */}
        <section className="grid grid-cols-2 gap-8 md:col-span-3 lg:grid-cols-3 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="mt-3">
                <h3 className="font-semibold text-gray-800 group-hover:text-black">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">{product.colors}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="mt-1 text-base font-semibold text-black">
                  {product.price}
                </p>
              </div>

              {/* 🔥 Hover Popup Box */}
              <AnimatePresence>
                {hoveredProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-30 flex items-center justify-center md:flex"
                  >
                    
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </section>
      </div>

      {/* Mobile Filter Popup */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}
          whileHover={{ scale: 1.03 }}
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-white shadow-lg rounded-t-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="font-medium text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Filter Options */}
              <div className="space-y-4">
                {filters.map((filter, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                  >
                    <span className="font-medium text-gray-800">{filter}</span>
                    <span className="text-gray-500">+</span>
                  </div>
                ))}
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-3 mt-6 font-medium text-white bg-black rounded-lg"
              >
                Apply Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
