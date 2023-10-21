import {
  Box,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

export const LocationEdit = () => {
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
        <FormLabel htmlFor="Name" fontWeight={"normal"}>
          Name
        </FormLabel>
        <Input id="name-event" placeholder="Name of an event" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="Street" fontWeight={"normal"}>
          Street
        </FormLabel>
        <Input id="street" placeholder="Eschenheimer Landstraße" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="Number" fontWeight={"normal"}>
          Number
        </FormLabel>
        <Input id="number" placeholder="25" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="ZipCode" fontWeight={"normal"}>
          Zip code
        </FormLabel>
        <Input id="zipCode" placeholder="60123" required />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="Place" fontWeight={"normal"}>
          City
        </FormLabel>
        <Input id="city" placeholder="Frankfurt am Main" required />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="Type" fontWeight={"normal"}>
          Type
        </FormLabel>
        <Input id="type" placeholder="food" required />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="Time" fontWeight={"normal"}>
          Time
        </FormLabel>
        <Input id="time" type="date" required />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="NumberOfPlaces" fontWeight={"normal"}>
          Number of places
        </FormLabel>
        <Input id="NrOfPlaces" required />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="Salesperiod" fontWeight={"normal"}>
          Sales period
        </FormLabel>
        <Input id="salesPeriod" required />
      </FormControl>

      <FormControl as={GridItem} colSpan={[3, 2]}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Website
        </FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            bg="gray.50"
            _dark={{
              bg: "gray.800",
            }}
            color="gray.500"
            rounded="md"
          >
            http://
          </InputLeftAddon>
          <Input
            type="tel"
            placeholder="www.example.com"
            focusBorderColor="brand.400"
            rounded="md"
          />
        </InputGroup>
      </FormControl>
      {/* </VStack> */}
    </Box>
  );
};
