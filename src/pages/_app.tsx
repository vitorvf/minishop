import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import CartContextProvider from "../contexts/CartContext";
import DefaultLayout from "../layouts/DefaultLayout";
import { defaultTheme } from "../styles/themes/default";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <DefaultLayout />
        <Component {...pageProps} />
      </CartContextProvider>
    </ThemeProvider>
  );
}
