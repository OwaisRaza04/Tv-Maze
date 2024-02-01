import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="p-0 m-0" style={{ background: "white" }}>
      <header className="relative z-50 bg-0 white">
        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between h-16 px-11">
              {/* Logo */}
              <div className="flex ml-4 lg:ml-0">
                <a href="">
                  <img
                    className="w-auto h-10 cursor-pointer"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Main nav items (hidden on mobile) */}
              <div className="hidden w-full lg:flex lg:items-center lg:justify-center">
                <div className="flex items-center justify-center w-full m-auto">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="px-4 py-1 border-transparent rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ring-2 ring-blue-500"
                      placeholder="Search..."
                    />
                    <button className="px-4 py-1 ml-5 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 ">
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex items-center ml-auto">
                  <div className="">
                    <div className="relative group">
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
                        style={{ backgroundColor: "#4f46e5", color: "white" }}
                      >
                        <span className="text-sm font-medium">R</span>
                      </div>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-yellow-500 hover:text-yellow-600"
                    >
                      <span className="sr-only">Search</span>
                      <NotificationsIcon
                        className="w-6 h-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <div className="flow-root ml-4 lg:ml-6">
                    <a href="#" className="flex items-center p-2 -m-2 group">
                      <FavoriteIcon
                        className="flex-shrink-0 w-6 h-6 text-pink-500 group-hover:text-pink-600"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on mobile menu state */}
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"} lg:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 ml-5 space-y-1">
              <div className="flex items-center gap-3 m-2">
                <FavoriteIcon
                  className="flex-shrink-0 w-6 h-6 text-pink-500 group-hover:text-pink-600"
                  aria-hidden="true"
                />
                <p className="font-semibold">Wishlist</p>
              </div>
              <div className="flex items-center gap-3 m-2">
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  <NotificationsIcon className="w-6 h-6" aria-hidden="true" />
                </a>
                <p className="font-semibold">Notifications</p>
              </div>
              <div className="flex items-center gap-3 m-2">
                <AccountCircleIcon
                  className="flex-shrink-0 w-6 h-6"
                  aria-hidden="true"
                />
                <p className="font-semibold">Profile</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
