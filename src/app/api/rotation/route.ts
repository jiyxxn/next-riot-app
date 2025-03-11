import { BASE_URL } from '@/constants';
import { Champion } from '@/types/Champion';

export async function GET() {
  const rotationResponse = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Whale/4.30.291.11 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
      },
    }
  );

  const championListResponse = await fetch(
    `${BASE_URL.RIOT_API}/champion.json`
  );

  if (!rotationResponse.ok || !championListResponse.ok) {
    return new Response(JSON.stringify({ error: '로테이션 fetching 오류' }), {
      status: 500,
    });
  }

  let rotationData = await rotationResponse.json();
  let championData = await championListResponse.json();

  rotationData = rotationData.freeChampionIds;
  championData = Object.values(championData.data);

  const rotationChampionsData = rotationData.flatMap((rotationId: number) =>
    championData.filter(
      (champion: Champion) => Number(champion.key) === rotationId
    )
  );

  return new Response(JSON.stringify(rotationChampionsData), { status: 200 });
}
