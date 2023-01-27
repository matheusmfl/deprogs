import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  height: "100vh",
  display: "flex",

  width: "100%",

  div: {
    div: {
      display: "flex",
      paddingTop: "7.8rem",
      paddingLeft: "6.2rem",
      p: {
        color: "white",
        display: "block",
        marginTop: "2.6rem",
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "60px",
        lineHeight: "70px",
      },
      a: {
        textDecorantion: "none",
      },
    },
  },
});

export const MainButton = styled("button", {
  width: "313px",
  height: "80px",
  background: "linear-gradient(94.05deg, #8633FF 24.2%, #FF783C 75.58%)",
  borderRadius: "12px",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "28px",
  lineHeight: "33px",
  color: "white",
  marginLeft: "8.2rem",
});
export const PlayButton = styled("button", {
  background: "linear-gradient(164.92deg, #8633FF 10.99%, #FF783C 71.83%)",
  borderRadius: "50%",
  width: "104px",
  height: "104px",
});
