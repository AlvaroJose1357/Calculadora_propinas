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
      return { ...state };
    }
    case "remove-item": {
      return { ...state };
    }
    case "place-order": {
      return { ...state };
    }
    case "add-tip": {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
