import { ITEM_IMAGE_BASE_URL } from '@/constants';
import { Item } from '@/types/Items';
import Image from 'next/image';
import React from 'react';

interface ItemCardProps {
  item: Item;
  id: string;
}

const ItemCard = ({ item, id }: ItemCardProps) => {
  return (
    <li
      key={id}
      className="flex w-full gap-4 p-6 border-yellow-dark border-[1px] rounded-md">
      <Image
        src={`${ITEM_IMAGE_BASE_URL}${item.image.full}`}
        alt={item.name}
        width={90}
        height={90}
      />
      <div className="flex flex-col items-start justify-between">
        <span className="text-lg font-semibold text-yellow-pure">
          {item.name}
        </span>
        <ul className="text-white-dark">
          <li>구매가 : {item.gold.total}G</li>
          <li>판매가 : {item.gold.sell}G</li>
        </ul>
      </div>
    </li>
  );
};

export default ItemCard;
