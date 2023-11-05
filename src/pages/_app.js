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
import { DrawerProvider } from "common/contexts/DrawerContext";
import CookieConsent from "react-cookie-consent";
import localFont from "next/font/local";

export function reportWebVitals(metric) {
  // console.log(metric);
}

const FractulAltBold = localFont({
  src: "fonts/FractulAltBold/font.woff2",
  variable: "--factul-alt-bold",
});

const FractulAltLight = localFont({
  src: "fonts/FractulAltLight/font.woff2",
});
const FractulRegular = localFont({
  src: "fonts/FractulRegular/font.woff2",
});

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
          <title>Āut Labs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta property="og:title" content="Āut Labs" />
          <meta
            name="description"
            content="ĀutOS - the Operating System of yourself. The social map of your Web3 reputation. Where you get in, by opting out."
          />
          <meta
            property="og:description"
            content="ĀutOS - the Operating System of yourself. The social map of your Web3 reputation. Where you get in, by opting out."
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* <style jsx global>
          {`
            html {
              font-family: ${FractulRegular.style.fontFamily};
            }
            .fractul-light {
              font-family: ${FractulAltLight.style.fontFamily} !important;
            }
            .fractul-bold {
              font-family: ${FractulAltBold.style.fontFamily} !important;
            }
          `}
        </style> */}

        <style jsx global>{`
          :root {
            /* ... */
            --fractul-alt-light: ${FractulAltLight.style.fontFamily};
            --fractul-alt-bold: ${FractulAltBold.style.fontFamily};
            --fractul-regular: ${FractulRegular.style.fontFamily};
          }
        `}
        </style>
        <Modal>
          {/* <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky> */}
          <main>
            <Component {...pageProps} />
          </main>
          {/* <CookieConsent
            location="bottom"
            buttonText="I understand"
            cookieName="autcookie"
            className="cookie-consent"
            style={{ background: "#262626", zIndex: "9999" }}
            buttonClasses="cookie-consent-btn"
            disableButtonStyles={true}
            expires={150}
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent> */}
        </Modal>
      </>
    </ThemeProvider>
  );
}
