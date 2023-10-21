import {
  AddIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { concertsState, productsState } from "../../state";

type OfferType = "" | "food" | "concert" | "cinema" | "street-art" | "theater";

type FilterType = "accessible" | "distance" | "vegetarian";

export const Receiver = () => {
  const [offer, setOffer] = useState<OfferType>();
  const [persons, setPersons] = useState<number>(1);
  const [visibleFilters, setVisibleFilters] = useState<FilterType[]>([]);
  const concerts = useRecoilValue(concertsState);
  const products = useRecoilValue(productsState);

  return (
    <Box margin={5}>
      <VStack spacing={8}>
        <Heading>Receiver</Heading>
        <HStack
          spacing={4}
          align="center"
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Tag
            size={"lg"}
            variant={offer === "food" ? "solid" : "outline"}
            onClick={() => setOffer(offer === "food" ? "" : "food")}
          >
            <TagLabel>Essen</TagLabel>
          </Tag>
          <Tag
            size={"lg"}
            variant={offer === "concert" ? "solid" : "outline"}
            onClick={() => setOffer(offer === "concert" ? "" : "concert")}
          >
            <TagLabel>Konzerte</TagLabel>
          </Tag>
          <Tag
            size={"lg"}
            variant={offer === "cinema" ? "solid" : "outline"}
            onClick={() => setOffer(offer === "cinema" ? "" : "cinema")}
          >
            <TagLabel>Kino</TagLabel>
          </Tag>
          <Tag
            size={"lg"}
            variant={offer === "street-art" ? "solid" : "outline"}
            onClick={() => setOffer(offer === "street-art" ? "" : "street-art")}
          >
            <TagLabel>Straßenkunst</TagLabel>
          </Tag>
          <Tag
            size={"lg"}
            variant={offer === "theater" ? "solid" : "outline"}
            onClick={() => setOffer(offer === "theater" ? "" : "theater")}
          >
            <TagLabel>Theater</TagLabel>
          </Tag>
        </HStack>
        <HStack
          spacing={4}
          align="center"
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {offer && (
            <Tag size={"lg"} variant="outline">
              <TagLeftIcon
                boxSize="12px"
                as={MinusIcon}
                onClick={() => setPersons(Math.max(persons - 1, 1))}
              />
              <TagLabel>{persons} Personen</TagLabel>
              <TagRightIcon
                boxSize="12px"
                as={AddIcon}
                onClick={() => setPersons(Math.min(persons + 1, 10))}
              />
            </Tag>
          )}
          {offer &&
            visibleFilters.map((f) => {
              if (f === "accessible") {
                return (
                  <Tag size={"lg"} variant="outline">
                    <TagLabel>Barrierefrei zugänglich</TagLabel>
                    <TagCloseButton
                      onClick={() =>
                        setVisibleFilters(
                          visibleFilters.filter((f2) => f2 !== "accessible")
                        )
                      }
                    />
                  </Tag>
                );
              }
              if (f === "distance") {
                return (
                  <Tag size={"lg"} variant="outline">
                    <TagLeftIcon
                      boxSize="12px"
                      as={MinusIcon}
                      onClick={() => alert("-")}
                    />
                    <TagLabel>Normale Entfernung</TagLabel>
                    <TagRightIcon
                      boxSize="12px"
                      as={AddIcon}
                      onClick={() => alert("+")}
                    />
                    <TagCloseButton
                      onClick={() =>
                        setVisibleFilters(
                          visibleFilters.filter((f2) => f2 !== "distance")
                        )
                      }
                    />
                  </Tag>
                );
              }
            })}
          {offer && (
            <Menu>
              <MenuButton as={Tag} variant={"outline"} size={"lg"}>
                <TagLabel>+</TagLabel>
              </MenuButton>
              <MenuList>
                {!visibleFilters.includes("accessible") && (
                  <MenuItem
                    onClick={() =>
                      setVisibleFilters([...visibleFilters, "accessible"])
                    }
                  >
                    Barrierefrei zugänglich
                  </MenuItem>
                )}
                <MenuItem>Küche</MenuItem>
                {!visibleFilters.includes("vegetarian") && (
                  <MenuItem
                    onClick={() =>
                      setVisibleFilters([...visibleFilters, "vegetarian"])
                    }
                  >
                    Vegetarisch
                  </MenuItem>
                )}
                {!visibleFilters.includes("distance") && (
                  <MenuItem
                    onClick={() =>
                      setVisibleFilters([...visibleFilters, "distance"])
                    }
                  >
                    Entfernung
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          )}
        </HStack>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <TableCaption>Angebote in deiner Nähe</TableCaption>
            <Thead>
              <Tr>
                <Th>Was</Th>
                <Th>Entfernung</Th>
                <Th>Wann</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Essen
                  <br />
                  Currywurst mit Pommes
                </Td>
                <Td>1,2 km</Td>
                <Td>Täglich ab 17 Uhr</Td>
                <Td>
                  <Button size="sm">Reservieren</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Theater
                  <br />
                  Eintritt 1 Euro
                </Td>
                <Td>1,4 km</Td>
                <Td>Jeden Dienstag und Mittwoch Abend</Td>
                <Td>
                  <Button size="sm">Reservieren</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Essen
                  <br />
                  Fisch mit Beilage
                </Td>
                <Td>2,3 km</Td>
                <Td>Heute 4 Portionen</Td>
                <Td>
                  <Button size="sm">Reservieren</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Heading>... aus der Datenbank</Heading>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <TableCaption>Angebote in deiner Nähe</TableCaption>
            <Thead>
              <Tr>
                <Th>Was</Th>
                <Th>Wann</Th>
                <Th>Kosten</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {concerts.map((concert) => (
                <Tr>
                  <Td>{concert.interpret}</Td>
                  <Td>{concert.data?.toLocaleDateString("de-DE")}</Td>
                  <Td>
                    {concert.price?.toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </Td>
                  <Td>
                    <Button size="sm">Reservieren</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Heading>... aus der Datenbank: Products</Heading>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <TableCaption>Angebote in deiner Nähe</TableCaption>
            <Thead>
              <Tr>
                <Th>name</Th>
                <Th>productType</Th>
                <Th>amount</Th>
                <Th>price</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr>
                  <Td>{product.name}</Td>
                  <Td>{product.productType}</Td>
                  <Td>{product.amount}</Td>
                  <Td>{product.price}</Td>
                  <Td>
                    <Button size="sm">Reservieren</Button>
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
