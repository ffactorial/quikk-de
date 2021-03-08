import {
  Button,
  Grid,
  Input,
  Text,
  Textarea,
  useToasts,
} from "@geist-ui/react";
import { Mail, Phone, Clock, MapPin } from "@geist-ui/react-icons";
import React, { useState } from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import Title from "../components/misc/Title";
import TitleWithDesc from "../components/misc/TitleWithDesc";
import {
  ExternalLinkWithIcon,
  TextWithIcon,
} from "../components/misc/WithIconHelper";
import { MEDIUM_GAP, XTRA_LARGE_GAP } from "../src/constants";

const kontakt = () => {
  const [toasts, setToast] = useToasts();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // setToast({ text: "Ihre Nachricht wurde erfolgreich gesendet." });
  };

  const ContactText = ({ children }) => (
    <Grid xs={24}>
      <Text style={{ margin: 0, lineHeight: 1 }}>{children}</Text>
    </Grid>
  );

  const ContactInformation = () => (
    <Grid xs={24}>
      <Grid.Container gap={MEDIUM_GAP}>
        <ContactText>
          <ExternalLinkWithIcon href="mailto:info@quikk.de" icon={<Mail />}>
            info@quikk.de
          </ExternalLinkWithIcon>
        </ContactText>
        <ContactText>
          <ExternalLinkWithIcon href="tel:+4915233902667" icon={<Phone />}>
            +49 1523 390 2667
          </ExternalLinkWithIcon>
        </ContactText>
        <ContactText>
          <TextWithIcon icon={<Clock />}>
            Mo. - Fr. von 09:00 - 17:00
          </TextWithIcon>
        </ContactText>
        <ContactText>
          <TextWithIcon icon={<MapPin />}>
            Hahler Straße 285, 32427 Minden
          </TextWithIcon>
        </ContactText>
      </Grid.Container>
    </Grid>
  );

  const ContactForm = () => (
    <Grid xs={24}>
      <form style={{ width: "100%" }} onSubmit={onSubmitHandler}>
        <Grid.Container gap={MEDIUM_GAP}>
          <Grid xs={24}>
            <Input placeholder="Ihr Name" width="100%" type="text" required />
          </Grid>
          <Grid xs={24}>
            <Input
              placeholder="Ihre E-Mail Adresse"
              width="100%"
              type="email"
              required
            />
          </Grid>
          <Grid xs={24}>
            <Textarea placeholder="Ihr Anliegen" width="100%" required />
          </Grid>
          <Grid xs={24}>
            <Button type="success" style={{ width: "100%" }} htmlType="submit">
              Absenden
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </Grid>
  );

  const title = "Kontakt";
  const desc = " Wie und wann Sie uns am besten erreichen können.";

  return (
    <>
      <TitleAndDesc {...{ title, desc }} />
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <TitleWithDesc {...{ title, desc }} />
          <ContactInformation />
          <ContactForm />
        </Grid.Container>
      </Container>
    </>
  );
};

export default kontakt;
