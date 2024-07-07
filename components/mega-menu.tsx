import Link from "next/link";
import { NextPage } from "next";

interface MegaMenuItem {
  title?: string;
  items: { name: string; href: string }[];
}

interface MegaMenuProps {
  items: MegaMenuItem[];
}

const MegaMenu: NextPage<MegaMenuProps> = ({ items }) => {
  return (
    <div className="absolute left-0 w-max bg-white shadow-lg py-6 px-10 hidden group-hover:block z-[999]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-20">
        {items.map((category, index) => (
          <div key={index} className="flex-1">
            {category.title && (
              <h3 className="font-bold mb-2">{category.title}</h3>
            )}
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1">
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
