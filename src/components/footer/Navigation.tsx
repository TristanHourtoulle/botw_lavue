import { FooterNavType } from '@/data/data';
import Link from 'next/link';

export type NavigationProps = {
  footerNav: FooterNavType;
};

export const Navigation = ({ footerNav }: NavigationProps) => {
  return (
    <div className='flex flex-col items-start justify-center gap-[50px]'>
      <h5 className='uppercase text-[18px] text-white font-[family-name:var(--font-saol-display-regular)]'>
        {footerNav.title}
      </h5>
      <div className='flex flex-col items-start justify-center gap-[30px]'>
        {footerNav.content.map((item, index) => (
          <Link
            key={index}
            href={`/${item.href}`}
            className='uppercase text-white text-[12px] font-[family-name:var(--font-sackers-gothic-light)]'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
