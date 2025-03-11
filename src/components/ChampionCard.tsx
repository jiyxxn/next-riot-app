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
      <Link href={`/champions/${id}`}>
        <Image
          src={`${BASE_URL.RIOT_IMAGE}/champion/${champion.image.full}`}
          width={90}
          height={90}
          alt={champion.name}
        />
      </Link>
    </li>
  );
};

export default ChampionCard;
