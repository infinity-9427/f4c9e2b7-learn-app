
'use client';

import React, {useState} from 'react';
import {Menu} from '../utils/Menu';
import NavigationLink from './NavigationLink';
import {RiMenuLine as FaBars, RiCloseLine as FaTimes} from '@remixicon/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import {Button} from './ui/button';
import LangSwitcher from "./LangSwitcher"

const Navbar = () => {
  const menuOptions = Menu();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    Cookies.set('navbarMobileMenuOpen', newState.toString(), {expires: 1});
  };

  const closeMenuOnNavigate = () => {
    setIsMenuOpen(false);
    Cookies.set('navbarMobileMenuOpen', 'false', {expires: 1});
  };

  return (
    <header className="bg-black text-[#F5F1E3] sticky top-0 z-20 w-full shadow-md">
      <div className="flex items-center justify-between h-20 px-2 md:px-4 lg:px-10 ">
        <div className="flex-shrink-0 p-3 rounded-md">
          <NavigationLink href="/" onClick={closeMenuOnNavigate}>
            <Image
              src="/logo-landing-2.webp"
              alt="logo"
              width={1200}
              height={800}
              className="w-auto h-16 rounded-md transition-all duration-300 ease-in-out "
              quality={90}
              priority
            />
          </NavigationLink>
        </div>

        {/* Navigation (Centered) */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex space-x-8">
            {menuOptions.map((option, index) => (
              <NavigationLink
                key={index}
                href={option.path}
                className="px-3 py-2 rounded transition-all duration-300 ease-in-out font-semibold text-gray-300 hover:text-indigo-500"
              >
                {option.item}
              </NavigationLink>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex flex-shrink-0">
          <LangSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Open menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white p-4 animate-slide-down flex flex-col items-center justify-center min-h-screen space-y-4">
          {menuOptions.map((option, index) => (
            <NavigationLink
              key={index}
              href={option.path}
              onClick={closeMenuOnNavigate}
              className="block px-4 py-2 rounded transition-all duration-300 ease-in-out font-semibold text-gray-300 hover:text-indigo-500"
            >
              {option.item}
            </NavigationLink>
          ))}
          <LangSwitcher />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
