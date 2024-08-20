import { OrderActions } from "../reducers/order-reducer";
import { MenuItems } from "../types";
type MenuItemProps = {
  item: MenuItems;
  dispatch: React.Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  const { image, name, price } = item; // Destructuring
  return (
    <button
      className="border-2 border-teal-400 p-4 w-full flex justify-between items-center my-2 rounded-lg hover:bg-teal-400 hover:text-white transition duration-300 ease-in-out"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p className="text-3xl">{image}</p>
      <p>{name}</p>
      <p className="font-black">{price}</p>
    </button>
  );
}
