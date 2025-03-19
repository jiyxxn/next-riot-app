import { BASE_URL, EXPIRE_ONE_DAY } from '@/constants';
import { Champion, ChampionDetail } from '@/types/Champion';
import { Item } from '@/types/Items';

/**
 * Riot API에서 아이템 목록을 가져오는 함수
 *
 * 이 함수는 Riot API의 `/item.json` 엔드포인트를 호출하여
 * 아이템 데이터를 포함한 객체를 반환합니다.
 *
 * @returns Promise<Record<string, Item>> - 아이템 ID를 키로 갖는 아이템 데이터 객체
 * @throws {Error} HTTP 응답이 정상적이지 않을 경우, 상태 코드를 포함한 오류를 던집니다.
 */
export const fetchItemList = async (): Promise<Record<string, Item>> => {
  const response = await fetch(`${BASE_URL.RIOT_API}/item.json`);

  if (!response.ok) throw new Error(`HTTP 오류: ${response.status}`);

  const data = await response.json();
  return data.data;
};

/**
 * Riot API에서 챔피언 목록을 가져오는 함수
 *
 * 이 함수는 Riot API의 `/champion.json` 엔드포인트를 호출하여
 * 챔피언 데이터를 포함한 객체를 반환합니다. 캐시 만료 시간(EXPIRE_ONE_DAY)을
 * 이용하여 데이터의 재검증 시간을 설정합니다.
 *
 * @returns Promise<Record<string, Champion>> - 챔피언 ID를 키로 갖는 챔피언 데이터 객체
 * @throws {Error} HTTP 응답이 정상적이지 않을 경우, 상태 코드를 포함한 오류를 던집니다.
 */
export const fetchChampionList = async (): Promise<
  Record<string, Champion>
> => {
  const response = await fetch(`${BASE_URL.RIOT_API}/champion.json`, {
    next: { revalidate: EXPIRE_ONE_DAY },
  });

  if (!response.ok) throw new Error(`HTTP 오류: ${response.status}`);

  const data = await response.json();
  return data.data;
};

/**
 * Riot API에서 특정 챔피언의 상세 정보를 가져오는 함수
 *
 * 주어진 챔피언 ID에 해당하는 상세 정보를 `/champion/{id}.json` 엔드포인트를
 * 통해 호출하며, 최신 데이터를 위해 캐시를 사용하지 않습니다.
 *
 * @param id - 상세 정보를 가져올 챔피언의 ID
 * @returns Promise<Record<string, ChampionDetail>> - 챔피언 상세 정보를 포함한 객체
 * @throws {Error} HTTP 응답이 정상적이지 않을 경우, 상태 코드를 포함한 오류를 던집니다.
 *
 */
export const fetchChampionDetail = async (
  id: string
): Promise<Record<string, ChampionDetail>> => {
  const response = await fetch(`${BASE_URL.RIOT_API}/champion/${id}.json`, {
    cache: 'no-store',
  });

  if (!response.ok) throw new Error(`HTTP 오류: ${response.status}`);

  const data = await response.json();
  return data.data;
};

/**
 * API에서 로테이션 챔피언 목록을 가져오는 함수입니다.
 *
 * `/api/rotation` 엔드포인트를 호출하여 로테이션 중인 챔피언의 배열을 반환합니다.
 *
 * @returns Promise<Champion[]> - 로테이션 챔피언 목록 배열
 * @throws {Error} API 호출이 실패할 경우 오류를 던집니다.
 */
export const getRotationChampionList = async (): Promise<Champion[]> => {
  const response = await fetch('/api/rotation');
  if (!response.ok) throw new Error('로테이션 API 호출 오류');
  return response.json();
};
