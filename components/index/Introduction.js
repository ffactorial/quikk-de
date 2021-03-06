import { Grid, useTheme } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import joyce from "../../assets/images/joyce_landing.jpg";
import IntroductionSection from "./IntroductionSection";

const Introduction = () => {
  const theme = useTheme();
  return (
    <section style={{ borderTop: `1px solid ${theme.palette.accents_2}` }}>
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          <IntroductionSection
            src={joyce}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum."
          />
          <IntroductionSection
            src={joyce}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum."
            revert={true}
          />
          <IntroductionSection
            src={joyce}
            title="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum."
          />
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Introduction;
