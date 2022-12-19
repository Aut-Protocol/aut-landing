import { Modal } from "@redq/reuse-modal";
import React, { useEffect } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import Navbar from "containers/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme";
import ResetCSS from "common/assets/css/style";
import GlobalStyle from "containers/app.style";
import "common/assets/css/rc-collapse.css";
import "common/assets/css/fractul.css";
import { DrawerProvider } from "common/contexts/DrawerContext";

export function reportWebVitals(metric) {
  // console.log(metric);
}

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    const loader = document.getElementById("aut-splash-loading");
    if (loader) {
      loader.style.display = "none";
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Āut</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta property="og:title" content="Aut" />
          <meta
            name="description"
            content="Do more with your DAO. Āut is a suite of DAO-native Tools to expand decentralized communities."
          />
          <meta
            property="og:description"
            content="Do more with your DAO. Āut is a suite of DAO-native Tools to expand decentralized communities."
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <Modal>
          <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Component {...pageProps} />
        </Modal>
      </>
    </ThemeProvider>
  );
}
