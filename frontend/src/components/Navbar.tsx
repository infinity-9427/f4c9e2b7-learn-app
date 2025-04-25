  'use client';

  import React, {useState} from 'react';
  import Link from 'next/link'
  import {RiMenuLine as FaBars, RiCloseLine as FaTimes, RiUserLine, RiHeartLine, RiMenuLine} from '@remixicon/react';
  import Cookies from 'js-cookie';
  import Image from 'next/image';
  import {Button} from './ui/button';
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
    const favoriteCourseIds = useSelector((state: RootState) => state.favorites.favoriteCourseIds);

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
            <Link href="/" onClick={closeMenuOnNavigate}>
              <Image
                src="/courses-logo.webp"
                alt="logo"
                width={1200}
                height={800}
                className="w-auto h-16 rounded-md transition-all duration-300 ease-in-out "
                quality={90}
                priority
              />
            </Link>
          </div>

          {/* Navigation (Centered) */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex space-x-8">
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link href="/profile" className="relative">
                  <Button variant="ghost" size="icon" className="relative">
                    <RiHeartLine className="h-5 w-5" />
                    {favoriteCourseIds.length > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                        {favoriteCourseIds.length}
                      </span>
                    )}
                  </Button>
                </Link>
                
                <Link href="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  {user?.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.name || 'User'}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <RiUserLine className="h-5 w-5" />
                  )}
                  <span className="text-sm font-medium">{user?.name || user?.username || 'User'}</span>
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <RiMenuLine className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
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
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  {user?.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.name || 'User'}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <RiUserLine className="h-6 w-6" />
                  )}
                  <span className="font-medium">{user?.name || user?.username || 'User'}</span>
                </div>
                <Link href="/profile" onClick={closeMenuOnNavigate} className="flex items-center gap-2">
                  <RiHeartLine className="h-5 w-5" />
                  <span>Favorites {favoriteCourseIds.length > 0 && `(${favoriteCourseIds.length})`}</span>
                </Link>
                <Button className='text-black' variant="ghost" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" onClick={closeMenuOnNavigate}>
                <Button className='text-black' variant="secondary">Login</Button>
              </Link>
            )}
          </nav>
        )}
      </header>
    );
  };

  export default Navbar;
