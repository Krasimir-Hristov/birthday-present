'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavigationLinks = () => {
  const pathname = usePathname();

  return (
    <div className='flex items-center justify-center w-full bg-purple-600 py-4 shadow-md sticky top-0 z-50'>
      <div className='flex gap-8 max-w-5xl w-full justify-center'>
        <Link
          href='/'
          className={`text-2xl font-bold px-4 py-2 rounded-lg transition ${
            pathname === '/'
              ? 'bg-white text-purple-600'
              : 'text-white hover:bg-white hover:text-purple-600'
          }`}
        >
          Начало
        </Link>
        <Link
          href='/memories'
          className={`text-2xl font-bold px-4 py-2 rounded-lg transition ${
            pathname === '/memories'
              ? 'bg-white text-purple-600'
              : 'text-white hover:bg-white hover:text-purple-600'
          }`}
        >
          Спомени
        </Link>
        <Link
          href='/wishes'
          className={`text-2xl font-bold px-4 py-2 rounded-lg transition ${
            pathname === '/wishes'
              ? 'bg-white text-purple-600'
              : 'text-white hover:bg-white hover:text-purple-600'
          }`}
        >
          Пожелания
        </Link>
        <Link
          href='/gift'
          className={`text-2xl font-bold px-4 py-2 rounded-lg transition ${
            pathname === '/gift'
              ? 'bg-white text-purple-600'
              : 'text-white hover:bg-white hover:text-purple-600'
          }`}
        >
          Забавна игра
        </Link>
      </div>
    </div>
  );
};

export default NavigationLinks;
