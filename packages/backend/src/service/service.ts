import db from "../database/knex";
import { User, Product, Order, Location } from "../functions/HttpMock";

type Datatype = "orders" | "products" | "users" | "locations";
type GetDatabaseEntryReturnType<T> = T extends "orders" ? Order : T extends "products" ? Product : T extends "users" ? User : T extends "locations" ? Location : never;

export async function createDatabaseEntry(type: Datatype, data: Product | User | Order | Location) { 
    
    console.log(data);
    
    if (type === "orders") {
        // create new order in database
        await db("Order").insert(data as Order);
    }
    if (type === "users") {
        // create new user in database
        const res = await db("Users").insert(data as User);
        console.log(res);
    }
    if (type === "locations") {
        // create new location in database
        await db("Location").insert(data as Location);
    }
    if (type === "products") {
        // create new product in database
        await db("Products").insert(data as Product);
    }
}

export async function getDatabaseEntry<T extends Datatype>(type: T): Promise<GetDatabaseEntryReturnType<T>> {
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
