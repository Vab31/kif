import React from 'react';

export default function Nav() {
  return (
    <div>
      <header className="text-green-600 body-font bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 space-y-4 md:space-y-0">
          
          {/* Logo */}
          <a className="flex title-font font-medium items-center justify-center md:justify-start">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-28 h-15 sm:w-32 sm:h-10 md:w-28 md:h-20 lg:w-32 lg:h-16 object-contain"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-4 text-base order-last md:order-none font-bold">
            <a className="hover:text-gray-900" href='/'>Home</a>
            <a className="hover:text-gray-900" href='/us'>About Us</a>
            <a className="hover:text-gray-900" href='/clip'>Clips</a>
          </nav>

       
        </div>
      </header>
    </div>
  );
}


