import { BASE_URL } from '@/constants';
import { ChampionDetail } from '@/types/Champion';
import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const championData: Record<string, ChampionDetail> | null =
    await fetchChampionDetail(params.id);

  if (!championData) return <div>챔피언 데이터를 찾을 수 없습니다.</div>;

  const champion = championData[params.id];

  return (
    <section className="pt-[80px]">
      <div
        className="relative w-full pt-48 px-20 min-h-[calc(100vh_-_80px)]"
        style={{
          background: `
      linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 50%),
      url('${BASE_URL.CHAMPION_SPLASH_IMAGE}/${champion.id}_0.jpg') no-repeat center center / cover
    `,
        }}>
        <div className="relative z-10 text-white mix-blend-color-dodge">
          <h2 className="flex flex-col gap-2 text-yellow-light">
            <span className="text-8xl font-serif font-bold">{champion.id}</span>
            <span className="text-3xl font-bold ml-4">
              {champion.name}{' '}
              <span className="text-lg font-semibold ml-2 tracking-tight">
                {champion.title}
              </span>
            </span>
          </h2>
        </div>
        <div className="w-1/3 px-4 py-6">
          <p className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] text-white-light ">
            {champion.lore}
          </p>

          <ul className="flex gap-4 mt-10">
            <li>
              <Image
                src={`${BASE_URL.RIOT_IMAGE}/passive/${champion.passive.image.full}`}
                width={60}
                height={60}
                alt={champion.passive.name}
                className="rounded-sm"
              />
            </li>
            {champion.spells.map((spell) => (
              <li key={spell.id}>
                <Image
                  src={`${BASE_URL.RIOT_IMAGE}/spell/${spell.image.full}`}
                  width={60}
                  height={60}
                  alt={spell.name}
                  className="rounded-sm"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChampionDetailPage;
