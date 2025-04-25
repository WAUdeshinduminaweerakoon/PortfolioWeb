import React, { useState } from 'react';
import logo from '../../assets/poto1.JPG';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-[rgb(31,25,15)] text-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <img src={logo} alt="logo" className="object-cover w-12 h-12 rounded-full" />

       
        <div className="md:hidden">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
        <ul className="hidden space-x-6 text-lg font-medium md:flex">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About Me</li>
          <li className="cursor-pointer hover:text-gray-400">Services</li>
          <li className="cursor-pointer hover:text-gray-400">Portfolio</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>

        <div className="hidden px-4 py-2 text-sm border border-white rounded cursor-pointer md:block hover:bg-white hover:text-black">
          Connect With Me
        </div>
      </div>
   
      {isOpen && (
        <div className="mt-4 space-y-4 text-center md:hidden">
          <ul className="space-y-2 text-lg font-medium">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <div className="px-4 py-2 text-sm border border-white rounded cursor-pointer hover:bg-white hover:text-black">
            Connect With Me
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
