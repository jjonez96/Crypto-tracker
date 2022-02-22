import React from "react";
import { H1, Container1 } from "./CryptoStyles";
const FollowList = (props) => {
  return (
    <Container1>
      <H1>{props.heading}</H1>
    </Container1>
  );
};

export default FollowList;
