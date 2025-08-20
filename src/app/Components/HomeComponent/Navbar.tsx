
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import ShopModel from "../ShopComponent/ShopModel";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile hamburger
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // company dropdown

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={150}
            height={100}
          />
        </Link>

        {/* Search + Cart + Hamburger */}
        <div className="flex items-center space-x-2 md:order-2">

          {/* Search (desktop) */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <svg
                className="w-4 h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              placeholder="Search..."
              className="block w-full p-2 text-sm text-black border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Cart (desktop only) */}
          <button className="items-center justify-center hidden w-10 h-10 text-black rounded-lg md:flex hover:bg-gray-300">
            <FiShoppingCart size={20}  onClick={()=>
              {
              setIsCartOpen(true)  
              }
            }/>
          </button>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Cart (mobile only, inline with hamburger) */}
          <button className="flex items-center justify-center w-10 h-10 text-black rounded-lg md:hidden hover:bg-gray-300">
            <FiShoppingCart size={20} onClick={()=>
              {
              setIsCartOpen(true)  
              }
            }/>
          </button>
        </div>

        {/* Menu */}
        <div
          id="navbar-search"
          className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          {/* Search (mobile) */}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <svg
                className="w-4 h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar-mobile"
              placeholder="Search..."
              className="block w-full p-2 text-sm text-black border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Nav links */}
          <ul className="flex flex-col p-4 mt-4 border border-gray-200 rounded-lg md:p-0 bg-gray-50 md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="#"
                onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseLeave={() => setIsDropdownOpen(isDropdownOpen)}
                className="flex items-center px-3 py-2 font-semibold bg-white rounded-sm text-sek md:bg-transparent md:p-0 md:text-lg"
              >
                MEN
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseLeave={() => setIsDropdownOpen(isDropdownOpen)}
                className="flex items-center px-3 py-2 font-semibold text-black bg-white rounded-sm md:bg-transparent md:p-0 md:text-lg"
              >
                WOMEN
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseLeave={() => setIsDropdownOpen(isDropdownOpen)}
                className="flex items-center px-3 py-2 font-semibold bg-white rounded-sm text-balancelack md:bg-transparent md:p-0 md:text-lg"
              >
                ACCESSORIES
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block px-3 py-2 font-semibold text-black bg-white rounded-sm md:bg-transparent md:p-0 md:text-lg"
              >
                GIFTS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown menu for Company */}
      {isDropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 bg-black "
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-900">
                  <div className="font-semibold ">Online Stores</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-900">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-900">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-900">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-900">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-900">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      
     <ShopModel
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
/>
    </nav>

    
  );
};

export default Navbar;


