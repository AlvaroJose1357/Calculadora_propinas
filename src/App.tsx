import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";
import { initialState, orderReducer } from "./reducers/order-reducer";
function App() {
  const { data, order, tip, setTip, addItem, removeItem, placeOrder } =
    useOrder();
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="flex justify-center text-center text-4xl font-black">
            Menu
          </h2>
          {data?.map((item) => (
            <MenuItem key={item.id} item={item} addItem={addItem} />
          ))}
        </div>
        <div className="p-5 border border-dashed border-slate-300 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <>
              <h2 className="text-center text-2xl font-black">
                No hay items en el pedido
              </h2>
              <p className="text-center">No hay items en el pedido</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
