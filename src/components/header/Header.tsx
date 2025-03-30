import { Cta } from './Cta';
import { Logo } from './Logo';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <section className='w-full flex items-center justify-between px-[5%] 2xl:py-10'>
      <Logo />
      <Nav />
      <Cta />
    </section>
  );
};
