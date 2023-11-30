import "containers/globals.css";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme";
import ResetCSS from "common/assets/css/style";
import localFont from "next/font/local";
import Script from "next/script";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { TopContentProvider } from "containers/sections/TopContent";
import { SloganProvider } from "containers/sections/Slogan";
import { AutFeaturesProvider } from "containers/sections/AutFeatures";
import { OSFooterProvider } from "containers/sections/OSFooter";
import { AutOSProvider } from "containers/sections/AutOS";

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

export default function CustomApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="googleAnalytics" strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
        <Head>
          <title>ĀutOS</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            property="og:title"
            content="ĀutOS - the Operating System of yourself."
          />
          <meta
            name="description"
            content="ĀutOS is the social map of your Web3 reputation. A Web of Trust - where you get in, by opting out."
          />
          <meta
            property="og:description"
            content="ĀutOS is the social map of your Web3 reputation. A Web of Trust - where you get in, by opting out."
          />
        </Head>
        <ResetCSS />
        {/* <GlobalStyle /> */}
        <style jsx global>
          {`
            :root {
              /* ... */
              --fractul-alt-light: ${FractulAltLight.style.fontFamily};
              --fractul-alt-bold: ${FractulAltBold.style.fontFamily};
              --fractul-regular: ${FractulRegular.style.fontFamily};
            }
          `}
        </style>
        <main>
          <OSFooterProvider>
            <AutFeaturesProvider>
              <SloganProvider>
                <TopContentProvider>
                  <AutOSProvider>
                    <DrawerProvider>
                      <Component {...pageProps} />
                    </DrawerProvider>
                  </AutOSProvider>
                </TopContentProvider>
              </SloganProvider>
            </AutFeaturesProvider>
          </OSFooterProvider>
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
      </>
    </ThemeProvider>
  );
}
