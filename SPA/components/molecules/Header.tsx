'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  logo?: string;
  phone?: string;
  socialLinks?: {
    icon: string;
    url: string;
  }[];
  navLinks?: {
    text: string;
    href: string;
    dropdownItems?: { text: string; href: string; }[];
  }[];
}

export default function Header({
  logo = '/logo.svg',
  phone = '(123) 456-7890',
  socialLinks = [],
  navLinks = []
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-[10000] w-[94%] max-w-[90rem] transition-all duration-300
        ${isScrolled ? 'top-0 rounded-none w-full max-w-full' : 'top-8 rounded-[clamp(0.75rem,2vw,1.5rem)]'}
        ${isOpen ? 'overflow-visible' : 'overflow-hidden'}
      `}
    >
      <nav className="relative w-full bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-[inherit]">
        {/* Main Navigation Container */}
        <div className="w-full max-w-[90rem] mx-auto px-6 py-[clamp(0.75rem,2vw,1.5rem)] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="w-auto max-w-[12.5rem] h-8 lg:w-[18.4%] lg:max-w-[21.875rem] flex items-center z-10">
            <Image src={logo} alt="Company Logo" width={200} height={32} className="w-auto h-full object-contain" />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-14 h-14 bg-[#1a1a1a] rounded flex items-center justify-center z-10"
          >
            <div className="relative w-[clamp(1.5rem,2vw,1.75rem)] h-4">
              <span className={`absolute left-1/2 h-0.5 w-full bg-[#fafbfc] rounded-sm transition-all duration-300
                ${isOpen 
                  ? 'top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45' 
                  : 'top-0 -translate-x-1/2'}`} 
              />
              <span className={`absolute top-1/2 left-1/2 h-0.5 w-full bg-[#fafbfc] rounded-sm -translate-y-1/2 -translate-x-1/2 transition-all duration-300
                ${isOpen ? 'opacity-0' : ''}`} 
              />
              <span className={`absolute left-1/2 h-0.5 w-full bg-[#fafbfc] rounded-sm transition-all duration-300
                ${isOpen 
                  ? 'top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45' 
                  : 'bottom-0 -translate-x-1/2'}`} 
              />
            </div>
          </button>

          {/* Navigation Links */}
          <div className={`absolute top-full left-0 w-full bg-white lg:static lg:w-auto lg:bg-transparent
            ${isOpen ? 'block' : 'hidden lg:block'}
            lg:transform-none lg:opacity-100
          `}>
            <ul className="flex flex-col lg:flex-row items-center gap-5 p-6 lg:p-0">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full lg:w-auto">
                  {link.dropdownItems ? (
                    <div className="relative group">
                      <button className="flex items-center gap-2 text-gray-800 hover:text-primary">
                        {link.text}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <ul className="hidden group-hover:block absolute left-0 top-full min-w-[12.5rem] bg-white shadow-lg rounded-b-2xl border-b-4 border-primary">
                        {link.dropdownItems.map((item, idx) => (
                          <li key={idx}>
                            <Link 
                              href={item.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white whitespace-nowrap"
                            >
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-800 hover:text-primary transition-colors"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Group */}
          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${phone}`} className="flex items-center gap-2 text-gray-800 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>

            {/* Social Links - Only visible on large desktop */}
            <div className="hidden xl:flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-primary group"
                >
                  <Image 
                    src={link.icon} 
                    alt="Social Icon" 
                    width={12} 
                    height={12}
                    className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:brightness-[10000%] group-hover:grayscale"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 