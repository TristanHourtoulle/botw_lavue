import Image from 'next/image';

export const SpecificScentSection = () => {
  return (
    <section className='w-full max-w-screen h-full min-h-screen flex items-center justify-between gap-5 ml-[15%] overflow-x-hidden'>
      {/* Left Part */}
      <div className='w-full max-w-[450px] flex flex-col items-center justify-center gap-3 h-full'>
        <p className='uppercase font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[16px]'>
          arôme
        </p>
        <h4 className='uppercase text-[#303199] text-[40px] font-[family-name:var(--font-saol-display-regular)]'>
          rive gauche
        </h4>
        <Image
          src={'/assets/Bottle-Fragrance-trsp 2.svg'}
          alt='scent bottle'
          width={300}
          height={300}
          className='w-[300px] h-[400px]'
        />
        <button className='transition-all hover:opacity-75 hover:cursor-pointer font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[12px] uppercase mt-auto flex items-center justify-center border-b border-[#303199] py-[10px]'>
          Voir le produit
        </button>
      </div>
      {/* Right Part */}
      <div className='ml-[10%] w-full max-w-screen overflow-x-hidden h-full'>
        <Image
          src={'/assets/Rectangle 5.png'}
          width={800}
          height={800}
          alt='scent bottle'
          className='w-full h-[800px]'
        />
      </div>
    </section>
  );
};
