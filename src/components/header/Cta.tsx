'use client';

import Image from 'next/image';

export const Cta = () => {
  const cartItemCounter: number = 0;
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
      <button className='transition-all hover:opacity-70 hover:cursor-pointer relative'>
        <Image
          src={'/assets/CartIcon.png'}
          alt='cart icon'
          width={40}
          height={40}
        />
        <span className='absolute -top-1 -right-1 bg-[#303199] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center font-[family-name:var(--font-saol-display-regular)]'>
          {cartItemCounter}
        </span>
      </button>
    </section>
  );
};
