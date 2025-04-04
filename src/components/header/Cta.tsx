'use client';

import Image from 'next/image';

export const Cta = () => {
  const cartItemCounter: number = 0;
  return (
    <section className='w-fit flex items-center justify-end gap-[51px]'>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/SearchIcon.png'}
          alt='search icon'
          width={40}
          height={40}
          className='2xl:w-[60px] 2xl:h-[60px] object-contain'
        />
      </button>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/ProfileIcon.png'}
          alt='profile icon'
          width={40}
          height={40}
          className='2xl:w-[60px] 2xl:h-[60px] object-contain'
        />
      </button>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer relative'>
        <Image
          src={'/assets/CartIcon.png'}
          alt='cart icon'
          width={40}
          height={40}
          className='2xl:w-[60px] 2xl:h-[60px] object-contain'
        />
        <span className='absolute -top-1 -right-1 2xl:top-2 2xl:-right-2 bg-[#303199] text-white text-[10px] 2xl:text-[16px] font-bold rounded-full w-4 h-4 2xl:w-6 2xl:h-6 flex items-center justify-center font-[family-name:var(--font-saol-display-regular)]'>
          {cartItemCounter}
        </span>
      </button>
    </section>
  );
};
