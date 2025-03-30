import Image from 'next/image';
import PerfumeScene from "@/components/three/perfume";

export const SpecificScentSection = () => {
  return (
    <section className='w-full max-w-screen h-full min-h-screen flex items-center justify-between gap-5 overflow-x-hidden'>
      {/* Left Part */}
      <div className='w-[45%] flex flex-col items-center justify-center gap-3 h-full'>
        <p className='uppercase font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[16px] 2xl:text-[32px]'>
          arôme
        </p>
        <h4 className='uppercase text-[#303199] text-[47px] 2xl:text-[94px] font-[family-name:var(--font-saol-display-regular)]'>
          rive gauche
        </h4>
        <PerfumeScene xrot={1.575} yrot={1.317} zrot={-1.575} xpos={0} ypos={0} zpos={0} />
        <div className='group transition-all hover:border- hover:opacity-75 hover:cursor-pointer font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[12px] 2xl:text-[24px] uppercase mt-auto flex flex-col items-center justify-center py-[10px]'>
        Voir le produit
          <hr className='w-[100%] h-[1px] bg-[#303199] mt-2 group-hover:w-[120%] transition-all duration-300' />
        </div>
      </div>
      {/* Right Part */}
      <div className='w-[47%] max-w-screen overflow-x-hidden h-full'>
        <Image
          src={'/assets/Rectangle 5.png'}
          width={800}
          height={800}
          alt='scent bottle'
          className='w-full min-h-screen'
        />
      </div>
    </section>
  );
};
