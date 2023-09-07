import { styled } from "@stitches/react";
import React from "react";

export const ProductContainer = styled("main", {
  display: "grid",
  // gridTemplateColumns: "1fr 1fr",
  gridTemplateColumns: "2fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
});

export const PriceAntes = styled("div", {
  textDecoration: "line-through",
  fontSize: "12px",
  fontWeight: "600",
  color: "#747474",
});

export const ImageContainer = styled("div", {
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    borderRadius: "8px",

    "@media (max-width: 480px)": {
      width: "100%",
    },

    "@media (min-width: 513px) and (max-width: 613px)": {
      width: "100%",
    },
  },

  "@media (max-width: 480px)": {
    padding: "30px",
    width: "100vw",
    marginTop: "6rem",
  },

  "@media (min-width: 513px) and (max-width: 613px)": {
    padding: "30px",
    width: "100vw",
    marginTop: "6rem",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "7rem",

  // Adicione as media queries aqui
  "@media (max-width: 480px)": {
    gridRow: 2, // Isso remove a margem à esquerda em telas menores que 480px
    textAlign: "center",
    alignItems: "center",
  },

  "@media (min-width: 513px) and (max-width: 613px)": {
    gridRow: 2, // Isso remove a margem à esquerda em telas entre 513px e 613px
    textAlign: "center",
    alignItems: "center",
  },

  h1: {
    fontSize: "2rem",
    color: "#747474",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "2rem",
    color: "#747474",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "#747474",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "#192c53",
    border: 0,
    color: "white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "@media (max-width: 480px)": {
      marginTop: "14px",
    },

    "@media (min-width: 513px) and (max-width: 613px)": {
      marginTop: "14px",
    },

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "#0b0b1f",
    },
  },
});
