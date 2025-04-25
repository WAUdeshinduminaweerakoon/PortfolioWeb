import React, { useState } from 'react';
import logo from '../../assets/poto1.JPG';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-[#dd9c1b] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src={logo} alt="logo" className="h-12 w-12 object-cover rounded-full" />

       
        <div className="md:hidden">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About Me</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:block text-sm px-4 py-2 border border-white rounded hover:bg-white hover:text-black cursor-pointer">
          Connect With Me
        </div>
      </div>
   
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <ul className="space-y-2 text-lg font-medium">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <div className="text-sm px-4 py-2 border border-white rounded hover:bg-white hover:text-black cursor-pointer">
            Connect With Me
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
