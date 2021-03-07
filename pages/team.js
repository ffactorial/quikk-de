import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import People from "../components/team/People";

const team = () => {
  return (
    <>
      <TitleAndDesc title="Team" desc="Unser Team" />
      <People />
    </>
  );
};

export default team;
