import React from 'react';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-green-300 px-4'>
      <h1 className='text-4xl md:text-6xl font-bold mt-10 mb-10 animate-bounce text-center'>
        Честит Рожден Ден!
      </h1>
      <div className='flex flex-wrap items-center justify-center w-full max-w-2xl mb-10 gap-4'>
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
      <h2 className='text-3xl md:text-5xl font-bold text-red-800 mt-10 mb-4 animate-pulse text-center'>
        Честит Рожден Ден, Любима!
      </h2>
      <p className='text-lg md:text-2xl mb-6 text-center font-bold max-w-lg'>
        Добре дошла в тази малка изненада от нас. Тук ще намериш специални
        спомени, поздрави и моменти от цялото ни семейство.
      </p>

      {/* Секция със снимки и сърца */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center mb-10'>
        {/* Първа снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg mb-3'>
            <HeartIcon className='h-16 w-16 md:h-20 md:w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 1
            alt='Дете 1'
            className='rounded-full border-4 border-white h-20 w-20 md:h-24 md:w-24 mt-2'
          />
        </div>

        {/* Втора снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg mb-3'>
            <HeartIcon className='h-16 w-16 md:h-20 md:w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 2
            alt='Дете 2'
            className='rounded-full border-4 border-white h-20 w-20 md:h-24 md:w-24 mt-2'
          />
        </div>

        {/* Трета снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg mb-3'>
            <HeartIcon className='h-16 w-16 md:h-20 md:w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 3
            alt='Дете 3'
            className='rounded-full border-4 border-white h-20 w-20 md:h-24 md:w-24 mt-2'
          />
        </div>

        {/* Четвърта снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-2 shadow-lg mb-3'>
            <HeartIcon className='h-16 w-16 md:h-20 md:w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/kid.png' // Снимка 4
            alt='Дете 4'
            className='rounded-full border-4 border-white h-20 w-20 md:h-24 md:w-24 mt-2'
          />
        </div>
      </div>
    </div>
  );
}
