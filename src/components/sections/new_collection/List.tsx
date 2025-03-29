import Image from 'next/image';
import { ScentCard, ScentType } from './ScentCard';

const scentList: ScentType[] = [
  {
    image: '/assets/tempBgScent.png',
    name: 'Rue de Charonne',
    description: 'Cèdre, Pamplemousse, Mousse',
  },
  {
    image: '/assets/tempBgScent.png',
    name: 'Faubourg Montmartre',
    description: 'CANELLE, BENJOIN, BIGARADE',
  },
  {
    image: '/assets/tempBgScent.png',
    name: 'Rive Gauche',
    description: 'SANTAL, VANILLE, B...',
  },
];

export const List = () => {
  return (
    <section className='w-full max-w-screen h-full min-h-screen flex items-start justify-between gap-5 ml-[15%] overflow-x-hidden'>
      {/* Left Part */}
      <section className='min-h-[477px] w-full max-w-[450px] flex flex-col items-start justify-start gap-3'>
        <h3 className='text-[#303199] text-[36px] font-[family-name:var(--font-saol-display-regular)]'>
          Nouvelle collection
        </h3>
        <p className='mt-8 text-black max-w-[436px] text-[16px] font-[family-name:var(--font-sackers-gothic-light)]'>
          {
            'Nos origines, profondément ancrées dans la ville de Paris, sont enfin mises en valeur.'
          }
        </p>
        <p className='text-black max-w-[436px] text-[16px] font-[family-name:var(--font-sackers-gothic-light)]'>
          {
            'Des saveurs de notre magasin icônique rue de charonne jusqu’aux doux arômes des boulangeries rue de montmartre, retrouvez les odeurs caractéristiques de la capitale.'
          }
        </p>
        <button className='text-black group hover:cursor-pointer font-[family-name:var(--font-sackers-gothic-light)] text-[16px] uppercase mt-auto flex items-center justify-center py-[20px] px-[31px] border border-[##D0D0D0] gap-[31px]'>
          Voir la collection
          <Image
            className='transition-all group-hover:translate-x-1'
            src={'/assets/Arrow.svg'}
            alt='arrow'
            width={23}
            height={23}
          />
        </button>
      </section>
      {/* Right Part */}
      <section className='ml-3 flex items-center justify-start gap-1 w-full overflow-x-hidden'>
        {scentList.map((scent, index) => (
          <ScentCard key={index} scent={scent} />
        ))}
      </section>
    </section>
  );
};
