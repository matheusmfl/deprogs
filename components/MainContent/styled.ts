import { styled } from "@stitches/react";

export const HeroText = styled("div", {
  maxWidth: "21.625rem",
  marginTop: "60px",

  p: {
    fontWeight: 700,
    fontSize: "16px",
    lineWeight: "19px",
  },

  ".spanFaturamento": {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",

    background: "linear-gradient(94.05deg, #8633FF 24.2%, #FF783C 75.58%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "background-clip": "text",
    "text-fill-color": "transparent",
  },

  h1: {
    color: "white",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "56px",

    span: {
      background: "linear-gradient(94.05deg, #8633FF 24.2%, #FF783C 75.58%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "background-clip": "text",
      "text-fill-color": "transparent",
    },
  },
});

export const HeroContent = styled("main", {
  color: "white",
  background: "gray",
});

export const MainSectionOne = styled("div", {
  paddingTop: "4.688rem",
  paddingLeft: "10.375rem",
  display: "flex",
  gap: "5.875rem",
});
