import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const karriere = () => {
  return (
    <>
      <TitleAndDesc title="Karriere" desc="Karriere" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default karriere;
