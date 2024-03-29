import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  createIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import heroImg from "../../assets/hero.png";
import "./Hero.css";
const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export default function Hero() {
  return (
    <div className="hero_main_div">
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Travel
              </Text>{" "}
              <Text color={"#F85E9F"} as={"span"} position={"relative"}>
                top
              </Text>
              <br />{" "}
              <Text color={"#F85E9F"} as={"span"}>
                destination
              </Text>{" "}
              <br /> <Text as={"span"}>of the world</Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              We always make our customer happy by providing as many choices as
              possible
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                className="btn"
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Get Started{" "}
              </Button>
              <Button
                rounded={"full"}
                leftIcon={<PlayIcon h={4} w={4} color={"#5D50C6"} />}
                className="watch_demo_btn"
              >
                Watch Demo
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} mt={5}>
          <Image alt={"Hero Image"} objectFit={"contain"} src={heroImg} />
        </Flex>
      </Stack>
    </div>
  );
}
