import { styled } from "@stitches/react";

export const CardCartContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",
});

export const ImageCardCartContainer = styled("div", {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  maxWidth: 101,
  height: 93,

  img: {
    objectFit: "cover",
  },
});

export const CardCartContente = styled("div", {
  p: {
    fontSize: "$md",
    lineHeight: 1.6,
    fontWeight: "400",
  },

  span: {
    fontSize: "$md",
    lineHeight: 1.6,
    fontWeight: "bold",
  },

  button: {
    display: "block",
    marginTop: 6,

    background: "transparent",
    border: 0,

    color: "$green500",
    fontSize: "$md",
    fontWeight: "bold",
    transition: "0.2s",

    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

//New
export const CartItemContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 102,
  height: 93,
  backgroundImage: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: 1,

  span: {
    fontSize: "$md",
    fontWeight: 400,
    lineHeight: "160%",
    color: "#192C53",
    // Configuração para nomes grandes
    overflow: "hidden",
    textOverflow: "ellipsis", //os 3 potinhos
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1, //número máximo de linha que o parágrafo terá, tudo depois é representado pelo ...
  },

  strong: {
    fontSize: "$md",
    fontWeight: 700,
    lineHeight: "160%",
    color: "#192C53",
  },

  ".actionsContainer": {
    marginTop: "auto",
    display: "flex",
    gap: "1rem",

    "& > div": {
      maxWidth: "4.5rem",
    },

    "button.removeButton": {
      border: 0,
      borderRadius: 6,
      backgroundColor: "$gray700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 0.5rem",

      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: "160%",
      color: "$green500",
      transition: "color 0.4s, background-color 0.4s",

      "&:hover": {
        color: "$green300",
        backgroundColor: "$gray600",
      },
    },
  },
});
