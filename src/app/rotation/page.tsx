'use client';

import ChampionCard from '@/components/ChampionCard';
import { Champion } from '@/types/Champion';
import { getRotationChampionList } from '@/utils/serverApi';
import { useQuery } from '@tanstack/react-query';
import Loading from '../loading';

const RotationList = () => {
  const {
    data: rotationChampions,
    isLoading,
    isError,
  } = useQuery<Champion[]>({
    queryKey: ['rotationChampionList'],
    queryFn: getRotationChampionList,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p> 데이터를 불러오는 중 오류가 발생했습니다. </p>;

  return (
    <section className="min-h-screen px-10 pb-20 pt-28 lg:px-20 lg:pt-40 text-white-pure">
      <h2 className="mb-4 font-serif text-4xl font-bold text-center lg:text-6xl text-yellow-light mix-blend-hard-light">
        Rotation Champions
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(60px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] gap-2 lg:gap-4 items-center justify-start mt-14 lg:mt-20">
        {rotationChampions?.map((champion) => (
          <ChampionCard
            key={champion.key}
            id={champion.id}
            champion={champion}
          />
        ))}
      </ul>
    </section>
  );
};

export default RotationList;
