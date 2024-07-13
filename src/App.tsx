import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
function App() {
  console.log(menuItems);
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
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        <div>
          <h2 className="flex justify-center text-center text-4xl font-black">
            Consumo
          </h2>
        </div>
      </main>
    </>
  );
}

export default App;
