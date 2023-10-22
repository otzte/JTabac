import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Login as LoginType, loginState, usersState } from "../state";

export const Login = () => {
  const [showPlain, setShowPlain] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [_, setLogin] = useRecoilState(loginState);
  const users = useRecoilValue(usersState);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (username) {
            const user = users.find((u) => u.email === username);
            if (user) {
              setLogin({
                type: user.type,
                id: user.id!,
              });
            }
          }
        }}
      >
        <Stack spacing={8} margin={5} mx={"auto"} maxW={"lg"} py={1} px={2}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={1} px={2}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in</Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="Username">
                  <FormLabel>Username</FormLabel>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    size="sm"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
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
                        onClick={() => setShowPlain(!showPlain)}
                      >
                        {showPlain ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
