import { useRecoilValue } from "recoil";
import { DonorEntry } from "./DonorEntry";
import { OrganizerEntry } from "./OrganizerEntry";
import { ReceiverEntry } from "./ReceiverEntry";
import { loginState } from "../state";
import { Login } from "./Login";

export const Overview = () => {
  const login = useRecoilValue(loginState);

  return (
    <>
      {login.type === "donor" && <DonorEntry />}
      {login.type === "receiver" && <ReceiverEntry />}
      {login.type === "organizer" && <OrganizerEntry />}
      {!login.type && <Login />}
    </>
  );
};
