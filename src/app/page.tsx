import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-white-light lg:text-white-pure ">
      <h2 className="sr-only">League Of Legends Information</h2>

      <ul className="flex-col flex lg:flex-row w-full min-h-[100vh] pt-[61px] lg:pt-0">
        <li className="relative flex-1 aspect-[16/9] lg:aspect-auto lg:hover:flex-[3] lg:transition-all lg:duration-700 group">
          <Link
            href={'/champions'}
            className="relative block w-full min-h-full">
            <Image
              src="/kings.jpg"
              alt="챔피언 정보 보기"
              fill
              sizes="70vw"
              className="object-cover lg:transition-all lg:duration-300 lg:grayscale lg:group-hover:grayscale-0"
            />
            <span className="absolute block w-full py-4 text-xl font-bold tracking-tight text-center -translate-x-1/2 -translate-y-1/2 bg-gray-800 lg:transition-opacity lg:duration-300 bg-opacity-30 lg:bg-transparent top-1/2 lg:top-auto lg:text-3xl lg:bottom-20 left-1/2 lg:opacity-0 group-hover:opacity-100">
              챔피언 정보 보기
            </span>
          </Link>
        </li>

        <li className="relative flex-1 aspect-[16/9] lg:aspect-auto lg:hover:flex-[3] lg:transition-all lg:duration-700 group">
          <Link href={'/rotation'} className="relative block w-full min-h-full">
            <Image
              src="/t1.jpg"
              alt="금주 로테이션 확인"
              fill
              sizes="70vw"
              className="object-cover lg:transition-all lg:duration-300 lg:grayscale lg:group-hover:grayscale-0"
            />
            <span className="absolute block w-full py-4 text-xl font-bold tracking-tight text-center -translate-x-1/2 -translate-y-1/2 lg:bg-transparent bg-gray-800 lg:transition-opacity lg:duration-300 bg-opacity-30  top-1/2 lg:top-auto lg:text-3xl lg:bottom-20 left-1/2 lg:opacity-0 group-hover:opacity-100">
              금주 로테이션 확인
            </span>
          </Link>
        </li>
        <li className="relative flex-1 aspect-[16/9] lg:aspect-auto  lg:hover:flex-[3] lg:transition-all lg:duration-700 group">
          <Link href={'/items'} className="relative block w-full min-h-full">
            <Image
              src="/neeko.jpg"
              alt="아이템 정보 보기"
              fill
              sizes="70vw"
              className="object-cover lg:transition-all lg:duration-300 lg:grayscale lg:group-hover:grayscale-0"
            />
            <span className="absolute block w-full py-4 text-xl font-bold tracking-tight text-center -translate-x-1/2 -translate-y-1/2 bg-gray-800 lg:transition-opacity lg:duration-300 bg-opacity-30 lg:bg-transparent top-1/2 lg:top-auto lg:text-3xl lg:bottom-20 left-1/2 lg:opacity-0 group-hover:opacity-100">
              아이템 정보 보기
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
