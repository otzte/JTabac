import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import * as konzerts from "../../mocks/konzertmock.json";
import * as locations from "../../mocks/locations.json";

export async function HttpMock(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http mock data fetched`);
  const category = request.params.category;
  console.log(category);

  //mock data
  if (category === "konzerts") {
    const mockData = konzerts;
    return { jsonBody: mockData };
  }
  if (category === "locations") {
    const mockData = locations;
    return { jsonBody: mockData };
  }
  return;
}

app.http("HttpMock", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: HttpMock,
  route: "{category}",
});
