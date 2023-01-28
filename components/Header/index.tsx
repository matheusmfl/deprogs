import Image from "next/image";
import styles from "../../styles/home.module.css";
import Logo from "../../public/LOGO.svg";
import playButton from "../../public/Playcircle.svg";
import dlogo from "../../public/dlogo.svg";
import { Nav } from "../Nav";
import { HeaderContainer, MainButton, PlayButton } from "./styled";

export default function Header() {
  return (
    <HeaderContainer className={styles.banner}>
      <Nav />
      <div>
        <div>
          <Image src={Logo} alt="logo da marca"></Image>
          <p>
            Criação de <br />
            <strong className={styles.purpleText}>Brand e</strong>
            <br />
            <strong className={styles.orangeText}>Soluções</strong>
            <br />
            Inovadoras
          </p>
        </div>
        <MainButton>
          <a href="#">Entrar em contato</a>
        </MainButton>
      </div>
      <div className={styles.dProgs}>
        <div className={styles.playButton}>
          <PlayButton>
            <Image src={playButton} alt="botão de dar play"></Image>
          </PlayButton>
        </div>

        <Image
          src={dlogo}
          alt="Letra D com um raio, logo da Deprogs"
          style={{ maxWidth: "498px", maxHeight: "588px", overflow: "hidden" }}
        />
      </div>

      <div className={styles.asideHeader}>
        <p
          style={{ color: "white", fontWeight: "700" }}
          className={styles.asideHeaderP}
        >
          <span style={{ color: "#FF783C" }}>S</span>trategic
          <br />
          <span style={{ color: "#8633FF" }}>T</span>echnology
        </p>
      </div>
    </HeaderContainer>
  );
}
