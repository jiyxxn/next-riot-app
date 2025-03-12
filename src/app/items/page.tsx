import ItemCard from '@/components/ItemCard';
import { Item } from '@/types/Items';
import { fetchItemList } from '@/utils/serverApi';
import { Suspense } from 'react';
import Loading from '../loading';

const ItemList = async () => {
  const items: Record<string, Item> = await fetchItemList();

  return (
    <section className="px-10 pb-20 pt-28 lg:px-20 lg:pt-40 text-white-pure">
      <h2 className="mb-4 font-serif text-4xl font-bold text-center lg:text-6xl text-yellow-light">
        Items
      </h2>
      <ul className="mt-14 lg:mt-20 grid grid-cols-[repeat(auto-fit,300px)]  items-center justify-center gap-8 lg:gap-12">
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
