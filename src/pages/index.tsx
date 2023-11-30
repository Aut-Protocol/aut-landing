import { useContext, useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useDeviceSize } from "common/utils/use-device-size";
import Navbar from "containers/Navbar";
import { Loading } from "containers/Loading";
import { SloganContext } from "containers/sections/Slogan";
import { useTransform } from "framer-motion";

import MainBackground from "containers/MainBackground";
const TopContent = dynamic(() => import("containers/sections/TopContent"));
const Slogan = dynamic(() => import("containers/sections/Slogan"));
const AutFeatures = dynamic(() => import("containers/sections/AutFeatures"));
const AutOS = dynamic(() => import("containers/sections/AutOS"));
const OsFooter = dynamic(() => import("containers/sections/OSFooter"));

export default function Home() {
  const { width, height } = useDeviceSize();
  const [loading, setLoading] = React.useState(true);
  const { scrollYProgress } = useContext(SloganContext);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const visibilityChange = useTransform(scrollYProgress, (pos) => pos > 0);
  useEffect(() => {
    visibilityChange.on("change", setIsBottomVisible);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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

      <Navbar />

      {loading && <Loading />}

      <>
        <div className="relative z-10 overflow-y-scroll">
          <MainBackground width={width} height={height} />
          {!loading && (
            <>
              <TopContent />
              <Slogan />
            </>
          )}
        </div>

        {isBottomVisible && (
          <>
            <AutFeatures />
            <AutOS />
            <OsFooter />
          </>
        )}
      </>
    </>
  );
}
