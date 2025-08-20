import React from 'react';

interface ShopModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShopModel: React.FC<ShopModelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg top-16 right-4 w-96 h-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-medium text-gray-900">Shopping Cart</h3>
      <button
  onClick={onClose}
  className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full"
>
  ×
</button>

      </div>

      {/* Body */}
      <div className="p-4 space-y-2 overflow-y-auto max-h-96">
        <p>Your shopping cart is empty.</p>
      </div>

      {/* Footer */}
      <div className="flex p-4 border-t">
        <button
          
          className="w-full px-4 py-2 text-white bg-black"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ShopModel;

