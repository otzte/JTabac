import {
  Box,
  Table,
  TableContainer,
  Tbody,
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
  },
  {
    name: "Brot & Butter",
    street: "Oederweg",
    houseNo: "6",
    zipCode: "63911",
    city: "Frankfurt",
  },
];
export const LocationMobileTable = () => {
  return (
    <Box margin={5}>
      <VStack spacing={8}>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Adress</Th>
              </Tr>
            </Thead>
            <Tbody>
              {locations.map((location) => (
                <Tr>
                  <Td>{location.name}</Td>
                  <Td>
                    {location.street} {location.houseNo}, {location.zipCode}
                    {location.city}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};
