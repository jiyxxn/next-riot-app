import ChampionCard from '@/components/ChampionCard';
import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/utils/serverApi';
import { Suspense } from 'react';
import Loading from '../loading';

const ChampionsList = async () => {
  const champions: Record<string, Champion> = await fetchChampionList();

  return (
    <section className="px-10 pb-20 pt-28 lg:px-20 lg:pt-40 text-white-pure">
      <h2 className="mb-4 font-serif text-4xl font-bold text-center lg:text-6xl text-yellow-light">
        Champions
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(60px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] gap-2 lg:gap-4 items-center justify-start mt-14 lg:mt-20">
        <Suspense fallback={<Loading />}>
          {Object.entries(champions).map(([id, champion]) => (
            <ChampionCard key={id} id={id} champion={champion} />
          ))}
        </Suspense>
      </ul>
    </section>
  );
};

export default ChampionsList;
