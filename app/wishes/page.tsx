'use client';

import React, { useState } from 'react';

type Wishes = {
  id: number;
  imageSrc: string;
  videoAfterClick: string;
  altText: string;
  title: string;
  description: string;
  detailedText: string;
};

const videoData: Wishes[] = [
  {
    id: 1,
    imageSrc: '/images/kid.png',
    videoAfterClick: '/videos/testvideo.mp4',
    altText: 'Спомен 1',
    title: 'Първата ни семейна разходка на плажа',
    description: 'Това беше прекрасен ден, прекаран на плажа заедно с децата.',
    detailedText:
      'Цял ден прекарахме на плажа, играхме на пясъка и се радвахме на слънцето. Децата бяха много щастливи и това беше един от най-запомнящите се дни за нашето семейство.',
  },
  {
    id: 2,
    imageSrc: '/images/kid.png',
    videoAfterClick: '/videos/testvideo.mp4',
    altText: 'Спомен 2',
    title: 'Празнуване на рождения ден на мама',
    description: 'Събрахме се заедно и направихме този ден специален за мама.',
    detailedText:
      'Този рожден ден беше невероятен - приготвихме изненада, украса и много подаръци. Децата изпяха песнички и всички се радвахме на щастливата усмивка на мама.',
  },
  {
    id: 3,
    imageSrc: '/images/kid.png',
    videoAfterClick: '/videos/testvideo.mp4',
    altText: 'Спомен 3',
    title: 'Първият рожден ден на нашето бебе',
    description:
      'Този момент беше невероятен за цялото ни семейство, пълен с усмивки и смях.',
    detailedText:
      'Първият рожден ден на нашето бебе беше наистина вълшебен момент. Имаше торта, свещички и много подаръци. Усмивките и смехът на нашето малко съкровище направиха деня незабравим.',
  },
];

const WishesPage = () => {
  const [selectedWish, setSelectedWish] = useState<Wishes | null>(null);

  const handleWishClick = (wish: Wishes) => {
    setSelectedWish(wish);
  };

  const handleClose = () => {
    setSelectedWish(null);
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-300 py-8 px-4'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 md:mb-10 text-center'>
        Ευχές για σένα
      </h2>

      <div className='flex flex-col gap-6 md:gap-8 max-w-5xl w-full'>
        {videoData.map((wish) => (
          <div
            key={wish.id}
            className='flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer w-full md:flex-row md:items-center md:justify-between md:p-4'
            onClick={() => handleWishClick(wish)}
          >
            <img
              src={wish.imageSrc}
              alt={wish.altText}
              className='w-full h-48 object-cover rounded-lg md:w-1/3 md:h-auto md:rounded-lg'
            />
            <div className='p-4 w-full text-center md:w-2/3 md:text-left'>
              <p className='text-base sm:text-lg font-semibold text-gray-700'>
                {wish.title}
              </p>
              <p className='text-sm text-gray-500'>{wish.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedWish && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4'>
          <div className='bg-white rounded-lg p-6 md:p-8 max-w-lg w-full flex flex-col items-center'>
            <video
              controls
              className='w-full h-auto max-h-60 sm:max-h-72 md:max-h-80 rounded-lg shadow-lg mb-4 md:mb-6'
            >
              <source src={selectedWish.videoAfterClick} type='video/mp4' />
              Вашият браузър не поддържа видео тага.
            </video>
            <button
              onClick={handleClose}
              className='bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-red-800 transition text-sm md:text-base'
            >
              Κλείσε
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishesPage;
