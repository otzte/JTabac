import { atom } from "recoil";

export interface Concert {
  interpret?: string;
  price?: number;
  data?: Date;
}

export const concertsState = atom({
  key: "concerts", // unique ID (with respect to other atoms/selectors)
  default: [] as Concert[], // default value (aka initial value)
});
