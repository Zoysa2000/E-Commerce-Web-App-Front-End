
import React, { useState } from "react";
import Image from "next/image";
import PopupBox from "./PopupBox";
import Zoom from "react-reveal/Zoom";


interface ProductCardProps {
  id: string;
  title: string;
  image: string;   // default image
  image1: string;  // hover image
  link: string;
  price: string;
  colors: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  image1,
  link,
  price,
  colors,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg"
     
    >
      <div>
        <Image
          className="rounded-t-lg cursor-pointer"
          src={isHovered ? image1 : image}
          alt={title}
          width={400}
          height={150}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      <a href={link} key={id} className="relative block group">
        <div className="p-3">
          <p className="text-lg font-semibold text-gray-900">{title}</p>
          <p className="font-bold text-black">{price}</p>
          <p className="text-sm font-semibold text-gray-600">{colors}</p>
          <p className="text-sm font-semibold text-gray-600">{description}</p>
        </div>

        {/* PopupBox appears on hover */}
        
        <div className="absolute bottom-0 left-0 justify-center hidden w-full p-3 group-hover:flex">
         <Zoom>
          <PopupBox id={id} />
         </Zoom>
          
        
       
        </div>
      </a>
    </div>
  );
};

export default ProductCard;

