import { Heading } from "@chakra-ui/react";
import { LocationTable } from "../components/Location/LocationTable";
import { useRecoilValue } from "recoil";
import {
  locationsState,
  loginState,
  ordersState,
  productsState,
} from "../state";
import { useState } from "react";
import { ProductTable } from "../components/Product/ProductTable";
import { useNavigate } from "react-router-dom";
import { fetchOrders, postOrder } from "../dataFetcher";

export const DonorEntry = () => {
  const locations = useRecoilValue(locationsState);
  const [locationId, setLocationId] = useState<number | undefined>(undefined);
  const products = useRecoilValue(productsState);
  const orders = useRecoilValue(ordersState);
  const login = useRecoilValue(loginState);

  const navigate = useNavigate();

  return (
    <>
      <Heading>Participating Locations</Heading>
      {!locationId && (
        <LocationTable locations={locations} onClick={setLocationId} />
      )}
      {locationId && (
        <ProductTable
          products={products}
          onClick={async (id) => {
            await postOrder({
              donorUserId: login.id.toString(),
              productId: id,
              status: "created",
            });
            await fetchOrders();
            // TODO: better way to find last created order
            const order = orders.find(
              (o) =>
                o.donorUserId === login.id.toString() &&
                o.productId === id &&
                o.status === "created"
            );
            navigate(`/w1s1?orderId=${order?.id}`);
          }}
        />
      )}
    </>
  );
};
