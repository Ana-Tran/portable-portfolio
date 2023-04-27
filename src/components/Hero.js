import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import resume from "../resources/Ana_Tran_Resume.pdf";

export default function Header({ color }) {
  const profile = ProfileArray();
  const downloadResume = () => {
    window.open(resume, "_blank");
  };
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <div align={"center"} alignself={"center"} position={"relative"}>
            <img src="logo.png" alt="pompompurin logo"></img>
          </div>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {profile.headerDesc}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
              <Box mr={2}>
                <img
                  src="kanahei.png"
                  alt="usagi lying down"
                  width={250}
                  height={80}
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
                />
              </Box>
                <Button
                  colorScheme={color}
                  bg={`${color}.400`}
                  rounded={"full"}
                  px={16}
                  py={30}
                  top={120}
                  style={{ position: "relative", zIndex: -1 }}
                  _hover={{
                    bg: `${color}.500`,
                  }}
                  onClick={downloadResume}
                >
                  View Resume
                </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
