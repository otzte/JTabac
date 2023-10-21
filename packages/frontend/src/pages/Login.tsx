import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Login as LoginType, loginState } from "../state";

export const Login = () => {
  const [showPlain, setShowPlain] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [_, setLogin] = useRecoilState(loginState);

  return (
    <>
      <Heading>Login</Heading>
      <form
        onSubmit={(e) => {
          alert("onSubmit");
          e.preventDefault();
          if (username) {
            let type = "receiver" as LoginType["type"];
            if (username.startsWith("donor")) {
              type = "donor";
            }
            if (username.startsWith("organizer")) {
              type = "organizer";
            }
            setLogin({
              type,
              username,
            });
          }
        }}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          size="sm"
        />
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPlain ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPlain(!showPlain)}
            >
              {showPlain ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button size="xs" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};
