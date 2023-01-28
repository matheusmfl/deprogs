import { styled } from "@stitches/react";
import backgroundImage from "../../public/heroSectionBackground.png";
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

  position: "relative",
});

export const MainSectionOne = styled("div", {
  "&::before": {
    display: "inlineBlock",
    content:
      "Nós criamos marcas que vendem, que faz a caixa registradora tilintar. ",
    width: "768px",
    height: "21px",
    background: "#8633FF",
    position: "absolute",
    top: 0,
    left: "25%",
    textAlign: "center",

    fontFamily: "Raleway",
    fontStyle: "normal",
    fontHeight: 700,
    fontSize: "18px",
    lineHeight: "21px",
  },
  paddingTop: "4.688rem",

  display: "flex",
  gap: "5.875rem",
});

export const MainCards = styled("div", {
  display: "flex",
  gap: "3rem",
  ul: {
    listStyle: "none",
    ".cardsIcon": {
      maxWidth: "24.5rem",
      display: "flex",
      marginBottom: "1rem",

      img: {
        marginRight: "18px",
      },

      span: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "38px",
        lineHeight: "72px",
        color: "white",

        textTransform: "capitalize",
      },

      p: {
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontHeight: "700",
        fontSize: "18px",
        lineHeight: "21px",

        color: "#B4B4B4",
      },

      ".iconSolution": {
        height: "120px",
        width: "124px",
      },
    },
  },
});
