import React from "react";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const LegalLinks = () => {
  return (
    <Links
      content={[
        <InternalLink href="/impressum">Impressum</InternalLink>,
        <InternalLink href="/datenschutzerklaerung">
          Datenschutzerklärung
        </InternalLink>,
        <InternalLink href="/cookies">Cookies verwalten</InternalLink>,
      ]}
    />
  );
};

export default LegalLinks;
