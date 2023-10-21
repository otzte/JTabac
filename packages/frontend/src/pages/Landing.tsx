import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <Heading>1up2gether</Heading>
      <Text>Making our Quarters worth living in for everyone</Text>
      <Button as={Link} to="/overview">
        Login
      </Button>
    </>
  );
};
