import { Note } from "@geist-ui/react";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import WIP from "../components/misc/WIP";

const blog = () => {
  return (
    <>
      <TitleAndDesc title="Blog" desc="Blog" />
      <Container>
        <WIP />
      </Container>
    </>
  );
};

export default blog;
