'use client';

import { getImageProps } from 'next/image';
import { Header } from '../header/Header';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export const HeroSection = () => {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 1920,
    height: 1080,
    src: '/assets/HeroBackground.jpg',
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style: React.CSSProperties = {
    height: '100vh',
    width: '100%',
    backgroundImage,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <section style={style} id='hero'>
      <Header />
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
    </section>
  );
};
