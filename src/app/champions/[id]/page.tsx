import { BASE_URL } from '@/constants';
import { ChampionDetail } from '@/types/Champion';
import removeHtmlTags from '@/utils/removeHtmlTags';
import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const championData: Record<string, ChampionDetail> =
    await fetchChampionDetail(params.id);

  const champion = championData[params.id];

  return (
    <section className="pt-[60px] lg:pt-[80px]">
      <div
        className="relative w-full pb-20 pt-24 px-8 md:pt-48 md:px-20 min-h-[calc(100vh_-_60px)] lg:min-h-[calc(100vh_-_80px)] sm:!bg-cover md:!bg-center"
        style={{
          background: `
      linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 50%),
      url('${BASE_URL.CHAMPION_SPLASH_IMAGE}/${champion.id}_0.jpg') no-repeat top center / contain
    `,
        }}>
        <div className="relative z-10 text-white mix-blend-color-dodge">
          <h2 className="flex flex-col gap-1 lg:gap-2 text-yellow-light">
            <span className="text-5xl md:text-8xl font-serif font-bold">
              {champion.id}
            </span>
            <span className="text-xl md:text-3xl font-bold ml-2 lg:ml-4">
              {champion.name}{' '}
              <span className="text-lg font-semibold ml-2 tracking-tight">
                {champion.title}
              </span>
            </span>
          </h2>
        </div>
        <div className="lg:w-1/3 px-4 py-6 mt-16 lg:mt-0">
          <p className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] text-white-light ">
            {champion.lore}
          </p>

          <ul className="relative flex gap-4 mt-10 mb-20">
            <li className="group cursor-pointer">
              <Image
                src={`${BASE_URL.RIOT_IMAGE}/passive/${champion.passive.image.full}`}
                width={60}
                height={60}
                alt={champion.passive.name}
                className="rounded-sm"
              />
              <div className="group-hover:block hidden absolute left-0 top-full mt-2 w-full text-yellow-pure text-sm bg-zinc-950 bg-opacity-80 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={`${BASE_URL.RIOT_IMAGE}/passive/${champion.passive.image.full}`}
                    width={30}
                    height={30}
                    alt={champion.passive.name}
                    className="rounded-sm"
                  />
                  <span className="font-bold">{champion.passive.name}</span>
                </div>
                <p>{removeHtmlTags(champion.passive.description)}</p>
              </div>
            </li>
            {champion.spells.map((spell) => (
              <li key={spell.id} className="group cursor-pointer">
                <Image
                  src={`${BASE_URL.RIOT_IMAGE}/spell/${spell.image.full}`}
                  width={60}
                  height={60}
                  alt={spell.name}
                  className="rounded-sm"
                />

                <div className="group-hover:block hidden absolute left-0 top-full mt-2 w-full text-yellow-pure text-sm bg-zinc-950 bg-opacity-80 p-4 rounded-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src={`${BASE_URL.RIOT_IMAGE}/spell/${spell.image.full}`}
                      width={30}
                      height={30}
                      alt={spell.name}
                      className="rounded-sm"
                    />
                    <span className="font-bold">{spell.name}</span>
                  </div>
                  <p>{removeHtmlTags(spell.description)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChampionDetailPage;
