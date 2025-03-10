import { Item } from '@/types/Items';

export const fetchItemList = async (): Promise<Record<string, Item>> => {
  try {
    const response = await fetch(
      'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json'
    );

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('아이템 리스트 fetch 에러', error);
    throw error;
  }
};
