import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const impressum = () => {
  return (
    <>
      <TitleAndDesc title="Impressum" desc="Impressum" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default impressum;
