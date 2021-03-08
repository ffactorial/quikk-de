import { Github, Instagram, Linkedin, Twitter } from "@geist-ui/react-icons";
import React from "react";
import { ExternalLinkWithIcon } from "../../misc/WithIconHelper";
import Links from "./Links";

const SocialLinks = () => {
  const prod = false;

  return (
    <Links
      content={[
        <ExternalLinkWithIcon
          href="https://linkedin.com/company/quikk-software"
          icon={<Linkedin />}
        >
          LinkedIn
        </ExternalLinkWithIcon>,
        <ExternalLinkWithIcon
          href={prod ? "https://github.com/quikk-software" : "#"}
          icon={<Github />}
        >
          GitHub
        </ExternalLinkWithIcon>,
        <ExternalLinkWithIcon
          href={prod ? "https://twitter.com/quikk_software" : "#"}
          icon={<Twitter />}
        >
          Twitter
        </ExternalLinkWithIcon>,
        <ExternalLinkWithIcon
          href={prod ? "https://instagram.com/quikk_software" : "#"}
          icon={<Instagram />}
        >
          Instagram
        </ExternalLinkWithIcon>,
      ]}
    />
  );
};

export default SocialLinks;
