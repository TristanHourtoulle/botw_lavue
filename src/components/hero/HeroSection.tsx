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
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
        }}
      >
        Hero section
      </h1>
    </section>
  );
};
