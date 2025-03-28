import Image from 'next/image';

export const Cta = () => {
  return (
    <section className='flex items-center justify-end gap-[51px]'>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/SearchIcon.png'}
          alt='search icon'
          width={40}
          height={40}
        />
      </button>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/ProfileIcon.png'}
          alt='profile icon'
          width={40}
          height={40}
        />
      </button>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/CartIcon.png'}
          alt='cart icon'
          width={40}
          height={40}
        />
      </button>
    </section>
  );
};
