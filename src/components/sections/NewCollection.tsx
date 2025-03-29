import { List } from './new_collection/List';
import { Preview } from './new_collection/Preview';

export const NewCollection = () => {
  return (
    <section className='bg-white w-full min-h-screen flex flex-col items-center justify-center gap-1 py-10'>
      <Preview />
      <List />
    </section>
  );
};
