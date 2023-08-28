import { styled } from "@stitches/react";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
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
  // text-decoration: line-through;
  //   font-size: 12px;
  //   font-weight: 500;
  //   color: #747474;
});

export const ImageContainer = styled("div", {
  // width: "100%",
  // maxWidth: 576,
  // height: 656,
  // background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    borderRadius: "8px",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

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

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "#0b0b1f",
    },
  },
});
