import { atom } from "recoil";
import { components } from "../../schema/dist";

export const locationsState = atom({
  key: "locations", // unique ID (with respect to other atoms/selectors)
  default: [] as components["schemas"]["Location"][], // default value (aka initial value)
});

export const productsState = atom({
  key: "products",
  default: [] as components["schemas"]["Product"][],
});

export const ordersState = atom({
  key: "orders",
  default: [] as components["schemas"]["Order"][],
});

export const usersState = atom({
  key: "users",
  default: [] as components["schemas"]["User"][],
});

export interface Login {
  type: "donor" | "receiver" | "organizer";
  id: number;
}

export const loginState = atom({
  key: "login",
  default: {} as Login,
});
