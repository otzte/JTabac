import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { components } from "jtabac-schema"
import { createDatabaseEntry, getDatabaseEntry } from "../service/service";

// Products can be added by organizers
// Reservations can be made by receivers
// Donations can be made by donors

// thoughts on the database/schema:
// users are identified by their email address

export type Product = components["schemas"]["Product"];
export type Order = components["schemas"]["Order"];
export type User = components["schemas"]["User"];
export type Location = components["schemas"]["Location"];

export async function HttpMock(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  try {
    if(request.method === "GET"){
      const data = await getDatabaseEntry(request.params.category as "orders" | "products" | "users" | "locations" | "undefined");
      return {
        status: 200,
        jsonBody: data
      }
    }
    if(request.method === "POST"){
      await createDatabaseEntry(request.body as Product | Order | User | Location);
      return {
        status: 200,
        jsonBody: {}
      }
    }
  } catch (error) {
    context.error(error);
    return {
      status: 500,
      body: error.message,
    };
  }
}

app.http("HttpMock", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: HttpMock,
  route: "{category}",
});
