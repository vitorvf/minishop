import styled from "styled-components";
import React from "react";

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  color?: "title" | "subtitle" | "text";
  weight?: string | number;
}

interface RegularTextProps {
  size?: "l" | "m" | "s";
  color?: "text" | "subtitle" | "label";
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};

  @media (max-width: 480px) {
    text-align: center;
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    text-align: center;
  }
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "text"}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? "m"}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`;
