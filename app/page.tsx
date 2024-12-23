import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-green-300 px-4'>
      <h1 className='text-4xl md:text-6xl font-bold mt-10 mb-10 animate-bounce text-center'>
        Χρόνια Πολλά!
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10'>
        {/* Първа снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-4 shadow-lg mb-4'>
            <HeartIcon className='h-20 w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/images/ke3-home.jpg'
            alt='Дете 1'
            className='rounded-full border-4 border-white h-32 w-32 md:h-40 md:w-40 mt-2'
          />
        </div>

        {/* Втора снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-4 shadow-lg mb-4'>
            <HeartIcon className='h-20 w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/images/ke2-home.jpg'
            alt='Дете 2'
            className='rounded-full border-4 border-white h-32 w-32 md:h-40 md:w-40 mt-2'
          />
        </div>

        {/* Трета снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-4 shadow-lg mb-4'>
            <HeartIcon className='h-20 w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/images/ke1-home.jpg'
            alt='Дете 3'
            className='rounded-full border-4 border-white h-32 w-32 md:h-40 md:w-40 mt-2'
          />
        </div>
      </div>
      <h2 className='text-3xl md:text-5xl font-bold text-red-800 mt-10 mb-4 animate-pulse text-center'>
        Χρόνια Πολλά, Αγάπη μου!
      </h2>
      <p className='text-lg md:text-2xl mb-6 text-center font-bold max-w-lg'>
        Καλωσόρισες σε αυτή τη μικρή έκπληξη από εμάς. Εδώ θα βρεις ιδιαίτερες
        αναμνήσεις, ευχές και στιγμές από όλη την οικογένειά μας
      </p>

      {/* Секция със снимки и сърца */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10'>
        {/* Първа снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-4 shadow-lg mb-4'>
            <HeartIcon className='h-20 w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/images/lara-home.jpg'
            alt='Дете 1'
            className='rounded-full border-4 border-white h-32 w-32 md:h-40 md:w-40 mt-2'
          />
        </div>

        {/* Втора снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-4 shadow-lg mb-4'>
            <HeartIcon className='h-20 w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/images/boran-home.jpg'
            alt='Дете 2'
            className='rounded-full border-4 border-white h-32 w-32 md:h-40 md:w-40 mt-2'
          />
        </div>

        {/* Трета снимка със сърце */}
        <div className='flex flex-col items-center'>
          <div className='bg-white/50 rounded-full p-4 shadow-lg mb-4'>
            <HeartIcon className='h-20 w-20 text-red-800 animate-pulse' />
          </div>
          <img
            src='/images/ali-home.jpg'
            alt='Дете 3'
            className='rounded-full border-4 border-white h-32 w-32 md:h-40 md:w-40 mt-2'
          />
        </div>
      </div>
    </div>
  );
}
