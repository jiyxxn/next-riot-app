import ItemCard from '@/components/ItemCard';
import { Item } from '@/types/Items';
import { fetchItemList } from '@/utils/serverApi';
import { Suspense } from 'react';
import Loading from '../loading';

const ItemList = async () => {
  const items: Record<string, Item> | null = await fetchItemList();

  if (!items) return <div>아이템 데이터를 불러오지 못했습니다.</div>;

  return (
    <section className="text-white-pure pt-40 pb-20 px-20 text-center">
      <h2 className="font-serif text-5xl text-yellow-light mb-4">Items</h2>
      <ul className="mt-20 grid grid-cols-4 items-center justify-center gap-12">
        <Suspense fallback={<Loading />}>
          {Object.entries(items).map(
            ([id, item]) =>
              item.gold.sell !== 0 && <ItemCard key={id} id={id} item={item} />
          )}
        </Suspense>
      </ul>
    </section>
  );
};

export default ItemList;
