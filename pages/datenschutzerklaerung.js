import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const datenschutzerklaerung = () => {
  return (
    <>
      <TitleAndDesc title="Datenschutzerklärung" desc="Datenschutzerklärung" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default datenschutzerklaerung;
