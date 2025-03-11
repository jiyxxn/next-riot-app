'use client';

import ChampionCard from '@/components/ChampionCard';
import { Champion } from '@/types/Champion';
import { getRotationChampionList } from '@/utils/serverApi';
import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
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
    <section className="text-white-pure pt-40 pb-20 w-1/3 mx-auto min-h-[100vh]">
      <h2 className="font-serif text-6xl text-yellow-light mb-4 text-center font-bold mix-blend-hard-light">
        Rotation Champions
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] gap-4 items-center justify-start mt-20">
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
