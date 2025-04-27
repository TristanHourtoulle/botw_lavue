'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const navStyle: string =
    'uppercase text-[14px] font-[family-name:var(--font-sackers-gothic)] transition-all hover:opacity-80 text-black';

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="lg:hidden relative">
      <button
        onClick={toggleMenu}
        className="p-2 z-50 relative"
        aria-label="Menu"
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5 bg-black' : 'translate-y-0 bg-white'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
              isOpen ? 'opacity-0 bg-black' : 'opacity-100 bg-white'
            }`}
            style={{ top: '8px' }}
          />
          <span
            className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
              isOpen ? '-rotate-45 translate-y-2.5 bg-black' : 'translate-y-4 bg-white'
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm transform transition-all duration-300 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8 pt-20">
          <Link href='#' className={`${navStyle} text-2xl hover:text-gray-600`} onClick={() => setIsOpen(false)}>
            nouveautés
          </Link>
          <Link href='#' className={`${navStyle} text-2xl hover:text-gray-600`} onClick={() => setIsOpen(false)}>
            collections
          </Link>
          <Link href='#' className={`${navStyle} text-2xl hover:text-gray-600`} onClick={() => setIsOpen(false)}>
            journal
          </Link>
          <Link href='#' className={`${navStyle} text-2xl hover:text-gray-600`} onClick={() => setIsOpen(false)}>
            {"l'univers"}
          </Link>
        </div>
      </div>
    </div>
  );
}; 