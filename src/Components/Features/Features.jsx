import React from "react";
import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import keyfeaturesImg from "../../assets/keyfeatures.png";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import "./Features.css";
const Features = () => {
  return (
    <div className="keyfeatures_main">
      <div className="keyfeatures_text_box">
        <Text className="keyfeatures_heading">KEY FEATURES </Text>
        <Heading className="helping_heading">We offer best services</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </Text>
        <Stack mt={10}>
          <HStack align={"top"} mt={2}>
            <Box color={"green.400"} px={5}>
              <Image
                src={f1}
                h={"90px"}
                w={"190px"}
                className="key_features_icon"
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>We offer best services</Text>
              <Text color={"gray.600"}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin
              </Text>
            </VStack>
          </HStack>
          <HStack align={"top"} mt={5}>
            <Box color={"green.400"} px={5}>
              <Image
                src={f2}
                h={"90px"}
                w={"190px"}
                className="key_features_icon"
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Schedule your trip</Text>
              <Text color={"gray.600"}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin
              </Text>
            </VStack>
          </HStack>
          <HStack align={"top"} mt={5}>
            <Box color={"green.400"} px={5}>
              <Image
                src={f3}
                h={"90px"}
                w={"190px"}
                className="key_features_icon"
              />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Get discounted coupons</Text>
              <Text color={"gray.600"}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin
              </Text>
            </VStack>
          </HStack>
        </Stack>
      </div>
      <div className="keyfeatures_img_div">
        <Image src={keyfeaturesImg} />
      </div>
      <div></div>
    </div>
  );
};

export default Features;
