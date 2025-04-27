import { Cta } from './Cta';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  return (
    <section className='w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[5%] 2xl:px-[5%] py-4 sm:py-6 md:py-8 lg:py-10 2xl:py-10'>
      <Logo />
      <Nav />
      <HamburgerMenu />
      <Cta />
    </section>
  );
};
