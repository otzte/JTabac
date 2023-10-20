import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  TagCloseButton,
  TagLabel,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

export const Restaurant = () => {
  return (
    <Box margin={5}>
      <VStack spacing={8}>
        <Heading>Restaurant</Heading>

        <TableContainer maxWidth={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <TableCaption>Allgemeine Angaben</TableCaption>
            <Tbody>
              <Tr>
                <Th scope="row">Angebotszeitraum</Th>
                <Td>
                  Jeden 1. Mittwoch im Monat
                  <br /> 17-19 Uhr
                </Td>
              </Tr>
              <Tr>
                <Th scope="row">Öffnungszeiten</Th>
                <Td>
                  Täglich 11:00-22:00 Uhr,
                  <br /> Montags Ruhetag
                </Td>
              </Tr>
              <Tr>
                <Th scope="row">Adresse</Th>
                <Td>
                  Schillerstraße 9,
                  <br /> Frankfurt
                </Td>
              </Tr>
              <Tr>
                <Th scope="row">Küche</Th>
                <Td>Gut Bürgerlich</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <TableCaption>Angebote in deiner Nähe</TableCaption>
            <Thead>
              <Tr>
                <Th>Angebot</Th>
                <Th>Zeitraum</Th>
                <Th>Kosten</Th>
                <Th>Bestellungen</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Spaghetti Bolognese</Td>
                <Td>17-19 Uhr</Td>
                <Td>5 Euro</Td>
                <Td>
                  Angebot: 15
                  <br />
                  Bezahlt: 4<br />
                  Abgeholt: 2
                </Td>
              </Tr>
              <Tr>
                <Td>Spaghetti Bolognese</Td>
                <Td>
                  <HStack spacing={4}>
                    <FormControl>
                      <FormLabel>Uhrzeit von</FormLabel>
                      <NumberInput defaultValue={15} min={10} max={20}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Uhrzeit bis</FormLabel>
                      <NumberInput defaultValue={22} min={10} max={20}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </HStack>
                </Td>
                <Td>
                  <FormControl>
                    <FormLabel>Preis in Euro</FormLabel>
                    <NumberInput
                      defaultValue={15}
                      min={10}
                      max={20}
                      precision={2}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Td>
                <Td>
                  <FormControl>
                    <FormLabel>Anzahl der Portionen</FormLabel>
                    <NumberInput defaultValue={15} min={10} max={20}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
      <h2>Restaurant</h2>
      <ul>
        <li>Name des Restaurants</li>
        <li>Essen oder Getränk</li>
        <li>wie viele?</li>
        <li>Zeitraum zum Abholen</li>
        <li>Ergebnis in eine Tabelle</li>
        <li>Erweiterung: Flexibilität</li>
      </ul>
    </Box>
  );
};
