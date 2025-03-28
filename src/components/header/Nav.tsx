import Link from 'next/link';

export const Nav = () => {
  const navStyle: string =
    'uppercase text-[12px] font-[family-name:var(--font-sackers-gothic)] transition-all hover:opacity-80 hover:translate-y-[-4px]';
  return (
    <nav className='w-full flex items-center justify-center gap-[80px]'>
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
