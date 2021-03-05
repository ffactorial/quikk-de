import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const wir = () => {
  return (
    <>
      <TitleAndDesc title="Über uns" desc="Über uns" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default wir;
