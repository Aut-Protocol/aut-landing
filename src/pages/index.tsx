import { useRef } from "react";
import React from "react";
import Head from "next/head";

import TopContent from "containers/sections/TopContent";
import MainBackground from "containers/MainBackground";
import dynamic from "next/dynamic";
import { useOnScreen } from "common/utils/use-on-screen";
import OsFooter from "containers/sections/OSFooter";
import { useDeviceSize } from "common/utils/use-device-size";

const Slogan = dynamic(() => import("containers/sections/Slogan"));
const Parallax = dynamic(() => import("common/components/parallax"), {
  ssr: false,
});
const AutFeatures = dynamic(() => import("containers/sections/AutFeatures"));
const AutOS = dynamic(() => import("containers/sections/AutOS"));

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

      {sloganTargetRef.current && (
        <MainBackground
          width={width}
          height={height}
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
          <Slogan parentRef={sloganTargetRef} />
        )}
      </section>

      <section className="empty relative h-screen" />

      <section
        className="features relative h-screen"
        ref={autFeaturesTargetRef}
      >
        <Parallax speed={-0.5}>
          {isAutFeaturesVisible && <AutFeatures targetRef={autOSTargetRef} />}
        </Parallax>
      </section>

      <section
        style={{
          background: "#000000",
        }}
        className="aut-os relative h-[300vh]"
      >
        <Parallax speed={-0.5}>
          <div ref={autOSTargetRef}>
            {isAutOSVisible && <AutOS targetRef={autOSTargetRef} />}
          </div>
          <OsFooter targetRef={footerTargetRef} />
        </Parallax>
      </section>
    </>
  );
}
