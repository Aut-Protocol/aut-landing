import { Hero } from "containers/sections/hero";
import { SamePage } from "containers/sections/same-page";
import { Yourself } from "containers/sections/yourself";
import MainBackground from "../containers/MainBackground";
import { Reputation } from "containers/sections/reputation";
import { useEffect, useRef, useState } from "react";
import WhiteBG from "../containers/MainBackground/WhiteBG";
import Faces from "../containers/MainBackground/Faces";
import React from "react";
import Head from "next/head";

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

  console.log(width, height);

  return { width, height };
};

const useOnScreen = (ref: any, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};

export default function Home() {
  const repTargetRef = useRef<HTMLDivElement | null>(null);
  const isRepfVisible = useOnScreen(repTargetRef);

  const yourselfTargetRef = useRef<HTMLDivElement | null>(null);
  const isYourselfVisible = useOnScreen(yourselfTargetRef);
  
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
      <main>
        <MainBackground
          dimensions={dimensions}
          whiteBG={<WhiteBG parentRef={repTargetRef} />}
          faces={
            <Faces
              dimensions={dimensions}
              repParentRef={repTargetRef}
              parentRef={yourselfTargetRef}
            />
          }
        />
        <Hero />
        <div className="relative z-10 w-full overflow-x-clip">
          <SamePage />
          <section ref={yourselfTargetRef} className="relative h-[550vh]">
            {isYourselfVisible && (
              <Yourself
                parentRef={yourselfTargetRef}
                repParentRef={repTargetRef}
              />
            )}
          </section>
          <section className="relative h-[550vh]" ref={repTargetRef}>
            {isRepfVisible && <Reputation parentRef={repTargetRef} />}
          </section>
        </div>
      </main>
    </>
  );
}