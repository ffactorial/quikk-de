import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const leistungen = () => {
  return (
    <>
      <TitleAndDesc title="Leistungen" desc="Leistungen" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default leistungen;
