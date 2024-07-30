import { formatCurrency } from "../helpers";
import { OrderItems } from "../types";

type OrderContentsProps = {
  order: OrderItems[];
  removeItem: (id: OrderItems["id"]) => void;
};
export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="flex justify-center text-center text-4xl font-black">
        Consumo
      </h2>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
          >
            <div className="flex items-center">
              <p className="mr-2 text-2xl">{item.image}</p>
              <div className="">
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad = {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
            <button
              role="img"
              aria-label="delete"
              onClick={() => removeItem(item.id)}
            >
              🗑️
            </button>
            {/* opcion 2 para eliminar un item del pedido estilado 
              <button
                className="bg-red-600 h-6 w-6 rounded-full text-white font-black"
                onClick={() => removeItem(item.id)}
              >
                X
              </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
