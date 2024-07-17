import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import useOrder from "./hooks/useOrder";
function App() {
  const { data, order, addItem, removeItem } = useOrder();
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
          <OrderContents order={order} removeItem={removeItem} />
        </div>
      </main>
    </>
  );
}

export default App;
