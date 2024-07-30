import { MenuItems } from "../types";
type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  const { image, name, price } = item; // Destructuring
  return (
    <button
      className="border-2 border-teal-400 p-4 w-full flex justify-between items-center my-2 rounded-lg hover:bg-teal-400 hover:text-white transition duration-300 ease-in-out"
      onClick={() => addItem(item)}
    >
      <p className="text-3xl">{image}</p>
      <p>{name}</p>
      <p className="font-black">{price}</p>
    </button>
  );
}
