import React from "react";
import Image from "next/image";
import products from "@/data/products.json";

interface PopupBoxProps {
  id: string;
}

const PopupBox: React.FC<PopupBoxProps> = ({ id }) => {
    
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <p className="text-red-500">Product not found</p>
      </div>
    );
  }

  return (
    <div className="w-full p-10 bg-white shadow-lg md:w-full rgounded-lg md:pd-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-gray-900">SOLD OUT</h2>
        <button className="text-2xl font-bold text-gray-600 hover:text-gray-900">
          +
        </button>
      </div>

      {/* Divider */}
      <hr className="mb-4 border-gray-200" />

      {/* Product Thumbnail */}
      <div className="flex justify-center mb-4">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="border rounded-md"
        />
          <Image
          src={product.image1}
          alt={product.title}
          width={100}
          height={100}
          className="border rounded-md"
        />
      </div>

      {/* Sizes */}
      <div className="flex justify-between mt-4">
        {/* Disabled */}
        <button className="p-1 py-2 text-gray-400 bg-gray-100 border rounded-md cursor-not-allowed">
          XS
        </button>

        {/* Available */}
        <button className="p-1 border rounded-md hover:border-black">
          S
        </button>

        {/* Selected */}
        <button className="p-1 border rounded-md hover:border-black ">
          M
        </button>

        <button className="p-1 border rounded-md hover:border-black">
          L
        </button>

        <button className="p-1 border rounded-md hover:border-black">
          XL
        </button>

        <button className="p-1 border rounded-md hover:border-black">
          XXL
        </button>
      </div>
    </div>
  );
};

export default PopupBox;

