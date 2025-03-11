import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-white-pure ">
      <h2 className="sr-only">League Of Legends Information</h2>

      <ul className="flex w-full min-h-[100vh]">
        <li className="relative flex-1 hover:flex-[3] transition-all duration-700 group">
          <Link href={'/champions'}>
            <Image
              src="/kings.jpg"
              alt="챔피언 정보 보기"
              fill
              className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <span className="tracking-tight text-3xl font-bold absolute w-full text-center block py-4 bottom-20 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              챔피언 정보 보기
            </span>
          </Link>
        </li>

        <li className="relative flex-1 hover:flex-[3] transition-all duration-700 group">
          <Link href={'/rotation'}>
            <Image
              src="/t1.jpg"
              alt="금주 로테이션 확인"
              fill
              className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <span className="tracking-tight text-3xl font-bold absolute w-full text-center block py-4 bottom-20 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              금주 로테이션 확인
            </span>
          </Link>
        </li>
        <li className="relative flex-1 hover:flex-[3] transition-all duration-700 group">
          <Link href={'/items'}>
            <Image
              src="/neeko.jpg"
              alt="아이템 정보 보기"
              fill
              className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <span className="tracking-tight text-3xl font-bold absolute w-full text-center block py-4 bottom-20 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              아이템 정보 보기
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
