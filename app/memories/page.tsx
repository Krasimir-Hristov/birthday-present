'use client';
import React, { useState } from 'react';

type Memory = {
  id: number;
  imageSrc: string;
  imageAfterClick: string;
  altText: string;
  title: string;
  description: string;
  detailedText: string;
};

const memoriesData: Memory[] = [
  {
    id: 1,
    imageSrc: '/kid.png',
    imageAfterClick: '/magicBook.png',
    altText: 'Спомен 1',
    title: 'Първата ни семейна разходка на плажа',
    description: 'Това беше прекрасен ден, прекаран на плажа заедно с децата.',
    detailedText:
      'Цял ден прекарахме на плажа, играхме на пясъка и се радвахме на слънцето. Децата бяха много щастливи и това беше един от най-запомнящите се дни за нашето семейство.',
  },
  {
    id: 2,
    imageSrc: '/kid.png',
    imageAfterClick: '/magicBook.png',
    altText: 'Спомен 2',
    title: 'Празнуване на рождения ден на мама',
    description: 'Събрахме се заедно и направихме този ден специален за мама.',
    detailedText:
      'Този рожден ден беше невероятен - приготвихме изненада, украса и много подаръци. Децата изпяха песнички и всички се радвахме на щастливата усмивка на мама.',
  },
  {
    id: 3,
    imageSrc: '/kid.png',
    imageAfterClick: '/magicBook.png',
    altText: 'Спомен 3',
    title: 'Първият рожден ден на нашето бебе',
    description:
      'Този момент беше невероятен за цялото ни семейство, пълен с усмивки и смях.',
    detailedText:
      'Първият рожден ден на нашето бебе беше наистина вълшебен момент. Имаше торта, свещички и много подаръци. Усмивките и смехът на нашето малко съкровище направиха деня незабравим.',
  },
];

const MemoriesPage = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory);
  };

  const handleClose = () => {
    setSelectedMemory(null);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-red-200 to-pink-300 py-16 px-4'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-red-800 mb-10'>
          Нашите незабравими спомени
        </h2>

        {/* Галерия със снимки */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full'>
          {memoriesData.map((memory) => (
            <div
              key={memory.id}
              className='flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer'
              onClick={() => handleMemoryClick(memory)}
            >
              <img
                src={memory.imageSrc}
                alt={memory.altText}
                className='w-full h-64 object-cover'
              />
              <div className='p-4'>
                <p className='text-lg font-semibold text-gray-700'>
                  {memory.title}
                </p>
                <p className='text-sm text-gray-500'>{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модален прозорец за подробности за спомена */}
      {selectedMemory && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white rounded-lg p-8 max-w-3xl w-full'>
            <h3 className='text-3xl font-bold text-red-800 mb-4'>
              {selectedMemory.title}
            </h3>
            <img
              src={selectedMemory.imageAfterClick}
              alt={selectedMemory.altText}
              className='w-full h-64 object-cover mb-4'
            />
            <p className='text-lg text-gray-700 mb-6'>
              {selectedMemory.detailedText}
            </p>
            <button
              onClick={handleClose}
              className='bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition'
            >
              Затвори
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoriesPage;
