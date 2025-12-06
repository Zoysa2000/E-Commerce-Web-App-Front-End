import React from 'react';
import ShopNew from '../Buttons/ShopNew';

const Background = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Desktop background */}
      <div
        className="hidden w-full h-full bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: "url('/assets/p1.png')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Mobile background */}
      <div
        className="block w-full h-full bg-no-repeat bg-cover md:hidden"
        style={{
          backgroundImage: "url('/assets/p2.png')",
        }}
      ></div>

      {/* New Arrival button */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <ShopNew/>
      </div>

      
    </div>
  );
};

export default Background;
