import { Themes } from "@geist-ui/react";

export const QUIKK_light = Themes.createFromLight({
  type: "QUIKK_light",
  palette: {
    foreground: "#21242D",
    background: "#fefefe",
    success: "#FF584F",
  },
});

export const QUIKK_dark = Themes.createFromDark({
  type: "QUIKK_dark",
  palette: {
    foreground: "#fefefe",
    background: "#21242D",
  },
});