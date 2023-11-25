import { stylesWithCssVar } from "utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const animationOrder = {
  initial: 0,
  showParagraphOne: 0.2,
  showParagraphTwo: 0.3,
  showCircleImage: 0.5,
  growCircleImage: 0.7,
  startHide: 0.85,
  endHide: 1,
};

const CircleAnimations = ({ targetRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const [imgPos, setImgPos] = useState<any>({});
  const [whiteBGImgPos, setWhiteBGImgPos] = useState<any>({});

  const imageScale2 = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwo,
      animationOrder.showCircleImage,
      animationOrder.growCircleImage,
    ],
    [0, 3, 35]
  );

  useEffect(() => {
    const el: SVGCircleElement = document.querySelector(
      "svg #zoom-face"
    ) as SVGCircleElement;

    const el2: SVGCircleElement = document.querySelector(
      "svg #zoom-white-bg"
    ) as SVGCircleElement;
    setWhiteBGImgPos(el2.getBBox());
    setImgPos(el.getBBox());
  }, []);

  return (
    <div
      className="mt-16 flex justify-end"
      style={{
        width: "100%",
      }}
    >
      {/* <motion.img
        className="fixed object-cover"
        style={{
          zIndex: 1,
          scale: 5,
          width: "100px",
          top: imgPos?.y + (imgPos?.height - 100) / 2,
          left: imgPos?.x + (imgPos?.width - 100) / 2,
        }}
        src="faces/face_big.svg"
      /> */}

      <div className="with-network fixed object-cover">
        <motion.img
          className="object-cover"
          style={{
            scale: imageScale2,
            width: "100px",
            top: whiteBGImgPos?.y + (whiteBGImgPos?.height - 100) / 2,
            left: whiteBGImgPos?.x + (whiteBGImgPos?.width - 100) / 2,
          }}
          src="bg_white_small.svg"
        />
      </div>
    </div>
  );
};

export const Reputation = ({ parentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.showParagraphTwo,
    ],
    [0, 1, 0]
  );

  const paragraphTwoOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphOne,
      animationOrder.showParagraphTwo,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  return (
    <>
      {/* <CircleAnimations targetRef={parentRef} /> */}
      <div
        className="fixed flex origin-center flex-col justify-center text-white"
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          width: "100vw",
        }}
      >
        <motion.div
          className="translate-y-centered-offset flex-col items-center justify-center"
          style={stylesWithCssVar({
            opacity: paragraphOneOpacity,
          })}
        >
          <h1 className="mb-12 text-center font-heading text-xl">
            Here’s something about <br /> reputation…
          </h1>
        </motion.div>

        <motion.div
          className="translate-y-centered-offset flex-col items-center justify-center"
          style={stylesWithCssVar({
            opacity: paragraphTwoOpacity,
          })}
        >
          <h1 className="mb-12 text-center font-heading text-xl">
            … and here about <br />
            interactions
          </h1>
        </motion.div>
      </div>
    </>
  );
};
