import { useState } from "react";
import { OrderItems, MenuItems } from "../types";
export default function useOrder() {
  const [order, setOrder] = useState<OrderItems[]>([]);
  // esta es la funcion que se va a encargar de agregar un item al pedido de tipo menuItems ya que es e tipo que contiene las caracteristicas de los items del menu, y este se le añade una propiedad quantity que es la cantidad de items que se van a pedir
  const addItem = (item: MenuItems) => {
    //console.log(item);
    // el metodo findIndex devuelve el indice del primer elemento de un array que cumpla con la condicion dada por una funcion, se devuelve el indice debido a que se necesita saber si el item ya existe en el pedido para aumentar la cantidad de items en el pedido
    //* se busca por indice el item en el pedido
    const itemExist = order.findIndex((orderItem) => orderItem.id === item.id);
    //* si se hace con el find nos devuelve el objeto si este fue encontrado mas no el indice en el que se encuentra y ahi si tocaria hacer un map para actualizar la cantidad de items
    // const itemExist = order.find((orderItem) => orderItem.id === item.id);
    // if (itemExist) {
    //   const updateOrder = order.map((orderItem) =>
    //     orderItem.id === item.id
    //       ? { ...orderItem, quantity: orderItem.quantity + 1 }
    //       : orderItem
    //   );
    //   setOrder(updateOrder);
    if (itemExist >= 0) {
      const updateOrder = [...order];
      updateOrder[itemExist].quantity++;
      setOrder(updateOrder);
    } else {
      // si el item no existe en el pedido se añade al pedido
      // se crea una variabe newItem que es un objeto que contiene todas las propiedades de items MenuItems y se le añade la propiedad quantity con el valor de 1 que pertene a OrderItems
      const newItem: OrderItems = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItems["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };
  return {
    order,
    addItem,
    removeItem,
  };
}
