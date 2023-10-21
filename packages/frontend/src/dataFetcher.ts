import { components } from "../../schema/dist";

const endpoint = "http://localhost:7071/api";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${endpoint}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result.products.map(
      (r) =>
        ({
          ...r,
        } as components["schemas"]["Product"])
    );
  } catch (error) {
    console.error("could not get data", error);
  }
  return [] as components["schemas"]["Product"][];
};

export const fetchCustomer = async () => {
  try {
    const response = await fetch(`${endpoint}/customers`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result.customers.map(
      (r) =>
        ({
          ...r,
        } as components["schemas"]["Customer"])
    )[0];
  } catch (error) {
    console.error("could not get data", error);
  }
  return undefined as unknown as components["schemas"]["Customer"];
};

export const postReservation = async () => {
  try {
    const reservation: components["schemas"]["Reservation"] = {
      id: "123",
      amount: 2,
      name: "Klaus Müller",
      // @ts-ignore
      product: "19828a",
      // @ts-ignore
      requester: "71982i",
      // @ts-ignore
      status: "PENDING",
    };
    const response = await fetch(`${endpoint}/reservations`, {
      method: "POST",
      body: JSON.stringify(reservation),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("could not post data", error);
  }
};
