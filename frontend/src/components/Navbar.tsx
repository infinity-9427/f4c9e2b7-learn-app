'use client';

import React, {useState} from 'react';
import NavigationLink from './NavigationLink';
import {RiMenuLine as FaBars, RiCloseLine as FaTimes, RiUserLine} from '@remixicon/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import {Button} from './ui/button';
import LangSwitcher from "./LangSwitcher"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { logout } from '@/store/slices/authSlice';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    Cookies.set('navbarMobileMenuOpen', newState.toString(), {expires: 1});
  };

  const closeMenuOnNavigate = () => {
    setIsMenuOpen(false);
    Cookies.set('navbarMobileMenuOpen', 'false', {expires: 1});
  };

  const handleLogout = () => {
    dispatch(logout());
    closeMenuOnNavigate();
  };

  return (
    <header className="bg-black text-[#F5F1E3] sticky top-0 z-20 w-full shadow-md">
      <div className="flex items-center justify-between h-20 px-2 md:px-4 lg:px-10 ">
        <div className="flex-shrink-0 p-3 rounded-md">
          <NavigationLink href="/" onClick={closeMenuOnNavigate}>
            <Image
              src="/courses-logo.webp"
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
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <LangSwitcher />
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  {user?.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <RiUserLine className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavigationLink href="/login">
              <Button variant="outline">Login</Button>
            </NavigationLink>
          )}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white p-4 animate-slide-down flex flex-col items-center justify-center min-h-screen space-y-4">
          <LangSwitcher />
          {isAuthenticated ? (
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <NavigationLink href="/login" onClick={closeMenuOnNavigate}>
              <Button variant="outline">Login</Button>
            </NavigationLink>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
