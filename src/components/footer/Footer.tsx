import { footerNav } from '@/data/data';
import { Navigation } from './Navigation';

export const Footer = () => {
  return (
    <footer className='px-[10%] pt-[5%] w-full h-full flex flex-col items-start justify-between gap-10 bg-[#1A1E18]'>
      {/* First Line */}
      <div className='mt-7 w-full h-full flex items-center justify-between gap-5'>
        {footerNav.map((item, index) => (
          <Navigation key={index} footerNav={item} />
        ))}

        <div className='h-full min-h-[239px] flex flex-col items-start justify-between gap-5'>
          <h6 className='uppercase text-[24px] text-white font-[family-name:var(--font-saol-display-regular)]'>
            Newsletter
          </h6>
          <p className='w-[500px] uppercase text-[12px] text-white font-[family-name:var(--font-sackers-gothic-light)] leading-[2]'>
            {`FAITES PARTIE DE LA COMMUNAUTÉ LAVUE POUR GAGNER UN ACCÈS PRIORITAIRE AU MEILLEUR DE LAVUE, DE L’inspiration ET SERVICES. RECEVEZ AUSSI 10% SUR VOTRE PREMIER PARFUM DE 50ML.`}
          </p>
          <form>
            <input
              type='email'
              className='font-[family-name:var(--font-sackers-gothic-light)] uppercase text-[12px] w-[500px] px-5 py-3 border-b border-white bg-transparent text-white placeholder:text-white/50 focus:outline-none'
              placeholder='adresse mail'
            />
          </form>
        </div>
      </div>
      {/* Second Line */}
      <h4
        style={{ fontSize: '160px' }}
        className='w-full text-center uppercase text-[#F2F2F2] font-[family-name:var(--font-saol-display-regular)]'
      >
        lavue
      </h4>
    </footer>
  );
};
