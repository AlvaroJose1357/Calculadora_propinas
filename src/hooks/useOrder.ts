import { useState } from "react";
import { OrderItems, MenuItems } from "../types";
export default function useOrder() {
  const [order, setOrder] = useState<OrderItems[]>([]);
  // esta es la funcion que se va a encargar de agregar un item al pedido de tipo menuItems ya que es e tipo que contiene las caracteristicas de los items del menu, y este se le añade una propiedad quantity que es la cantidad de items que se van a pedir
  const addItem = (item: MenuItems) => {
    //console.log(item);
    // si el item ya existe en el pedido
    //* se busca por indice el item en el pedido
    const itemExist = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemExist >= 0) {
      const updateOrder = [...order];
      updateOrder[itemExist].quantity++;
      setOrder(updateOrder);
      //console.log("add item");
    } else {
      // si el item no existe en el pedido se añade al pedido
      // se crea una variabe newItem que es un objeto que contiene todas las propiedades de items MenuItems y se le añade la propiedad quantity con el valor de 1 que pertene a OrderItems
      const newItem: OrderItems = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  return {
    addItem,
  };
}
