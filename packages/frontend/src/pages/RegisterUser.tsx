import { useState } from "react";
import { components } from "../../../schema/dist";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { LocationEdit } from "../components/Location/LocationEdit";
import { postUser } from "../dataFetcher";

type User = components["schemas"]["User"];
type Location = components["schemas"]["Location"];

export const RegisterUser = () => {
  const [user, setUser] = useState({} as User);
  const [location, setLocation] = useState({} as Location);

  return (
    <Box
      borderWidth="1p"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={1200}
      p={6}
      m="10px auto"
      as="form"
    >
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Create User
      </Heading>
      <FormControl mr="5%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email
        </FormLabel>
        <Input
          id="email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </FormControl>

      <FormControl mr="5%">
        <FormLabel htmlFor="password" fontWeight={"normal"}>
          Password (shown in Plaintext!!!)
        </FormLabel>
        <Input
          id="password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="type" fontWeight={"normal"}>
          Type
        </FormLabel>
        <Select
          id="type"
          required
          onChange={(e) =>
            setUser({ ...user, type: e.target.value as User["type"] })
          }
        >
          <option value="donor">Donor</option>
          <option value="receiver">Receiver</option>
          <option value="organizer">Organizer</option>
        </Select>
      </FormControl>

      {user.type === "organizer" && (
        <LocationEdit value={location} onChange={setLocation} />
      )}

      <Button onClick={() => postUser(user)}>Save</Button>
      {/* </VStack> */}
    </Box>
  );
};
