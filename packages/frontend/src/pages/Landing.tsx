import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <Heading>JTabac</Heading>
      <Text>One sentence or claim why we rock</Text>
      <Button as={Link} to="/overview">
        Login
      </Button>
    </>
  );
};
