import { LoaderStyles } from "common/utils/loader";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Aut" />
          <link
            href="/favicon-light.ico"
            rel="icon"
            media="(prefers-color-scheme: light)"
          />
          <link
            href="/favicon-dark.ico"
            rel="icon"
            media="(prefers-color-scheme: dark)"
          />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <style>{LoaderStyles}</style>
        </Head>
        <body>
          <div id="aut-splash-loading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 1000 1000"
              version="1.1"
              viewBox="0 0 1000 1000"
              xmlSpace="preserve"
            >
              <defs>
                <filter id="a" filterUnits="userSpaceOnUse">
                  <feOffset />
                  <feGaussianBlur result="blur" stdDeviation={120} />
                  <feFlood floodColor="#192afc" floodOpacity={1} />
                  <feComposite in2="blur" operator="in" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter id="b" filterUnits="userSpaceOnUse">
                  <feOffset />
                  <feGaussianBlur result="blur-2" stdDeviation={120} />
                  <feFlood floodColor="#14ecec" floodOpacity={1} />
                  <feComposite in2="blur-2" operator="in" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <circle
                style={{
                  filter: "url(#a)",
                  fill: "#262626",
                }}
                cx="500"
                cy="500"
                r="160"
                className="st"
              ></circle>
              <circle
                style={{
                  filter: "url(#b)",
                  fill: "#262626",
                }}
                cx="500"
                cy="500"
                r="160"
                className="st st--small"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="xml"
                  dur="5s"
                  from="0 500 500"
                  repeatCount="indefinite"
                  to="-360 500 500"
                  type="rotate"
                ></animateTransform>
              </circle>
              <circle
                cx="500"
                cy="500"
                r="240"
                className="st st--transparent"
              ></circle>
              <circle cx="500" cy="500" r="240" className="st st--medium">
                <animateTransform
                  attributeName="transform"
                  attributeType="xml"
                  dur="4s"
                  from="0 500 500"
                  repeatCount="indefinite"
                  to="-360 500 500"
                  type="rotate"
                ></animateTransform>
              </circle>
              <circle cx="500" cy="500" r="320" className="st"></circle>
              <circle cx="500" cy="500" r="320" className="st st--three">
                <animateTransform
                  attributeName="transform"
                  attributeType="xml"
                  dur="2s"
                  from="0 500 500"
                  repeatCount="indefinite"
                  to="-360 500 500"
                  type="rotate"
                ></animateTransform>
              </circle>
            </svg>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
