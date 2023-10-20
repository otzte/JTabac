import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import * as concerts from "../../mocks/concerts.json";
import * as locations from "../../mocks/locations.json";
import * as donors from "../../mocks/donors.json"
import * as issuers from "../../mocks/isIssue.json"
import * as receivers from "../../mocks/receiver.json"
import { components } from "jtabac-schema"


export async function HttpMock(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http mock data fetched`);
  const category = request.params.category;
  console.log(category);
  //mock data
  if (category === "concerts") {
    const mockData = concerts;
    return { jsonBody: mockData };
  }
  if (category === "locations") {
    const mockData = locations;
    return { jsonBody: mockData };
  }

  if (category === "donors") {
    const mockData = donors;
    return { jsonBody: mockData };
  }
  if (category === "issuers") {
    const mockData = issuers;
    return { jsonBody: mockData };
  }
  if (category === "receivers") {
    const mockData = receivers;
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
