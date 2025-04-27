import {PerfumeSceneOrbital} from "@/components/three/perfumeOrbital";

export const Preview = () => {
  return (
    <section className='relative my-auto h-full min-h-screen w-full flex flex-col md:flex-row items-center justify-between gap-1 py-[5%] px-[5%] text-black'>
      <p className='mb-auto text-center w-[201px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[402px] font-[family-name:var(--font-sackers-gothic-light)] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-[1.2]'>
        chaque arôme retrace les décades de notre histoire
      </p>
      <div className="relative w-full flex items-center justify-center">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[840px]">
          {/* Mobile */}
          <div className="block md:hidden">
            <PerfumeSceneOrbital 
              scale={0.15}
              xpos={0}
              ypos={0.5}
              zpos={0}
              xrot={1.575}
              yrot={1.317}
              zrot={-1.575}
            />
          </div>
          {/* Tablet */}
          <div className="hidden md:block lg:hidden">
            <PerfumeSceneOrbital 
              scale={0.2}
              xpos={0}
              ypos={0.6}
              zpos={0}
              xrot={1.575}
              yrot={1.317}
              zrot={-1.575}
            />
          </div>
          {/* Desktop */}
          <div className="hidden lg:block xl:hidden">
            <PerfumeSceneOrbital 
              scale={0.25}
              xpos={0}
              ypos={0.65}
              zpos={0}
              xrot={1.575}
              yrot={1.317}
              zrot={-1.575}
            />
          </div>
          {/* Large Desktop */}
          <div className="hidden xl:block 2xl:hidden">
            <PerfumeSceneOrbital 
              scale={0.28}
              xpos={0}
              ypos={0.68}
              zpos={0}
              xrot={1.575}
              yrot={1.317}
              zrot={-1.575}
            />
          </div>
          {/* XLarge Desktop */}
          <div className="hidden 2xl:block">
            <PerfumeSceneOrbital 
              scale={0.3}
              xpos={0}
              ypos={0.7}
              zpos={0}
              xrot={1.575}
              yrot={1.317}
              zrot={-1.575}
            />
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5 md:gap-10 z-10'>
          <p className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[#303199] font-[family-name:var(--font-saol-display-regular)] leading-[0.9]'>
            LaVue
          </p>
          <p className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[#303199] font-[family-name:var(--font-saol-display-regular)] leading-[0.9] -mt-2'>
            <span className='font-[family-name:var(--font-saol-display-light-italic)]'>
              La
            </span>
            {' nouvelle collection'}
          </p>
          <p className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[#303199] font-[family-name:var(--font-saol-display-light-italic)] leading-[0.9] -mt-2'>
            from Paris
          </p>
        </div>
      </div>
      <p className='mt-auto text-center max-w-[307px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] font-[family-name:var(--font-sackers-gothic-light)] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-[1.2]'>
        {
          "les lignes d'un même univers, les contours d'une même ville, d'une même histoire"
        }
      </p>
    </section>
  );
};