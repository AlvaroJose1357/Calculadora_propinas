import { menuItems } from "../data/db";
import { MenuItems, OrderItems } from "../types";

export type OrderActions =
  | {
      type: "add-item";
      payload: { item: MenuItems };
    }
  | {
      type: "remove-item";
      payload: { id: MenuItems["id"] };
    }
  | {
      type: "place-order";
    }
  | {
      type: "add-tip";
      payload: { value: number };
    };

export type OrderState = {
  data: MenuItems[];
  order: OrderItems[];
  tip: number;
};

export const initialState: OrderState = {
  data: menuItems,
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "add-item": {
      // en este caso findinde no sirve debido a que nos comenzaria a tomar de 2 en 2 y llega a cierto caso que rompe la app debido a que llega a undefined por eso se usa find el cual nos devuelve uno por uno los objetos y no los indices
      const itemExist = state.order.find(
        (orderItem) => orderItem.id === action.payload.item.id
      );
      let updateOrder: OrderItems[] = [];
      if (itemExist) {
        updateOrder = state.order.map((orderItem) =>
          orderItem.id === action.payload.item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        // si el item no existe en el pedido se añade al pedido
        // se crea una variabe newItem que es un objeto que contiene todas las propiedades de items MenuItems y se le añade la propiedad quantity con el valor de 1 que pertene a OrderItems
        const newItem: OrderItems = { ...action.payload.item, quantity: 1 };
        updateOrder = [...state.order, newItem];
      }
      return { ...state, order: updateOrder };
    }
    case "remove-item": {
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.id),
      };
    }
    case "place-order": {
      return { ...state, order: [], tip: 0 };
    }
    case "add-tip": {
      const tip = action.payload.value;
      return { ...state, tip };
    }
    default: {
      return state;
    }
  }
};
