'use client';

import Image from 'next/image';

export const Cta = () => {
  const cartItemCounter: number = 0;
  return (
    <section className='w-fit flex items-center justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[51px]'>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/SearchIcon.png'}
          alt='search icon'
          width={24}
          height={24}
          className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-[60px] 2xl:h-[60px] object-contain'
        />
      </button>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer'>
        <Image
          src={'/assets/ProfileIcon.png'}
          alt='profile icon'
          width={24}
          height={24}
          className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-[60px] 2xl:h-[60px] object-contain'
        />
      </button>
      <button className='transition-all hover:opacity-70 hover:cursor-pointer relative'>
        <Image
          src={'/assets/CartIcon.png'}
          alt='cart icon'
          width={24}
          height={24}
          className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-[60px] 2xl:h-[60px] object-contain'
        />
        <span className='absolute -top-1 -right-1 sm:top-0 sm:-right-1 md:top-0 md:-right-1 lg:top-0 lg:-right-1 xl:top-0 xl:-right-1 2xl:top-2 2xl:-right-2 bg-[#303199] text-white text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[16px] font-bold rounded-full w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 flex items-center justify-center font-[family-name:var(--font-saol-display-regular)]'>
          {cartItemCounter}
        </span>
      </button>
    </section>
  );
};
