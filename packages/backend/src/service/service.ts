import db from "../database/knex";
import { User, Product, Order, Location } from "../functions/HttpMock";

let queryBuilder = db.queryBuilder();

export async function createDatabaseEntry(data: Product | User | Order | Location) { 

}

type GetDatabaseEntryReturnType<T> = T extends "orders" ? Order : T extends "products" ? Product : T extends "users" ? User : T extends "locations" ? Location : never;

export async function getDatabaseEntry<T extends "orders" | "users" | "locations" | "products">(type: T): Promise<GetDatabaseEntryReturnType<T>> {
    console.log("Type", type);
    if  (type === "orders") {
        // return all orders from database
       const orders = await db("Order").select("*");
       //@ts-ignore
       return orders;
    }
    if (type === "users") {
        // return all users from database
        const users = await db("Users").select("*");
        //@ts-ignore
        return users;
    }
    if (type === "locations") {
        // return all locations from database
        const locations = await db("Location").select("*");
        //@ts-ignore
        return locations;
    }
    if (type === "products") {
        // return all products from database
        const products = await db("Products").select("*");
        //@ts-ignore
        return products;
    }
    return {} as GetDatabaseEntryReturnType<T>;
}
