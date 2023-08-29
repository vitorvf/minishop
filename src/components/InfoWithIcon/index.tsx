import { InfoWithIconContainer, IconContainer } from "./styles";
import { ReactNode } from "react";
import React from "react";

interface BenefitItemProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export default function InfoWithIcon({ icon, text, iconBg }: BenefitItemProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}
