import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-white-pure min-h-[100vh] flex flex-col justify-center text-center">
      <h2 className="font-serif text-5xl text-yellow-light mb-4">
        League Of Legends Information
      </h2>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>

      <ul className="flex justify-between w-full px-20 gap-4 mt-20">
        <li>
          <Link href={'/champions'}>
            <Image
              src="https://img.uhdpaper.com/wallpaper/divine-god-king-darius-fallen-god-king-garen-skin-lol-splash-art-355@2@a-preview.jpg?dl"
              alt="챔피언 정보 보기"
              width={400}
              height={400}
              className="rounded-sm"
            />
            <span className="block py-4">챔피언 정보 보기</span>
          </Link>
        </li>
        <li>
          <Link href={'/rotation'}>
            <Image
              src="https://img.uhdpaper.com/wallpaper/t1-2024-jayce-orianna-lee-sin-jinx-bard-skins-lol-splash-art-327@2@a-preview.jpg?dl"
              alt="금주 로테이션 확인"
              width={400}
              height={400}
              className="rounded-sm"
            />
            <span className="block mt-4">금주 로테이션 확인</span>
          </Link>
        </li>
        <li>
          <Link href={'/items'}>
            <Image
              src="https://img.uhdpaper.com/wallpaper/arcane-netflix-series-380@3@b-preview.jpg?dl"
              alt="아이템 정보 보기"
              width={400}
              height={400}
              className="rounded-sm"
            />
            <span className="block mt-4">아이템 정보 보기</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
