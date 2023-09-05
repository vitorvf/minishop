import { styled } from "@stitches/react";
import React from "react";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const DivHeader = styled("div", {
  width: "100%",
  maxWidth: "1120px",
  margin: "0px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  // space-between
  padding: "3.2rem 1.6rem",
});

export const DivButton = styled("div", {});

export const LinkLogo = styled("a", {});

export const ButtonCartContainer = styled("button", {
  // Estilos para a largura padrão do botão
  borderRadius: 6,
  border: 0,
  background: "#efeeee",
  padding: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray300",
  cursor: "pointer",
  position: "relative",
  marginLeft: "auto",

  svg: {
    height: 24,
    width: 24,
  },

  span: {
    position: "absolute",
    width: "1.4rem",
    height: "1.4rem",
    right: -7,
    top: -7,
    borderRadius: "50%",
    border: "3px solid #121214",
    background: "#121135",
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "13px",
    fontWeight: "bold",
  },

  // Adicione as media queries aqui
  "@media (max-width: 480px)": {
    marginLeft: 0, // Isso remove a margem à esquerda em telas menores que 480px
  },

  "@media (min-width: 513px) and (max-width: 613px)": {
    marginLeft: 0, // Isso remove a margem à esquerda em telas entre 513px e 613px
  },
});
