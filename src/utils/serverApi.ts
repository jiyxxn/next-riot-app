import { RIOT_API_BASE_URL } from '@/constants';
import { Champion, ChampionDetail } from '@/types/Champion';
import { Item } from '@/types/Items';

export const fetchItemList = async (): Promise<Record<string, Item> | null> => {
  try {
    const response = await fetch(`${RIOT_API_BASE_URL}/item.json`);

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
    const response = await fetch(`${RIOT_API_BASE_URL}/champion.json`, {
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
    const response = await fetch(`${RIOT_API_BASE_URL}/champion/${id}.json`, {
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
