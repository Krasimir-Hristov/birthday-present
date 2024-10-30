import React from 'react';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'>
      <h1 className='text-5xl font-bold mt-10 mb-4'>
        Честит Рожден Ден, Любима!
      </h1>
      <p className='text-lg mb-6 text-center max-w-lg'>
        Добре дошла в тази малка изненада от нас. Тук ще намериш специални
        спомени, поздрави и моменти от цялото ни семейство.
      </p>
      <HeartIcon className='h-20 w-20 text-pink-200 mb-4 animate-pulse' />

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
