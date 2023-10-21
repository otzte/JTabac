// we could use libraries like enforcer to validate against the schema
// but this would take to much time to implement

import { paths } from "jtabac-schema";
import { Product, Order, User, Location } from "./HttpMock";

type RemoveFirstLetter<S extends string> = S extends `${infer _}${infer Rest}` ? Rest : S;

export function isValidPath(path: string): path is RemoveFirstLetter<keyof paths> {
    return `/${path}` in ["/orders", "/products", "/users", "/locations"];
}
