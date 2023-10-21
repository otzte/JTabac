import {
  Box,
  Table,
  Tbody,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
const locations = [
  {
    name: "Turmkino Frankfurt",
    street: "Eschenheimer Tor",
    houseNo: "12",
    zipCode: "63911",
    city: "Frankfurt",
    type: "kino",
    description: "Turm Kino",
    openingHours: "Montag-Freitag, 8-16 Uhr",
    offerTime: "15 bis 17 Uhr",
  },
  {
    name: "Brot & Butter",
    street: "Oederweg",
    houseNo: "6",
    zipCode: "63911",
    city: "Frankfurt",
    type: "bakery",
    description: "Brot & Brezeln",
    openingHours: "Montag-Freitag, 8-16 Uhr",
    offerTime: "1 Stunde vor Ladenschluss",
  },
];
export const LocationDeskTable = () => {
  return (
    <Box margin={5}>
      <VStack spacing={8}>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Street</Th>
                <Th>House number</Th>
                <Th>Zip code</Th>
                <Th>City</Th>
                <Th>Type</Th>
                <Th>Description</Th>
                <Th>Opening hours</Th>
                <Th>Offer time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {locations.map((location) => (
                <Tr>
                  <Td>{location.name}</Td>
                  <Td>{location.street}</Td>
                  <Td>{location.houseNo}</Td>
                  <Td>{location.zipCode}</Td>
                  <Td>{location.city}</Td>
                  <Td>{location.type}</Td>
                  <Td>{location.street}</Td>
                  <Td>{location.description}</Td>
                  <Td>{location.offerTime}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};
