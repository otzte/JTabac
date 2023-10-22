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

type Product = components["schemas"]["Product"];

interface IProductTable {
  products: Product[];
  onClick: (id: number) => void;
}

export const ProductTable = ({ products, onClick }: IProductTable) => {
  return (
    <Box margin={5}>
      <VStack spacing={8}>
        <TableContainer width={"100%"} whiteSpace={"normal"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr onClick={() => onClick((product as any).id)}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};
