import React from "react";
import Hero from "../components/index/Hero";
import Introduction from "../components/index/Introduction";
import Services from "../components/index/Services";
import Work from "../components/index/Work";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const index = () => {
  return (
    <>
      <TitleAndDesc
        title="QUIKK Software - Softwareentwicklung & Webdesign aus Minden"
        desc="Entdecken Sie unsere digitalen Dienstleistungen und profitieren Sie von individueller Softwareentwicklung, mobilen Apps und einzigartigem Webdesign."
      />
      <Hero />
      <Introduction />
      <Services />
      <Work />
    </>
  );
};

export default index;
