"use client"
import Image from 'next/image';
import { ScentCard, ScentType } from './ScentCard';
import { useState, useRef, useEffect } from 'react';

const scentList: ScentType[] = [
  {
    image: '/assets/image.png',
    name: 'Rue de Charonne',
    description: 'Cèdre, Pamplemousse, Mousse',
  },
  {
    image: '/assets/image.png',
    name: 'Faubourg Montmartre',
    description: 'CANELLE, BENJOIN, BIGARADE',
  },
  {
    image: '/assets/image.png',
    name: 'Rive Gauche',
    description: 'SANTAL, VANILLE, B...',
  },
];

export const List = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < scentList.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < scentList.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseleave', handleMouseLeave);
    return () => window.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className='w-full h-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-9 px-4 sm:px-6 md:px-8 lg:px-[5%] 2xl:px-[10%] overflow-x-hidden my-auto'>
      {/* Left Part */}
      <div className='min-h-[300px] sm:min-h-[400px] md:min-h-[477px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[773px] w-full md:w-[33%] flex flex-col items-start justify-start gap-3'>
        <h3 className='text-[#303199] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] 2xl:text-[60px] font-[family-name:var(--font-saol-display-regular)]'>
          Nouvelle collection
        </h3>
        <p className='mt-4 sm:mt-6 md:mt-8 text-black max-w-full md:max-w-[436px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[800px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] font-[family-name:var(--font-sackers-gothic-light)]'>
          Nos origines, profondément ancrées dans la ville de Paris, sont enfin mises en valeur.
        </p>
        <p className='text-black max-w-full md:max-w-[436px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[800px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] font-[family-name:var(--font-sackers-gothic-light)]'>
          Des saveurs de notre magasin icônique rue de charonne jusqu&apos;aux doux arômes des boulangeries rue de montmartre, retrouvez les odeurs caractéristiques de la capitale.
        </p>
        <button className='text-black group hover:cursor-pointer font-[family-name:var(--font-sackers-gothic-light)] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] uppercase mt-auto flex items-center justify-center py-[10px] sm:py-[12px] md:py-[15px] lg:py-[18px] xl:py-[22px] 2xl:py-[25px] px-[15px] sm:px-[18px] md:px-[20px] lg:px-[25px] xl:px-[30px] 2xl:px-[40px] border border-[#D0D0D0] gap-[20px] sm:gap-[25px] md:gap-[31px]'>
          Voir la collection
          <Image
            className='transition-all group-hover:translate-x-1 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px]'
            src={'/assets/Arrow.svg'}
            alt='arrow'
            width={23}
            height={23}
          />
        </button>
      </div>
      {/* Right Part */}
      <div 
        ref={containerRef}
        className='w-full md:w-[60%] 2xl:w-[60%] overflow-x-auto md:overflow-x-scroll flex items-center justify-start gap-1 md:ml-3 scrollbar-hide'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className='flex items-center justify-start gap-1 min-w-max md:min-w-0'>
          {scentList.map((scent, index) => (
            <ScentCard key={index} scent={scent} />
          ))}
        </div>
      </div>
    </div>
  );
};
