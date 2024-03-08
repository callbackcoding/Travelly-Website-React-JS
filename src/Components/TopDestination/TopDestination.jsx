import React from "react";
import "./TopDestination.css";
import { Text } from "@chakra-ui/react";
import MyCard from "./MyCard";
import image1 from "../../assets/card1.png";
import image2 from "../../assets/card2.png";
import image3 from "../../assets/card3.png";
const cards = [
  {
    name: "Mountain View",
    name2: "Above the cloud",
    price: 150.99,
    imgUrl: image1,
  },
  {
    name: "Ocean with full ",
    name2: "of Colors",
    price: 20.99,
    imgUrl: image2,
  },
  {
    name: "Paradise Beach, ",
    name2: "Bantayan Island",
    price: 550.16,
    imgUrl: image3,
  },
];
const TopDestination = () => {
  return (
    <div className="top_destination_main">
      <Text className="top_destination_heading_1">Top Destination</Text>
      <Text className="top_destination_heading_2">Explore top destination</Text>
      <div className="destination_card_box">
        {cards.map((item, index) => {
          return (
            <MyCard
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              name2={item.name2}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopDestination;
