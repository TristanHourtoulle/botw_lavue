'use client';

import { Header } from '../header/Header';
import { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(error => {
      console.log("Erreur de lecture vidéo:", error);
    });

    return () => {
      video.pause();
      video.src = '';
    };
  }, []);

  return (
      <section className="relative h-screen w-screen overflow-hidden" id='hero'>
          <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
              playsInline
              muted
              loop
              autoPlay
          >
              <source src="/assets/HERO.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"/>
          <div className="relative z-10 flex flex-col h-full">
              <Header/>
              <div className='flex flex-col items-center justify-center flex-1 px-4 gap-1 pb-10 2xl:pb-[5%]'>
                  <p className='font-[family-name:var(--font-sackers-gothic-light)] text-[14px] 2xl:text-[21px]'>
                      NOTRE NOUVELLE COLLECTION
                  </p>
                  <h1 className='font-[family-name:var(--font-saol-display-regular)] text-white 2xl:text-[110px] xl:text-[80px] sm:text-[50px] md:text-[60px] lg:text-[70px] '>
                      Saveur des Rives
                  </h1>
                  <p className='font-[family-name:var(--font-saol-display-light-italic)] text-[32px] 2xl:text-[40px]'>
                      Eau de parfum
                  </p>
              </div>
          </div>
      </section>
  );
};
