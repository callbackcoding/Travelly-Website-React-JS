"use client";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import "./TopDestination.css";
const data = {
  isNew: true,
  // imageURL: MyCard1,
  name: "Mountain View,",
  name2: "Above the cloud",
  price: 150.99,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "orange.500" : "orange.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function MyCard({ imgUrl, name, name2, price }) {
  return (
    <div className="card_main">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        borderWidth="1px"
        shadow="lg"
        style={{ borderRadius: "32px 32px 10px 10px" }}
      >
        <Image src={imgUrl} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontWeight="semibold"
              as="h5"
              lineHeight="tight"
              isTruncated
              className="card_font"
            >
              {name}
              <br />
              {name2}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={"#F85E9F"} fontWeight={"bold"}>
              <Box as="span" color={"#F85E9F"} fontSize="lg">
                $
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default MyCard;
