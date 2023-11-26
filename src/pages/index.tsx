import { useRef } from "react";
import React from "react";
import Head from "next/head";
import TopContent from "containers/sections/TopContent";
import MainBackground from "containers/MainBackground";
import dynamic from "next/dynamic";
import { useOnScreen } from "common/utils/use-on-screen";
import { useDeviceSize } from "common/utils/use-device-size";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";

const Slogan = dynamic(() => import("containers/sections/Slogan"));
const Parallax = dynamic(() => import("common/components/parallax"), {
  ssr: false,
});
const AutFeatures = dynamic(() => import("containers/sections/AutFeatures"));
const AutOS = dynamic(() => import("containers/sections/AutOS"));
const OsFooter = dynamic(() => import("containers/sections/OSFooter"));

export default function Home() {
  const { width, height } = useDeviceSize();

  const topContentTargetRef = useRef<HTMLDivElement | null>(null);
  const isTopContentVisible = useOnScreen(topContentTargetRef, "TopContent", {
    threshold: 0,
  });

  const sloganTargetRef = useRef<HTMLDivElement | null>(null);
  const isSloganVisible = useOnScreen(sloganTargetRef, "Slogan", {
    threshold: 0,
  });

  const autFeaturesTargetRef = useRef<HTMLDivElement | null>(null);
  const isAutFeaturesVisible = useOnScreen(
    autFeaturesTargetRef,
    "AutFeatures",
    {
      threshold: 0,
    }
  );

  const autOSTargetRef = useRef<HTMLDivElement | null>(null);
  const isAutOSVisible = useOnScreen(autOSTargetRef, "AutOS", {
    threshold: 0,
  });

  const footerTargetRef = useRef<HTMLDivElement | null>(null);
  const isFooterVisible = useOnScreen(footerTargetRef, "Footer", {
    threshold: 0,
  });

  return (
    <>
      <Head>
        <title>ĀutOS</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>

      <DrawerProvider>
        {sloganTargetRef?.current && <Navbar parentRef={sloganTargetRef} />}
      </DrawerProvider>

      <div className="relative z-10 overflow-y-scroll">
        {sloganTargetRef.current && (
          <MainBackground
            width={width}
            height={height}
            bottomRef={autFeaturesTargetRef}
            parentRef={sloganTargetRef}
            isSloganVisible={!!sloganTargetRef.current}
          />
        )}
        <section
          className="top-content relative mb-[8rem] h-screen"
          ref={topContentTargetRef}
        >
          {topContentTargetRef.current && (
            <TopContent parentRef={topContentTargetRef} />
          )}
        </section>

        <section className="slogan relative h-[1400vh]" ref={sloganTargetRef}>
          {(isSloganVisible || isTopContentVisible) && (
            <Slogan
              bottomRef={autFeaturesTargetRef}
              parentRef={sloganTargetRef}
            />
          )}
        </section>
      </div>

      <section
        className="features relative h-screen"
        ref={autFeaturesTargetRef}
      >
        {autOSTargetRef.current && <AutFeatures parentRef={autOSTargetRef} />}
      </section>

      <section className="aut-os relative z-20 h-[400vh]" ref={autOSTargetRef}>
        {autOSTargetRef.current && (
          <AutOS
            width={width}
            height={height}
            footerTargetRef={footerTargetRef}
            parentRef={autOSTargetRef}
          />
        )}
      </section>
      <section className="aut-os relative z-30 h-[50vh]" ref={footerTargetRef}>
        {footerTargetRef?.current && <OsFooter parentRef={footerTargetRef} />}
      </section>
    </>
  );
}
