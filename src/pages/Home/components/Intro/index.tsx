import introImg from "../../../../assets/intro-img.png";
import { ShoppingCart, Package, Timer, Coffee, Alarm } from "phosphor-react";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import Image from "next/image";
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Descubra a Paixão pelo Futebol em Cada Camisa
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Seja um verdadeiro fã de futebol com as camisas de time mais
              incríveis em nosso mini shop online!
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o produto intacto"
            />
            <InfoWithIcon
              iconBg={colors["base-blue-hover"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors["base-blue"]}
              icon={<Alarm weight="fill" />}
              text="Seja notificado e acompanhe o produto"
            />
          </BenefitsContainer>
        </div>

        <Image src={introImg} alt="" width={450} height={450} />
      </IntroContent>
    </IntroContainer>
  );
}
