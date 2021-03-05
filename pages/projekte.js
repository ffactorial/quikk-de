import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const projekte = () => {
  return (
    <>
      <TitleAndDesc title="Projekte" desc="Projekte" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default projekte;
