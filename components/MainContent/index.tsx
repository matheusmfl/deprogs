import { HeroContent, HeroText, MainSectionOne } from "./styled";
import Image from "next/image";
import mainHeroImage from "../../public/mainContentFirstImage.png";
export function MainContent() {
  return (
    <HeroContent>
      <MainSectionOne>
        <HeroText>
          <h1>
            Alta conversão <br />
            <span>EXPERIENCE</span>{" "}
          </h1>
          <div>
            <p>
              Desenvolvemos soluções envolvendo a mais alta tecnologia e criação
              de branding. Somos profissionais no que fazemos, unimos
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
    </HeroContent>
  );
}
