'use client';
import React, { useState } from 'react';

interface Video {
  id: number;
  src: string;
  title: string;
  description: string;
}

const videoData: Video[] = [
  {
    id: 1,
    src: '/videos/testvideo.mp4',
    title: 'Αφετηρία',
    description: 'Εδώ ξεκινά η περιπέτειά σου!',
  },
  {
    id: 2,
    src: '/videos/testvideo.mp4',
    title: 'Επόμενο βήμα',
    description: 'Το επόμενο μέρος όπου πρέπει να πας!',
  },
  {
    id: 3,
    src: '/videos/testvideo.mp4',
    title: 'Ο τελικός προορισμός',
    description: 'Εδώ θα βρεις το ιδιαίτερο δώρο!',
  },
];

const Page: React.FC = () => {
  const [unlockedVideos, setUnlockedVideos] = useState<boolean[]>([
    true,
    false,
    false,
  ]);
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);

  const handleVideoEnd = (index: number) => {
    if (index < videoData.length - 1) {
      // Отключи следващото видео
      const newUnlockedVideos = [...unlockedVideos];
      newUnlockedVideos[index + 1] = true;
      setUnlockedVideos(newUnlockedVideos);
    } else {
      // Показване на финалния компонент
      setShowFinalMessage(true);
    }
  };

  const handleCloseFinalMessage = () => {
    setShowFinalMessage(false);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-red-200 to-pink-300 py-16 px-4'>
      {!showFinalMessage ? (
        <>
          <h2 className='text-4xl md:text-5xl font-bold text-blue-900 mb-10 text-center'>
            Βρες το δώρο σου
          </h2>

          <div className='flex flex-col items-center gap-8 w-full max-w-3xl'>
            {videoData.map((video, index) => (
              <div key={video.id} className='flex flex-col items-center w-full'>
                <h3 className='text-2xl font-bold text-purple-800 mb-4'>
                  {video.title}
                </h3>
                <p className='text-lg text-gray-700 mb-4'>
                  {video.description}
                </p>
                {unlockedVideos[index] ? (
                  <video
                    controls
                    className='w-3/4 md:w-2/3 h-auto rounded-lg shadow-lg mb-6'
                    onEnded={() => handleVideoEnd(index)}
                  >
                    <source src={video.src} type='video/mp4' />
                    Вашият браузър не поддържа видео тага.
                  </video>
                ) : (
                  <div className='w-full h-64 flex items-center justify-center bg-gray-300 rounded-lg mb-6'>
                    <span className='text-6xl text-gray-700'>🔒</span>
                  </div>
                )}
                {!unlockedVideos[index] && (
                  <p className='text-red-500 mt-4'>
                    Αυτό το βίντεο είναι ακόμα κλειδωμένο. Παρακαλώ,
                    παρακολούθησε το προηγούμενο βίντεο!
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center mt-16 bg-white rounded-lg p-8 shadow-lg relative'>
          <button
            onClick={handleCloseFinalMessage}
            className='absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl'
          >
            ✖
          </button>
          <h2 className='text-5xl font-bold text-red-600 mb-6'>
            Честит Рожден Ден!
          </h2>
          <img
            src='/images/family.jpg' // Път до изображението, което искаш да покажеш
            alt='Семейна снимка'
            className='w-80 h-auto rounded-lg shadow-lg'
          />
        </div>
      )}
    </div>
  );
};

export default Page;
