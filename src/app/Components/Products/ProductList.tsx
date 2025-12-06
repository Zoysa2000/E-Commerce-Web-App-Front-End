"use client";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import products from "@/data/products.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  image1: string;
  link: string;
  price: string;
  colors: string;
};

export default function ProductList() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth; // scroll by container width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mt-5">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute z-20 p-3 text-white -translate-y-1/2 bg-black rounded-full top-1/2 left-2 hover:bg-gray-800"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute z-20 p-3 text-white -translate-y-1/2 bg-black rounded-full top-1/2 right-2 hover:bg-gray-800"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Products container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar"
      >
        {products.map((product: Product) => (
          <div key={product.id} className="min-w-[350px] md:min-w-[350px]">
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              image1={product.image1}
              link={product.link}
              price={product.price}
              colors={product.colors}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

