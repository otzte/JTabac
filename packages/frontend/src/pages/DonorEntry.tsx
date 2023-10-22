import { Heading, Stack } from "@chakra-ui/react";
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

  console.log({ locations });
  return (
    <Stack spacing={8} margin={5} mx={"auto"} maxW={"lg"} py={1} px={2}>
      <Heading textAlign="center">Participating Locations</Heading>
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
    </Stack>
  );
};
