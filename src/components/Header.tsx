import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full fixed z-50 text-xl px-20 flex font-serif justify-between items-center h-[80px] bg-gradient-to-r from-[#01161B] to-[#004e6170] border-b-4 border-double border-yellow-dark">
      <h1>
        <Link href={'/'}>
          <Image src={'/logo.png'} alt="DORAN.GG" width={140} height={60} />
        </Link>
      </h1>
      <ul className="flex gap-8 text-yellow-light">
        <li className="hover:text-yellow-dark">
          <Link href={'/champions'}>Champions</Link>
        </li>
        <li className="hover:text-yellow-dark">
          <Link href={'/rotaion'}>Rotation</Link>
        </li>
        <li className="hover:text-yellow-dark">
          <Link href={'/items'}>Items</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
