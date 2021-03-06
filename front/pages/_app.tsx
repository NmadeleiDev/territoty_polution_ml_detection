import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { store } from "store/store";
import React from "react";
import Head from "next/head";
import MainLayout from "layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>EMERGENCY TRACKER</title>
        </Head>

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
