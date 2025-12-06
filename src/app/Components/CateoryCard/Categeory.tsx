"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    title: "MENS",
    image: "/assets/men.png", // store these images inside /public/images/
    link: "/men",
  },
  {
    title: "WOMENS",
    image: "/assets/women.png",
    link: "/women",
  },
  {
    title: "ACCESSORIES",
    image: "/assets/access.png",
    link: "/accesories",
  },
];

const Category = () => {
  const router = useRouter();

  return (
    <div className="mt-3 grid md:grid-cols-3 grid-cols-1 min-h-[80vh]">
      {categories.map((cat, index) => (
        <motion.div
          key={index}
          onClick={() => router.push(cat.link)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="relative cursor-pointer group overflow-hidden h-[70vh] md:h-[80vh]"
        >
          {/* Background Image */}
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/20" />

          {/* Title */}
          <h2 className="absolute text-3xl font-extrabold tracking-wide text-white bottom-6 left-6 md:text-4xl">
            {cat.title}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Category;
