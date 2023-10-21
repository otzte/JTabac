import { Button, Heading, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { loginState, ordersState, productsState } from "../../state";
import { useNavigate, useSearchParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { Login } from "../Login";

export const W1S1Donor = () => {
  const [searchParams] = useSearchParams();
  const products = useRecoilValue(productsState);
  const order = useRecoilValue(ordersState).find(
    (o) => o.id === parseInt(searchParams.get("orderId") || "")
  );
  const product = products.find((p) => p.id === order?.productId);
  const login = useRecoilValue(loginState);

  if (!login.type) {
    return <Login />;
  }

  return (
    <>
      <Heading>{product?.name}</Heading>
      <Text>{product?.price}</Text>
      {login.type === "donor" && (
        <>
          <Text>Let your QR code be scanned to continue.</Text>
          <QRCode value={window.location.toString()} />
        </>
      )}
      {login.type === "organizer" && (
        <>
          <Text>
            By clicking below, you confirm to have received the additional
            payment of the meal.
          </Text>
          <Button>Confirm Payment</Button>
        </>
      )}
      {login.type === "donor" && false && (
        <>
          <Text>
            Thank for paying the extra meal. Your meal is ready to be taken.
          </Text>
        </>
      )}
      {login.type === "receiver" && (
        <>
          <Text>
            A Meal is ready for you. Click on the Button to start the
            reservation
          </Text>
          <Button>Reserve Meal</Button>
        </>
      )}
      {login.type === "receiver" && false && (
        <>
          <Text>The meal is reserved for 15 minutes.</Text>
          <Button>Open in google map</Button>
          <Text>Let your QR code be scanned in the restaurant.</Text>
          <QRCode value={window.location.toString()} />
        </>
      )}
      {login.type === "organizer" && false && (
        <>
          <Text>The person is authorized to get the meal.</Text>
          <Button>Confirm Consumption</Button>
        </>
      )}
    </>
  );
};
