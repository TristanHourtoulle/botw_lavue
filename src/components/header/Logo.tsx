export const Logo = () => {
  const ScrollToHero = () => {
    const hero = document.getElementById('hero');
    hero?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <h2
      onClick={ScrollToHero}
      className='font-[family-name:var(--font-saol-display-regular)] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[80px] hover:cursor-pointer'
    >
      LAVUE
    </h2>
  );
};
