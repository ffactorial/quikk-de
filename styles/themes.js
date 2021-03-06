import { Themes } from "@geist-ui/react";

export const QUIKK_light = Themes.createFromLight({
  type: "QUIKK_light",
  palette: {
    foreground: "#21242D",
    background: "#fefefe",
  },
});

export const QUIKK_dark = Themes.createFromDark({
  type: "QUIKK_dark",
  palette: {
    foreground: "#F5F6FA",
    background: "#21242D",
  },
});
