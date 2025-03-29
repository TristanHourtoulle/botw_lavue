import Image from 'next/image';

export interface ScentType {
  image: string;
  name: string;
  description: string;
}

export type ScentCardProps = {
  scent: ScentType;
};

export const ScentCard = ({ scent }: ScentCardProps) => {
  console.log(scent.image);
  return (
    <section className='min-w-[340px] max-w-[340px] flex flex-col items-start justify-start gap-0'>
      {/* <div
        style={{ backgroundColor: '#F2F2F2', width: '340px', height: '502px' }}
        className='flex items-center justify-center'
      >
        <span className='text-[#A0A0A0]'>Image Placeholder</span>
      </div> */}
      <Image
        src={scent.image}
        alt={scent.name}
        width={340}
        height={502}
        className='w-[340px] h-[400px]'
      />
      <h4 className='mt-5 font-[family-name:var(--font-sackers-gothic-light)] text-[#303199] text-[16px] uppercase'>
        {scent.name}
      </h4>
      <p className='mt-2 font-[family-name:var(--font-sackers-gothic-light)] text-[#4A4A4A] text-[14px] uppercase'>
        {scent.description}
      </p>
    </section>
  );
};
