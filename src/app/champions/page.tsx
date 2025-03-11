import ChampionCard from '@/components/ChampionCard';
import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/utils/serverApi';
import { Suspense } from 'react';
import Loading from '../loading';

const ChampionsList = async () => {
  const champions: Record<string, Champion> = await fetchChampionList();

  return (
    <section className="text-white-pure pt-40 pb-20 px-20 ">
      <h2 className="font-serif text-6xl text-yellow-light mb-4 text-center font-bold mix-blend-hard-light">
        Champions
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] gap-4 items-center justify-start mt-20">
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
