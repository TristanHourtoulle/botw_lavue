// TODO: Need to align 'LaVue' & 'from Paris' to the 3D model

import {PerfumeSceneOrbital} from "@/components/three/perfumeOrbital";

export const Preview = () => {
  return (
    <section className='my-auto h-full w-full flex flex-row items-center justify-between gap-1 py-[10%] px-[5%] text-black relative'>
      <p className='mb-auto text-center w-[201px] font-[family-name:var(--font-sackers-gothic)] text-[16px] leading-[1.2]'>
        chaque arôme retrace les décades de notre histoire
      </p>
        <PerfumeSceneOrbital xrot={1.575} yrot={1.317} zrot={-1.575} xpos={-2.25} ypos={0.7} zpos={0} />
      <div className='my-20 flex flex-col items-center justify-center relative gap-6'>
        <p className='translate-x-5 text-[80px] text-[#303199] font-[family-name:var(--font-saol-display-regular)] leading-[0.9]'>
          LaVue
        </p>
        <p className='text-[80px] text-[#303199] font-[family-name:var(--font-saol-display-regular)] leading-[0.9] -mt-2'>
          <span className='font-[family-name:var(--font-saol-display-light-italic)]'>
            La
          </span>
          {' nouvelle collection'}
        </p>
        <p className='translate-x-5 text-[80px] text-[#303199] font-[family-name:var(--font-saol-display-light-italic)] leading-[0.9] -mt-2'>
          from Paris
        </p>
      </div>
      <p className='mt-auto text-center max-w-[307px] font-[family-name:var(--font-sackers-gothic)] text-[16px] leading-[1.2]'>
        {
          "les lignes d'un même univers, les contours d'une même ville, d'une même histoire"
        }
      </p>
    </section>
  );
};
