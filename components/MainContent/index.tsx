import { HeroContent, HeroText, MainCards, MainSectionOne } from "./styled";
import Image from "next/image";
import iconBranding from "../../public/iconBranding.svg";
import iconWeb from "../../public/iconWeb.svg";
import iconSolution from "../../public/iconSolutions.svg";
import mainHeroImage from "../../public/mainContentFirstImage.png";
import heroImageCard from "../../public/heroContent2.png";
import styles from "../../styles/main.module.css";

import backgroundImage from "../../public/heroSectionBackground.png";
export function MainContent() {
  return (
    <HeroContent>
      <div className={styles.mainContainer}>
        <MainSectionOne>
          <HeroText>
            <h1>
              Alta conversão <br />
              <span>EXPERIENCE</span>{" "}
            </h1>
            <div>
              <p>
                Desenvolvemos soluções envolvendo a mais alta tecnologia e
                criação de branding. Somos profissionais no que fazemos, unimos
                tecnologia, branding e marketing para alavancar seu produto ou
                negócio.
              </p>
              <span
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "72px",

                  textTransform: "uppercase",
                }}
              >
                +900MIL
              </span>
              <br />
              <span className="spanFaturamento">
                de faturamento gerados para clientes.
              </span>
            </div>
          </HeroText>
          <Image
            src={mainHeroImage}
            alt="Imagem que representa gráficos da empresa subindo"
          />
        </MainSectionOne>

        <MainCards>
          <ul>
            <li>
              <div className="cardsIcon">
                <Image src={iconBranding} alt="" />
                <p>
                  <span>branding</span>
                  <br />
                  Criação de uma estratégia de gestão da marca que visa torná-la
                  mais reconhecida pelo seu público e presente no mercado. A
                  estratégia busca a admiração e desejo pelos valores que a
                  marca cria em torno de si mesma.
                </p>
              </div>
            </li>
            <li>
              <div className="cardsIcon">
                <Image src={iconWeb} alt="" />
                <p>
                  <span>Web Design</span>
                  <br />
                  Construção de web sites institucionais, landing pages de alta
                  conversão, lojas online{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="cardsIcon">
                <Image src={iconSolution} className="iconSolution" alt="" />
                <p>
                  <span>Soluções</span>
                  <br />
                  Desenvolvimento de plugins e softwares que possam auxiliar sua
                  empresa.
                </p>
              </div>
            </li>
          </ul>
          <Image src={heroImageCard} alt="" />
        </MainCards>
      </div>
    </HeroContent>
  );
}
