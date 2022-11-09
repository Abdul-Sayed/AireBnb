import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-5 lg:px-10">
      <nav className="relative h-10 flex items-center cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb Logo"
          fill
          sizes="2049px"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </nav>
      <nav className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Search destinations"
          className="flex-grow ml-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-2 h-8 md:min-w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </nav>
      <nav className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full min-w-fit">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

// https://links.papareact.com/qd3
