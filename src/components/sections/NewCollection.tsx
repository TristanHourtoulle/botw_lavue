import { List } from './new_collection/List';
import { Preview } from './new_collection/Preview';
import { SpecificScentSection } from './new_collection/SpecificScentSection';
import {Video} from "@/components/sections/new_collection/Video";

export const NewCollection = () => {
  return (
    <section className='bg-white w-full min-h-screen flex flex-col items-center justify-center gap-10 py-10'>
      <Preview />
        <Video/>
      <List />
      <SpecificScentSection />
    </section>
  );
};
