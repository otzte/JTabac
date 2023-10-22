import {
  Box,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { components } from "../../../../schema/dist";

type Location = components["schemas"]["Location"];

interface ILocationEditProp {
  value: Location;
  onChange: (newValue: Location) => void;
}

export const LocationEdit = ({ value, onChange }: ILocationEditProp) => {
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
        Location edit
      </Heading>
      <FormControl mr="5%">
        <FormLabel htmlFor="name" fontWeight={"normal"}>
          Name
        </FormLabel>
        <Input
          id="name"
          required
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="street" fontWeight={"normal"}>
          Street
        </FormLabel>
        <Input
          id="street"
          required
          value={value.street}
          onChange={(e) => onChange({ ...value, street: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="houseNo" fontWeight={"normal"}>
          House No.
        </FormLabel>
        <Input
          id="houseNo"
          required
          onChange={(e) => onChange({ ...value, houseNo: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="zipCode" fontWeight={"normal"}>
          Zip code
        </FormLabel>
        <Input
          id="zipCode"
          required
          onChange={(e) => onChange({ ...value, zipCode: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="city" fontWeight={"normal"}>
          City
        </FormLabel>
        <Input
          id="city"
          required
          onChange={(e) => onChange({ ...value, city: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="type" fontWeight={"normal"}>
          Type
        </FormLabel>
        <Select
          id="type"
          required
          onChange={(e) => onChange({ ...value, type: e.target.value })}
        >
          <option value="bakery">Bäckerei</option>
          <option value="cafe">Cafe</option>
          <option value="restaurant">Restaurant</option>
          <option value="theater">Theater</option>
          <option value="club">Club</option>
          <option value="concert-hall">Konzerthalle</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="openingHoursText" fontWeight={"normal"}>
          Opening Hours
        </FormLabel>
        <Input
          id="openingHoursText"
          required
          onChange={(e) =>
            onChange({ ...value, openingHoursText: e.target.value })
          }
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="offerTimeText" fontWeight={"normal"}>
          Opening Hours
        </FormLabel>
        <Input
          id="offerTimeText"
          required
          onChange={(e) =>
            onChange({ ...value, offerTimeText: e.target.value })
          }
        />
      </FormControl>

      {/* </VStack> */}
    </Box>
  );
};
