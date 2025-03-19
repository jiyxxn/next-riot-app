import { BASE_URL } from '@/constants';
import { Champion } from '@/types/Champion';

/**
 * 현재 로테이션 챔피언 데이터를 가져와 반환하는 API 엔드포인트
 *
 * 이 함수는 두 가지 Riot API 엔드포인트를 호출합니다.
 * - `BASE_URL.ROTATION_CHAMPIONS`: 로테이션 챔피언의 ID 목록을 반환
 * - `${BASE_URL.RIOT_API}/champion.json`: 전체 챔피언 정보를 반환
 *
 * 두 데이터셋을 결합하여 로테이션 챔피언의 상세 정보를 필터링한 후,
 * JSON 형식으로 응답(Response 객체)을 반환합니다.
 *
 * @returns {Promise<Response>} 로테이션 챔피언의 상세 정보를 포함하는 Response 객체
 *
 * @throws {Response} 두 API 호출 중 하나라도 실패할 경우, 상태 코드 500과 오류 메시지를 포함한 Response 객체를 반환합니다.
 */
export async function GET() {
  // 로테이션 챔피언 ID 목록을 가져오기 위해 Riot API 엔드포인트 호출
  const rotationResponse = await fetch(BASE_URL.ROTATION_CHAMPIONS, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Whale/4.30.291.11 Safari/537.36',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
      Origin: 'https://developer.riotgames.com',
      'X-Riot-Token': `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });

  // 전체 챔피언 데이터를 가져오기 위해 Riot API 엔드포인트 호출
  const championListResponse = await fetch(
    `${BASE_URL.RIOT_API}/champion.json`
  );

  // 두 API 호출 중 하나라도 실패할 경우, 에러 응답(Response) 반환
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
