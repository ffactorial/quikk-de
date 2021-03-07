import { Divider } from "@geist-ui/react";
import React from "react";
import Hero from "../components/index/Hero";
import Introduction from "../components/index/Introduction";
import Services from "../components/index/Services";
import Work from "../components/index/Work";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const index = () => {
  return (
    <>
      <TitleAndDesc
        title="QUIKK Software - Agile Softwareentwicklung aus Minden"
        desc="Entdecken Sie QUIKK's digitale Dienstleistungen und profitieren Sie von individuellen Softwarelösungen, mobilen Apps und einzigartigen Webauftritten."
      />
      <Hero />
      <Divider style={{ margin: 0 }} />
      <Introduction />
      <Services />
      <Work />
    </>
  );
};

export default index;
