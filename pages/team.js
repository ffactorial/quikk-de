import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import People from "../components/team/People";

const team = () => {
  return (
    <>
      <TitleAndDesc title="Über uns" desc="Über uns" />
      <People />
    </>
  );
};

export default team;
