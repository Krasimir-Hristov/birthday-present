import React from 'react';
import NavigationLinks from '../components/NavigationLinks';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-red-200 to-pink-300 py-16 px-4'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-red-800 mb-10'>
          Нашите незабравими спомени
        </h2>

        {/* Галерия със снимки */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full'>
          {/* Снимка 1 */}
          <div className='flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden'>
            <img
              src='/kid.png' // Път до снимката
              alt='Спомен 1'
              className='w-full h-64 object-cover'
            />
            <div className='p-4'>
              <p className='text-lg font-semibold text-gray-700'>
                Първата ни семейна разходка на плажа
              </p>
              <p className='text-sm text-gray-500'>
                Това беше прекрасен ден, прекаран на плажа заедно с децата.
              </p>
            </div>
          </div>

          {/* Снимка 2 */}
          <div className='flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden'>
            <img
              src='/kid.png' // Път до снимката
              alt='Спомен 2'
              className='w-full h-64 object-cover'
            />
            <div className='p-4'>
              <p className='text-lg font-semibold text-gray-700'>
                Празнуване на рождения ден на мама
              </p>
              <p className='text-sm text-gray-500'>
                Събрахме се заедно и направихме този ден специален за мама.
              </p>
            </div>
          </div>

          {/* Снимка 3 */}
          <div className='flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden'>
            <img
              src='/kid.png' // Път до снимката
              alt='Спомен 3'
              className='w-full h-64 object-cover'
            />
            <div className='p-4'>
              <p className='text-lg font-semibold text-gray-700'>
                Първият рожден ден на нашето бебе
              </p>
              <p className='text-sm text-gray-500'>
                Този момент беше невероятен за цялото ни семейство, пълен с
                усмивки и смях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
