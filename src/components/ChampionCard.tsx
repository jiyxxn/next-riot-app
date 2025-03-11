import { BASE_URL } from '@/constants';
import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

interface ChampionCardProps {
  id: string;
  champion: Champion;
}

const ChampionCard = ({ id, champion }: ChampionCardProps) => {
  return (
    <li key={id}>
      <Link
        href={`/champions/${id}`}
        className="block relative lg:w-[90px] lg:h-[90px] w-16 h-16">
        <Image
          src={`${BASE_URL.RIOT_IMAGE}/champion/${champion.image.full}`}
          fill
          sizes="20vw"
          alt={champion.name}
        />
      </Link>
    </li>
  );
};

export default ChampionCard;
