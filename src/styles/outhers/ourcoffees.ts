import styled from "styled-components";
import React from "react";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 480px) {
    max-width: 1140px;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    max-width: 1140px;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const CoffeeList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 480px) {
    margin-top: 3.375rem;
    margin-bottom: 9.8125rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 2.5rem 2rem;
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    margin-top: 3.375rem;
    margin-bottom: 9.8125rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 2.5rem 2rem;
  }

  @media (max-width: 480px) {
    a {
      margin: auto;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }

  @media screen and (min-width: 513px) and (max-width: 613px) {
    a {
      margin: auto;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
`;
