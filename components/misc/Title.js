import { Text } from "@geist-ui/react";
import React from "react";

const Title = ({ title = "", centered = true, small = false }) => {
  return (
    <Text
      h2={!small}
      h3={small}
      style={{
        width: "100%",
        textAlign: centered ? "center" : "left",
        fontWeight: small ? 600 : 700,
        lineHeight: 1,
        margin: 0,
      }}
    >
      {small ? title : title.toUpperCase()}
    </Text>
  );
};

export default Title;
