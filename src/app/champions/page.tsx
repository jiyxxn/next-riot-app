import { RIOT_IMAGE_BASE_URL } from '@/constants';
import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

const ChampionsList = async () => {
  const champions: Record<string, Champion> | null = await fetchChampionList();

  if (!champions) return <div>챔피언 데이터를 불러오지 못했습니다.</div>;

  return (
    <section className="text-white-pure pt-40 pb-20 px-20 ">
      <h2 className="font-serif text-6xl text-yellow-light mb-4 text-center font-bold mix-blend-hard-light">
        Champions
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] gap-4 items-center justify-start mt-20">
        {Object.entries(champions).map(([id, champ]) => (
          <li key={id}>
            <Link href={`/champions/${id}`}>
              <Image
                src={`${RIOT_IMAGE_BASE_URL}/champion/${champ.image.full}`}
                width={90}
                height={90}
                alt={champ.name}
              />
              {/* <span>{champ.name}</span>
              <span>{champ.title}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChampionsList;
