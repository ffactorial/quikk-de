import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const cookies = () => {
  return (
    <>
      <TitleAndDesc title="Cookies" desc="Cookies" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default cookies;
