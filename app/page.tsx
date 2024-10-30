import React from 'react';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'>
      <div className='flex items-center justify-between w-full max-w-2xl mb-10'>
        <img
          src='/kid.png' // Снимка на момиче 1
          alt='Момиче 1'
          className='rounded-full border-4 border-white h-24 w-24'
        />
        <img
          src='/kid.png' // Снимка на момиче 2
          alt='Момиче 2'
          className='rounded-full border-4 border-white h-24 w-24'
        />
        <img
          src='/kid.png' // Снимка на момче
          alt='Бебе'
          className='rounded-full border-4 border-white h-24 w-24'
        />
        <img
          src='/kid.png' // Снимка на момче
          alt='Бебе'
          className='rounded-full border-4 border-white h-24 w-24'
        />
      </div>
      <h1 className='text-5xl font-bold mt-10 mb-4'>
        Честит Рожден Ден, Любима!
      </h1>
      <p className='text-lg mb-6 text-center max-w-lg'>
        Добре дошла в тази малка изненада от нас. Тук ще намериш специални
        спомени, поздрави и моменти от цялото ни семейство.
      </p>

      {/* Секция със снимки и сърца */}
      <div className='grid grid-cols-4 gap-6 items-center mb-10'>
        {/* Първа снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg'>
            <HeartIcon className='h-12 w-12 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 1
            alt='Дете 1'
            className='rounded-full border-4 border-white h-24 w-24 mt-2'
          />
        </div>

        {/* Втора снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg'>
            <HeartIcon className='h-12 w-12 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 2
            alt='Дете 2'
            className='rounded-full border-4 border-white h-24 w-24 mt-2'
          />
        </div>

        {/* Трета снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg'>
            <HeartIcon className='h-12 w-12 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 3
            alt='Дете 3'
            className='rounded-full border-4 border-white h-24 w-24 mt-2'
          />
        </div>

        {/* Четвърта снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg'>
            <HeartIcon className='h-12 w-12 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 4
            alt='Дете 4'
            className='rounded-full border-4 border-white h-24 w-24 mt-2'
          />
        </div>
      </div>

      {/* Линкове към другите секции */}
      <div className='flex gap-4 mt-6'>
        <Link
          href='/memories'
          className='bg-white text-purple-600 px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition'
        >
          Спомени
        </Link>
        <Link
          href='/wishes'
          className='bg-white text-purple-600 px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition'
        >
          Пожелания
        </Link>
        <Link
          href='/game'
          className='bg-white text-purple-600 px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition'
        >
          Забавна игра
        </Link>
      </div>
    </div>
  );
}
