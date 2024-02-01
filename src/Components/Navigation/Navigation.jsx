import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaUser } from "react-icons/fa";
import Dropdown from "react-dropdown-select";

export default function Navigation() {
  return (
    <div className="p-0 m-0" style={{ background: "white" }}>
      <header className="relative z-50 bg-0 white">
        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16 px-11">
              <div 
              
              className="flex ml-4 lg:ml-0">
                <a href="">
                  <img
                    className="w-auto h-10 cursor-pointer"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

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
                    <NotificationsIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
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
        </nav>
      </header>
    </div>
  );
}
