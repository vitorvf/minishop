// import styled, { css } from "styled-components";

// export const HeaderContainer = styled.header`
//   width: 100%;
//   height: 6.5rem;
//   background: ${({ theme }) => theme.colors["base-background"]};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: sticky;
//   top: 0;
//   left: 0;
//   z-index: 5;

//   > div {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
// `;

// export const HeaderButtonsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
// `;

// interface HeaderButtonProps {
//   variant: "purple" | "yellow";
// }

// export const HeaderButton = styled.button<HeaderButtonProps>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 4px;
//   min-width: 2.3rem;
//   height: 2.3rem;
//   border-radius: 6px;
//   border: none;
//   padding: 0 0.5rem;
//   position: relative;
//   cursor: inherit;

//   span {
//     position: absolute;
//     width: 1.25rem;
//     height: 1.25rem;
//     border-radius: 50%;
//     top: calc(-1.25rem / 2);
//     right: calc(-1.25rem / 2);
//     color: ${({ theme }) => theme.colors["base-white"]};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 0.75rem;
//     font-weight: 700;
//   }

//   font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

//   ${({ variant }) => css`
//     background: ${({ theme }) => theme.colors[`brand-${variant}-light`]};
//     color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};

//     span {
//       background: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
//     }
//   `}

//   ${({ variant }) =>
//     variant === "purple" &&
//     css`
//       svg {
//         color: ${({ theme }) => theme.colors[`brand-${variant}`]};
//       }
//     `}
// `;

import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ButtonCartContainer = styled("button", {
  borderRadius: 6,
  border: 0,
  background: "$gray800",
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
    width: "1.6rem",
    height: "1.6rem",
    right: -7,
    top: -7,
    borderRadius: "50%",
    border: "3px solid #121214",
    background: "$green500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "0.875rem",
    fontWeight: "bold",
  },
});
