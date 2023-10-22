import { components } from "../../schema/dist";

const endpoint = `http://${window.location.hostname}:7071/api`;

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${endpoint}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const products = result.map(
      (r) =>
        ({
          ...r,
        } as components["schemas"]["Product"])
    );
    console.log({ products });
    return products;
  } catch (error) {
    console.error("could not get data", error);
  }
  return [] as components["schemas"]["Product"][];
};

export const fetchOrders = async () => {
  try {
    const response = await fetch(`${endpoint}/orders`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const orders = result.map(
      (r) =>
        ({
          ...r,
        } as components["schemas"]["Order"])
    );
    console.log({ orders });
    return orders;
  } catch (error) {
    console.error("could not get data", error);
  }
  return [] as components["schemas"]["Location"][];
};

export const fetchLocations = async () => {
  try {
    const response = await fetch(`${endpoint}/locations`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const locations = result.map(
      (r) =>
        ({
          ...r,
        } as components["schemas"]["Location"])
    );
    console.log([locations]);
    return locations;
  } catch (error) {
    console.error("could not get data", error);
  }
  return [] as components["schemas"]["Location"][];
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${endpoint}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    const users = result.map(
      (r) =>
        ({
          ...r,
          type: (r.type as string)?.toLowerCase(),
        } as components["schemas"]["User"])
    );
    console.log({ users });
    return users;
  } catch (error) {
    console.error("could not get data", error);
  }
  return [] as components["schemas"]["User"][];
};

export const postUser = async (user: components["schemas"]["User"]) => {
  try {
    const response = await fetch(`${endpoint}/users`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("could not post data", error);
  }
};

export const postOrder = async (order: components["schemas"]["Order"]) => {
  try {
    const response = await fetch(`${endpoint}/orders`, {
      method: "POST",
      body: JSON.stringify(order),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("could not post data", error);
  }
};
