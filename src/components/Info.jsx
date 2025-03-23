import React from "react";
import image1 from "../assets/Images/page2-1.jpg";
import image2 from "../assets/Images/page2-2.jpg";
import image3 from "../assets/Images/page3-1.jpg";
import image4 from "../assets/Images/page3-2.jpeg";
import image5 from "../assets/Images/page4-1.jpg";
import image6 from "../assets/Images/page4-2.jpeg";
import Info1 from "../components/Info1";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import Info2 from "../components/Info2";

var title1 = "DISCOVER NEW TRENDY BRANDS";
var subtitle1 =
  "no more endless quest just the next big thing right at your fingertips";
var title2 = "SCROLL, GET INSPIRED SHOP INSTANTLY";
var subtitle2 = "no more redirects just one tap and it’s yours";
var title3 = "A COMMUNITY THAT SHOPS SHARES AND INSPIRES";
var subtitle3 =
  "no more lonely checkouts join people who love fashion as much as you do.";

const Info = () => {
  return (
    <>
      <Info1
        videosrc={video1}
        image2={image2}
        title={title1}
        subtitle={subtitle1}
      />

      <Info2
        videosrc={video2}
        image2={image4}
        title={title2}
        subtitle={subtitle2}
      />

      <Info1
        videosrc={video1}
        image2={image6}
        title={title3}
        subtitle={subtitle3}
      />
    </>
  );
};

export default Info;
