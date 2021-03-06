import {
  Avatar,
  Card,
  Description,
  Display,
  Grid,
  Spacer,
  Text,
} from "@geist-ui/react";
import { Github, Home, Linkedin, Mail } from "@geist-ui/react-icons";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";
import ExternalLink from "../misc/ExternalLink";

const ServiceCard = ({
  name = "",
  mail = "",
  title = "",
  linkedin = "",
  github = "",
  homepage = "",
  avatar = "",
  desc = "",
}) => {
  const enteredSocials = Object.entries({
    linkedin,
    github,
    homepage,
    mail,
  })
    .map(([key, val]) => (val.length > 0 ? { [key]: val } : null))
    .filter((_) => _).length;

  const SocialWrapper = ({ children, href }) => (
    <Grid xs={24 / enteredSocials} justify="center" alignItems="center">
      <ExternalLink href={href}>{children}</ExternalLink>
    </Grid>
  );

  const Socials = () => (
    <Grid.Container gap={MEDIUM_GAP} alignItems="center" justify="center">
      {mail.length > 0 && (
        <SocialWrapper href={`mailto:${mail}`}>
          <Mail />
        </SocialWrapper>
      )}
      {github.length > 0 && (
        <SocialWrapper href={`https://github.com/${github}`}>
          <Github />
        </SocialWrapper>
      )}
      {linkedin.length > 0 && (
        <SocialWrapper href={`https://linkedin.com/in/${linkedin}`}>
          <Linkedin />
        </SocialWrapper>
      )}
      {homepage.length > 0 && (
        <SocialWrapper href={`https://${homepage}`}>
          <Home />
        </SocialWrapper>
      )}
    </Grid.Container>
  );

  return (
    <Grid xs={24} sm={12} md={8}>
      <Card hoverable>
        <Display
          caption={
            <Description
              title={
                <Text b style={{ textAlign: "center", width: "100%" }}>
                  {name}
                </Text>
              }
              style={{ textAlign: "center" }}
              content={
                <>
                  <Text style={{ fontWeight: "normal" }}>{title}</Text>
                  <Spacer />
                  <Socials />
                  {desc.length > 0 && (
                    <>
                      <Spacer />
                      <Text style={{ textAlign: "start" }}>{desc}</Text>
                    </>
                  )}
                </>
              }
            />
          }
        >
          <Avatar
            src={avatar}
            isSquare
            size="large"
            alt={`${name} ist ${title} bei QUIKK Software`}
          />
        </Display>
      </Card>
    </Grid>
  );
};

export default ServiceCard;