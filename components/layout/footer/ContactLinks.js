import { Phone, Mail, Send } from "@geist-ui/react-icons";
import React from "react";
import Links from "./Links";
import {
  ExternalLinkWithIcon,
  InternalLinkWithIcon,
} from "../../misc/WithIconHelper";

const ContactLinks = () => {
  return (
    <Links
      content={[
        <ExternalLinkWithIcon href="mailto:info@quikk.de" icon={<Mail />}>
          info@quikk.de
        </ExternalLinkWithIcon>,
        <ExternalLinkWithIcon href="tel:+4915233902667" icon={<Phone />}>
          01523 390 2667
        </ExternalLinkWithIcon>,
        <InternalLinkWithIcon href="/kontakt" icon={<Send />}>
          Kontaktformular
        </InternalLinkWithIcon>,
      ]}
    />
  );
};

export default ContactLinks;
