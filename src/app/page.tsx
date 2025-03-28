import { HeroSection } from '@/components/sections/HeroSection';
import { NewCollection } from '@/components/sections/NewCollection';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <HeroSection />
      <NewCollection />
    </div>
  );
}
