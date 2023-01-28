import menuBurguer from "../../public/menuBurguer.svg";
import lupa from "../../public/lupa.svg";
import Image from "next/image";
import { styled } from "@stitches/react";

export const NavContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "linear-gradient(180deg, #8633FF 0%, #FF783C 71.35%)",
  minWidth: "93px",
  height: "100%",
  button: {
    border: "none",
    background: "none",
  },
  ul: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    li: {
      fontFamily: "Raleway",
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "21px",
      letterSpacing: "0em",
      textAlign: "left",

      listStyle: "none",
      color: "white",
      textDecoration: "underline",
    },
  },
});
export function Nav() {
  return (
    <NavContainer>
      <ul>
        <button>
          <Image src={menuBurguer} alt="Botão menu"></Image>
        </button>
        <button>
          <Image src={lupa} alt="Botão pesquisar"></Image>
        </button>
        <li>Blog</li>
        <li>Tech</li>
        <li>Wpp</li>
      </ul>
    </NavContainer>
  );
}
