import ItemCard from '@/components/ItemCard';
import { Item } from '@/types/Items';
import { fetchItemList } from '@/utils/serverApi';

const ItemList = async () => {
  const items: Record<string, Item> = await fetchItemList();

  return (
    <section className="text-white-pure pt-40 pb-20 px-20 text-center">
      <h2 className="font-serif text-5xl text-yellow-light mb-4">Items</h2>
      <ul className="mt-20 grid grid-cols-4 items-center justify-center gap-12">
        {Object.entries(items).map(
          ([id, item]) =>
            item.gold.sell !== 0 && <ItemCard key={id} id={id} item={item} />
        )}
      </ul>
    </section>
  );
};

export default ItemList;
