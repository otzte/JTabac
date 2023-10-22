import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Organizer Registration
      </Heading>

      <FormControl mr="5%">
        <FormLabel htmlFor="Event" fontWeight={"normal"}>
          Event
        </FormLabel>
        <Input id="name-event" placeholder="Name of an event" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="Place" fontWeight={"normal"}>
          Place
        </FormLabel>
        <Input id="place" placeholder="Frankfurt am Main" required />
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
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        "+1" tickets?
      </Heading>
    </>
  );
};

export const Register = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  return (
    <>
      <Box
        borderWidth="1p"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : <Form2 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};
