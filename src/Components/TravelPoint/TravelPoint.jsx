import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import travelPointImg from "../../assets/travelpoint.png";
import "./TravelPoint.css";
const TravelPoint = () => {
  return (
    <div className="travelpoint_main">
      <div className="travelpoint_img_div">
        <Image src={travelPointImg} />
      </div>
      <div className="travelpoint_text_box">
        <Text className="travel_point_heading">Travel Point</Text>
        <Heading className="helping_heading">
          We helping you find your dream location
        </Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </Text>

        <div className="features_box_main">
          <div className="features_box">
            <p>500+</p>
            <h1>Holiday Packages</h1>
          </div>
          <div className="features_box">
            <p>100</p>
            <h1>Luxary Hotels</h1>
          </div>
        </div>
        <div className="features_box_main">
          <div className="features_box">
            <p>7</p>
            <h1>Premium Airlines</h1>
          </div>
          <div className="features_box">
            <p>2k+</p>
            <h1>Happy Customer</h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TravelPoint;
