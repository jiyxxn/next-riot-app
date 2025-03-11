import { BASE_URL } from '@/constants';
import { Champion, ChampionDetail } from '@/types/Champion';
import { Item } from '@/types/Items';

export const fetchItemList = async (): Promise<Record<string, Item> | null> => {
  try {
    const response = await fetch(`${BASE_URL.RIOT_API}/item.json`);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('아이템 리스트 fetch 에러', error);
    return null;
  }
};

export const fetchChampionList = async (): Promise<Record<
  string,
  Champion
> | null> => {
  try {
    const response = await fetch(`${BASE_URL.RIOT_API}/champion.json`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('챔피언 리스트 fetch 에러', error);
    return null;
  }
};

export const fetchChampionDetail = async (
  id: string
): Promise<Record<string, ChampionDetail> | null> => {
  try {
    const response = await fetch(`${BASE_URL.RIOT_API}/champion/${id}.json`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('챔피언 상세 fetch 에러', error);
    return null;
  }
};

export const getRotationChampionList = async (): Promise<Champion[]> => {
  const response = await fetch('/api/rotation');
  if (!response.ok) throw new Error('로테이션 API 호출 오류');
  return response.json();
};
