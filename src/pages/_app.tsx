import React from "react";
import { type AppProps } from "next/app";

import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { AppContextProvider } from "@/contexts/AppContext";

import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AppContextProvider>
    </ThemeProvider>
  );
}
