import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const Header = () => {
  return (
    <header className="h-[60px] w-full fixed z-50 text-xl px-4 lg:px-20 flex font-serif justify-between items-center lg:h-[80px] bg-gradient-to-r from-[#01161B] to-[#004e6170] border-b-4 border-double border-yellow-dark">
      <h1>
        <Link
          href={'/'}
          className="block relative w-[110px] h-[34px] lg:w-[150px] lg:h-[50px]">
          <Image src={'/logo.png'} alt="DORAN.GG" fill sizes="20vw" />
        </Link>
      </h1>
      <ul className="hidden gap-8 lg:flex text-yellow-light">
        <li className="hover:text-yellow-dark">
          <Link href={'/champions'}>Champions</Link>
        </li>
        <li className="hover:text-yellow-dark">
          <Link href={'/rotation'}>Rotation</Link>
        </li>
        <li className="hover:text-yellow-dark">
          <Link href={'/items'}>Items</Link>
        </li>
      </ul>
      <div className="lg:hidden">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-yellow-light shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
            Menu
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="z-50 w-32 mt-2 origin-top-right rounded-xl border border-white/5 bg-gradient-to-t from-[#01161B] to-[#004e61] p-1 text-sm/6 text-yellow-light transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
            <MenuItem>
              <Link
                href={'/champions'}
                className="block py-1.5 px-3 font-serif">
                Champions
              </Link>
            </MenuItem>
            <div className="h-px my-1 bg-white/5" />
            <MenuItem>
              <Link href={'/rotation'} className="block py-1.5 px-3 font-serif">
                Rotation
              </Link>
            </MenuItem>
            <div className="h-px my-1 bg-white/5" />
            <MenuItem>
              <Link href={'/items'} className="block py-1.5 px-3 font-serif">
                Items
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
