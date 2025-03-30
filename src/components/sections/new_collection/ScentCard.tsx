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
    <section className='w-full min-w-[400px] max-w-[600px] 2xl:min-w-[600px] 2xl:max-w-[900px] h-full flex flex-col items-start justify-start gap-0'>
      <Image
        src={scent.image}
        alt={scent.name}
        width={600}
        height={600}
        className='w-[400px] h-[400px] 2xl:w-[700px] 2xl:h-[700px] object-fill'
      />
      <h4 className='mt-5 font-[family-name:var(--font-sackers-gothic)] text-[#303199] text-[16px] uppercase'>
        {scent.name}
      </h4>
      <p className='mt-2 font-[family-name:var(--font-sackers-gothic-light)] text-[#4A4A4A] text-[14px] uppercase'>
        {scent.description}
      </p>
    </section>
  );
};
