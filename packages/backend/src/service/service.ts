import { User, Product, Order, Location } from "../functions/HttpMock";

export async function createDatabaseEntry(data: Product | User | Order | Location) { 

}

type GetDatabaseEntryReturnType<T> = T extends "orders" ? Order : T extends "products" ? Product : T extends "users" ? User : T extends "locations" ? Location : never;

export async function getDatabaseEntry<T>(type: T): Promise<GetDatabaseEntryReturnType<T>> {
    return {} as GetDatabaseEntryReturnType<T>;
}
