import { atom } from "recoil";
import { components } from "../../schema/dist";

export interface Concert {
  interpret?: string;
  price?: number;
  data?: Date;
}

export const concertsState = atom({
  key: "concerts", // unique ID (with respect to other atoms/selectors)
  default: [] as Concert[], // default value (aka initial value)
});

export const productsState = atom({
  key: "products",
  default: [] as components["schemas"]["Product"][],
});

export const reservationsState = atom({
  key: "reservations",
  default: [] as components["schemas"]["Reservation"][],
});
