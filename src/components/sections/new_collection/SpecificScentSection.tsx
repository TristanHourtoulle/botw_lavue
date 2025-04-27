import Image from 'next/image';
import PerfumeScene from "@/components/three/perfume";

export const SpecificScentSection = () => {
  return (
    <div className='w-full max-w-screen h-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-5 md:px-10 overflow-x-hidden'>
      {/* Left Part */}
      <div className='w-full md:w-[40%] flex flex-col items-center gap-5 h-full py-10 md:py-0'>
        {/* Text Section */}
        <div className='flex flex-col items-center gap-3 w-full'>
          <p className='uppercase font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[32px]'>
            arôme
          </p>
          <h4 className='uppercase text-[#303199] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[47px] xl:text-[70px] 2xl:text-[94px] font-[family-name:var(--font-saol-display-regular)]'>
            rive gauche
          </h4>
        </div>

        {/* 3D Model Section */}
        <div className='w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] relative'>
          <div className='absolute inset-0'>
            <div className='w-full h-full'>
              <PerfumeScene xrot={1.575} yrot={1.317} zrot={-1.575} xpos={0} ypos={0} zpos={0} />
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className='group transition-all hover:border- hover:opacity-75 hover:cursor-pointer font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] uppercase flex flex-col items-center justify-center py-[8px] sm:py-[10px]'>
          Voir le produit
          <hr className='w-[100%] h-[1px] bg-[#303199] mt-2 group-hover:w-[120%] transition-all duration-300' />
        </div>
      </div>

      {/* Right Part */}
      <div className='w-full md:w-[55%] max-w-screen overflow-x-hidden h-[300px] sm:h-[400px] md:h-full relative'>
        <Image
          src={'/assets/image_lastsection.png'}
          width={800}
          height={800}
          alt='scent bottle'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};
