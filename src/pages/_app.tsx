import { CartContextProvider } from "@/contexts/CartContext";
import { defaultTheme } from "@/styles/themes/default";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import React from "react";

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
