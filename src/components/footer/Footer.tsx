import { footerNav } from '@/data/data';
import { Navigation } from './Navigation';

export const Footer = () => {
  return (
    <footer className='px-4 sm:px-6 md:px-8 lg:px-[5%] 2xl:px-[10%] pt-10 sm:pt-16 md:pt-20 lg:pt-24 2xl:pt-[100px] w-full h-full flex flex-col items-start justify-between gap-5 sm:gap-7 md:gap-8 lg:gap-9 2xl:gap-10 bg-[#1A1E18]'>
      {/* First Line */}
      <div className='mt-4 sm:mt-5 md:mt-6 lg:mt-7 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-7 2xl:gap-8'>
        <div className='flex flex-col sm:flex-row items-center justify-start gap-10 sm:gap-20 md:gap-30 lg:gap-40 xl:gap-[200px] 2xl:gap-[300px] w-full h-full'>
          {footerNav.map((item, index) => (
            <Navigation key={index} footerNav={item} />
          ))}
        </div>

        <div className='h-full min-h-[200px] sm:min-h-[220px] md:min-h-[230px] lg:min-h-[235px] 2xl:min-h-[239px] flex flex-col items-start justify-between gap-3 sm:gap-4 md:gap-5'>
          <h6 className='uppercase text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] 2xl:text-[24px] text-white font-[family-name:var(--font-saol-display-regular)]'>
            Newsletter
          </h6>
          <p className='w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] 2xl:w-[650px] uppercase text-[10px] sm:text-[11px] md:text-[12px] text-white font-[family-name:var(--font-sackers-gothic-light)] leading-[1.5] sm:leading-[1.8] md:leading-[2]'>
            {`FAITES PARTIE DE LA COMMUNAUTÉ LAVUE POUR GAGNER UN ACCÈS PRIORITAIRE AU MEILLEUR DE LAVUE, DE L'INSPIRATION ET SERVICES. RECEVEZ AUSSI 10% SUR VOTRE PREMIER PARFUM DE 50ML.`}
          </p>
          <form className='w-full'>
            <input
              type='email'
              className='w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] 2xl:w-[650px] font-[family-name:var(--font-sackers-gothic-light)] uppercase text-[10px] sm:text-[11px] md:text-[12px] px-3 sm:px-4 md:px-5 py-2 sm:py-3 border-b border-white bg-transparent text-white placeholder:text-white/50 focus:outline-none'
              placeholder='adresse mail'
            />
          </form>
        </div>
      </div>
      {/* Second Line */}
      <h4
        style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}
        className='w-full text-center uppercase text-[#F2F2F2] font-[family-name:var(--font-saol-display-regular)] pt-5 sm:pt-10 md:pt-15 lg:pt-20 2xl:pt-[75px]'
      >
        lavue
      </h4>
    </footer>
  );
};
