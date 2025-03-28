import { getImageProps } from 'next/image';

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
    width: '100vw',
    backgroundImage,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  };

  return (
    <section style={style}>
      <div className='flex flex-col items-center justify-center w-full h-full gap-1'>
        <p className='font-[family-name:var(--font-sackers-gothic-std)] text-[14px]'>
          NOTRE NOUVELLE COLLECTION
        </p>
        <h1 className='font-[family-name:var(--font-saol-display-regular)] text-white xl:text-[80px] sm:text-[50px] md:text-[60px] lg:text-[70px] '>
          Saveur des Rives
        </h1>
        <p className='font-[family-name:var(--font-saol-display-light-italic)] text-[32px]'>
          Eau de parfum
        </p>
      </div>
    </section>
  );
};
