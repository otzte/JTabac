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
                    <Th>Opening hours</Th>
                    <Th>Offer time</Th>
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
                      <Td>{location.openingHoursText}</Td>
                      <Td>{location.offerTimeText}</Td>
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
                    <Th>Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {locations.map((location) => (
                    <Tr onClick={() => onClick((location as any).id)}>
                      <Td>
                        <strong>{location.name}</strong>
                        <br />
                        {location.street} {location.houseNo}
                        <br />
                        {location.zipCode} {location.city}
                      </Td>
                      <Td>
                        {location.description}
                        <br />
                        Opening Hours: {location.openingHoursText}
                        <br />
                        Offers: {location.offerTimeText}
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
