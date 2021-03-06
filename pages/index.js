import React from "react";
import Hero from "../components/index/Hero";
import Introduction from "../components/index/Introduction";
import Services from "../components/index/Services";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const index = () => {
  return (
    <>
      <TitleAndDesc
        title="QUIKK Software - Agile Softwareentwicklung aus Minden"
        desc="Entdecken Sie QUIKK's digitale Dienstleistungen und profitieren Sie von individuellen Softwarelösungen, mobilen Apps und einzigartigen Webauftritten."
      />
      <Hero />
      <Introduction />
      <Services />
      <Introduction />
    </>
  );
};

export default index;
