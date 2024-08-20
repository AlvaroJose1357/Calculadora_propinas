import { useMemo } from "react";
import { OrderItems } from "../types";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  // Propiedades requeridas
  order: OrderItems[];
  tip: number;
  dispatch: React.Dispatch<OrderActions>;
};
export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  // el useMemo nos sirve para memorizar un valor y solo se actualiza cuando sus dependencias cambian
  // recibe un callback y un array de dependencias
  // el reduce es un metodo que se utiliza para reducir un array a un solo valor, el total es un acomulador y el item es el valor actual que se esta procesando
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip]);
  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount]
  );
  return (
    <>
      {/* para darle espaciado a los hijos se utiliza la propiedad space-y-3 en el div padre */}
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total a pagar y propina</h2>
        <p>
          SubTotal a pagar{""}
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina{""}
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar{""}
          <span className="font-bold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="bg-teal-400 w-full py-2 px-4 text-white rounded font-bold disabled:opacity-50"
        // disabled={totalAmount === 0}
        onClick={() => {
          dispatch({ type: "place-order" });
        }}
      >
        Guardar pedido
      </button>
    </>
  );
}
