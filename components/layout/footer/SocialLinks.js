import { Linkedin } from "@geist-ui/react-icons";
import React from "react";
import { ExternalLinkWithIcon } from "../../misc/WithIconHelper";
import Links from "./Links";

const SocialLinks = () => {
  return (
    <Links
      content={[
        <ExternalLinkWithIcon
          href="https://linkedin.com/company/quikk-software/"
          icon={<Linkedin />}
        >
          LinkedIn
        </ExternalLinkWithIcon>,
      ]}
    />
  );
};

export default SocialLinks;
