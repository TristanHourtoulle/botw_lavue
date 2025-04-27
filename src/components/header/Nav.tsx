import Link from 'next/link';

export const Nav = () => {
  const navStyle: string =
    'uppercase text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-[family-name:var(--font-sackers-gothic)] transition-all hover:opacity-80 hover:translate-y-[-4px]';
  return (
    <nav className='hidden lg:flex w-full items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-[80px]'>
      <Link href='#' className={navStyle}>
        nouveautés
      </Link>
      <Link href='#' className={navStyle}>
        collections
      </Link>
      <Link href='#' className={navStyle}>
        journal
      </Link>
      <Link href={'#'} className={navStyle}>
        {"l'univers"}
      </Link>
    </nav>
  );
};
