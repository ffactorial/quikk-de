import { Text } from "@geist-ui/react";
import React from "react";

const Title = ({ title = "", centered = true }) => {
  return (
    <Text
      h2
      style={{
        width: "100%",
        textAlign: centered ? "center" : "unset",
        fontWeight: 700,
        lineHeight: 0.8,
        margin: 0,
      }}
    >
      {title.toUpperCase()}
    </Text>
  );
};

export default Title;
