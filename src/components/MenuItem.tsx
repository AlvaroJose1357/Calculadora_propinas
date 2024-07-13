import { MenuItems } from "../types";
type MenuItemProps = {
  item: MenuItems;
};

export default function MenuItem({ item }: MenuItemProps) {
  const { name, price } = item; // Destructuring
  return (
    <button className="border-2 border-teal-400 p-4 w-full flex justify-between items-center my-2 rounded-lg hover:bg-teal-400 hover:text-white transition duration-300 ease-in-out">
      <p>{name}</p>
      <p className="font-black">{price}</p>
    </button>
  );
}
