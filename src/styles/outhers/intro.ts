import styled from "styled-components";
import introBackgroundImg from "../../assets/intro-background.png";
import { TitleText } from "../../components/Typography";
import { rgba } from "polished";
import React from "react";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    img {
      display: none;
    }
    text-align: center;
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    img {
      display: none;
    }
    text-align: center;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  font-family: "Roboto";
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    font-size: 2rem;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 480px) {
    grid-template-columns: none;
    justify-content: center;
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    grid-template-columns: none;
    justify-content: center;
  }
`;
