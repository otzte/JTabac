import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Checkbox,
  Stack,
  Button,
  InputRightElement,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Login as LoginType, loginState, usersState } from "../state";

export const Landing = () => {
  const [showPlain, setShowPlain] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const users = useRecoilValue(usersState);

  const [_, setLogin] = useRecoilState(loginState);

  return (
    <>
      <Heading>
        <img
          src="/../img/logo1up2gether_ver3.png"
          alt="Logo"
          style={{ width: "200px" }}
        />
      </Heading>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Making our Quarters worth living in{" "}
            <Text as={"span"} color={"green.400"}>
              for everyone
            </Text>
          </Heading>
        </Stack>
      </Container>
      <form
        onSubmit={(e) => {
          alert("onSubmit");
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
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={1} px={2}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
      <img
        src="/../img/community.png"
        alt="community"
        style={{ width: "600px" }}
      />
    </>
  );
};
