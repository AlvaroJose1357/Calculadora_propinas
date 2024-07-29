export type MenuItems = {
  id: number;
  image: string;
  name: string;
  price: number;
};
export type OrderItems = MenuItems & {
  quantity: number;
};
