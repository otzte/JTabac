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
import { components } from "../../../../schema/dist";
import { useMediaQuery } from "../../helpers/hooks";

type Location = components["schemas"]["Location"];

interface ILocationTable {
  locations: Location[];
  onClick: (id: number) => void;
}

export const LocationTable = ({ locations, onClick }: ILocationTable) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Box margin={5}>
      <VStack spacing={8}>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            {isDesktop && (
              <>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Street</Th>
                    <Th>House number</Th>
                    <Th>Zip code</Th>
                    <Th>City</Th>
                    <Th>Type</Th>
                    <Th>Description</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {locations.map((location) => (
                    <Tr onClick={() => onClick((location as any).id)}>
                      <Td>{location.name}</Td>
                      <Td>{location.street}</Td>
                      <Td>{location.houseNo}</Td>
                      <Td>{location.zipCode}</Td>
                      <Td>{location.city}</Td>
                      <Td>{location.type}</Td>
                      <Td>{location.description}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </>
            )}
            {!isDesktop && (
              <>
                <Thead>
                  <Tr>
                    <Th>Location</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {locations.map((location) => (
                    <Tr onClick={() => onClick((location as any).id)}>
                      <Td>
                        <div style={{ marginBottom: "5px" }}>
                          <strong>{location.name}</strong>
                        </div>
                        <div style={{ marginBottom: "9px" }}>
                          {location.street} {location.houseNo},
                          {location.zipCode}
                        </div>
                        {location.description}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </>
            )}
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};
