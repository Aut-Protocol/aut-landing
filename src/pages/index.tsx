import TopContent from "containers/sections/TopContent";
import Slogan from "containers/sections/Slogan";
import MainBackground from "../containers/MainBackground";
import { RefObject, useEffect, useRef, useState } from "react";
import WhiteBG from "../containers/MainBackground/WhiteBG";
import Faces from "../containers/MainBackground/Faces";
import React from "react";
import Head from "next/head";
import WhiteCircle from "containers/MainBackground/WhiteCircle";
import Parallax from "common/components/parallax";
import { AutFeatures } from "containers/sections/aut-features";
import AutOSSection from "containers/sections/aut-os";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, height };
};

const useOnScreen = (
  ref: RefObject<Element>,
  name: string,
  options: IntersectionObserverInit = {
    threshold: 0,
  }
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const updateRootMarginBasedOnTarget = () => {
      const mergedOptions = {
        ...options,
      };
      return mergedOptions;
    };

    // Use a function to get the options so that we don't need to specify the dependencies for useEffect
    const observerOptions = updateRootMarginBasedOnTarget();

    // Create the observer with options specific to the target element
    const observer = new IntersectionObserver(([entry]) => {
      console.log(`Is intersecting: ${name} - ${entry.isIntersecting}`);
      setIntersecting(entry.isIntersecting);
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, name]);

  return isIntersecting;
};

export default function Home() {
  const topContentTargetRef = useRef<HTMLDivElement | null>(null);
  const isTopContentVisible = useOnScreen(topContentTargetRef, "TopContent", {
    threshold: 0.2,
  });

  const sloganTargetRef = useRef<HTMLDivElement | null>(null);
  const isSloganVisible = useOnScreen(sloganTargetRef, "Slogan", {
    threshold: 0,
  });

  const autOSTargetRef = useRef<HTMLDivElement | null>(null);
  const isAutOSVisible = useOnScreen(autOSTargetRef, "Slogan", {
    threshold: 0,
  });

  const dimensions = useDeviceSize();

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

      <MainBackground
        dimensions={dimensions}
        whiteBG={
          isSloganVisible && (
            <WhiteBG dimensions={dimensions} parentRef={sloganTargetRef} />
          )
        }
        faces={
          topContentTargetRef?.current && (
            <Faces
              dimensions={dimensions}
              parentRef={sloganTargetRef}
              whiteCircle={
                isSloganVisible && <WhiteCircle parentRef={sloganTargetRef} />
              }
            />
          )
        }
      />
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
      <section className="relative h-[200vh]"></section>

      <section className="h-screen">
        <Parallax speed={-0.5}>
          <AutFeatures />
        </Parallax>
      </section>

      <section className="h-[300vh]">
        <Parallax speed={-0.5}>
          {isAutOSVisible && <AutOSSection targetRef={autOSTargetRef} />}
        </Parallax>
      </section>

      {/* <section className="">{<OsFooter />}</section> */}
    </>
  );
}
