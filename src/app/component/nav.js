import React from 'react';

export default function Nav() {
  return (
    <div>
      <header className="text-white body-font bg-amber-700">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 space-y-4 md:space-y-0">
          
          {/* Logo */}
          <a className="flex title-font font-medium items-center justify-center md:justify-start">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-20 h-10 sm:w-24 sm:h-5 md:w-28 md:h-14 lg:w-32 lg:h-16 object-contain"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-4 text-base order-last md:order-none">
            <a className="hover:text-gray-900" href='/'>Home</a>
            <a className="hover:text-gray-900" href='/us'>About Us</a>
            <a className="hover:text-gray-900" href='/finance_short'>Finance Video</a>
          </nav>

          {/* Contact Button */}
          <a href="" className="flex justify-center sm:my-0 my-2">
            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base">
              Contact Us
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}


