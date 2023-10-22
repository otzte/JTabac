import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { loginState, ordersState, productsState } from "../../state";
import { useNavigate, useSearchParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { Login } from "../Login";
import { components } from "../../../../schema/dist";

export const W1S1Donor = () => {
  const [searchParams] = useSearchParams();
  const products = useRecoilValue(productsState);
  const order = useRecoilValue(ordersState).find(
    (o) => o.id === parseInt(searchParams.get("orderId") || "")
  );
  const product = products.find((p) => p.id === order?.productId);
  const login = useRecoilValue(loginState);

  const status = "finished" as components["schemas"]["Order"]["status"];

  if (!login.type) {
    return <Login />;
  }

  return (
    <>
      <Stack spacing={8} margin={5} mx={"auto"} maxW={"lg"} py={1} px={2}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>+1 Meal</Heading>
          {login.type === "donor" && <Text>Buy an extra meal</Text>}
          {login.type === "organizer" && <Text>Sell an extra meal</Text>}
          {login.type === "receiver" && <Text>Receive an extra meal</Text>}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4} align="center">
            <Heading>Spaghetti Bolognese {product?.name}</Heading>
            {login.type !== "receiver" && <Text>7 Euro {product?.price}</Text>}
            {login.type === "donor" && status === "created" && (
              <>
                <QRCode value={window.location.toString()} />
                <Text>Let your QR code be scanned to continue.</Text>
              </>
            )}
            {login.type === "organizer" && status === "created" && (
              <>
                <Text>
                  By clicking below, you confirm to have received the additional
                  payment of the meal.
                </Text>
                <Button>Confirm Payment</Button>
              </>
            )}
            {login.type === "organizer" && status === "paid" && (
              <>
                <Text>
                  You confirmed the payment of the extra meal. The meal is ready
                  to be taken.
                </Text>
              </>
            )}
            {login.type === "donor" && status === "paid" && (
              <>
                <Text>
                  Thank for paying the extra meal. Your meal is ready to be
                  taken.
                </Text>
              </>
            )}
            {login.type === "receiver" && status === "paid" && (
              <>
                <Text>
                  A Meal is ready for you. Click on the Button to start the
                  reservation
                </Text>
                <Button>Reserve Meal</Button>
              </>
            )}
            {login.type === "receiver" && status === "reserved" && (
              <>
                <Text>The meal is reserved for 15 minutes.</Text>
                <Button>Open in google map</Button>
                <QRCode value={window.location.toString()} />
                <Text>Let your QR code be scanned in the restaurant.</Text>
              </>
            )}
            {login.type === "organizer" && status === "reserved" && (
              <>
                <Text>The person is authorized to get the meal.</Text>
                <Button>Confirm Consumption</Button>
              </>
            )}
            {login.type === "receiver" && status === "finished" && (
              <>
                <Text>The extra meal is being prepared. Enjoy your stay.</Text>
              </>
            )}
            {login.type === "organizer" && status === "finished" && (
              <>
                <Text>Thanks for confirming and serving an extra Meal.</Text>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
