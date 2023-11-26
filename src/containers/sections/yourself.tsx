import { stylesWithCssVar } from "utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typography from "common/components/Typography";


const animationOrder = {
  initial: 0,
  showParagraphOne: 0.15,
  showCircleImage: 0.25,
  showParagraphTwo: 0.4,
  showParagraphThree: 0.5,
  showParagraphFour: 0.6,
  showParagraphTwoLine: 0.65,
  showParagraphThreeLine: 0.7,
  showParagraphFourLine: 0.75,

  startHide: 0.85,
  endHide: 1,
};

const CircleAnimations = ({ targetRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const [imgPos, setImgPos] = useState<any>({});

  const imageScale = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.showCircleImage],
    [0, 5]
  );

  const imageScale2 = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showCircleImage,
      animationOrder.showParagraphFour,
    ],
    [0, 3, 6]
  );

  useEffect(() => {
    const el: SVGCircleElement = document.querySelector(
      "svg #zoom-face"
    ) as SVGCircleElement;
    let boundingBox = el.getBBox();
    setImgPos(boundingBox);
  }, []);

  return (
    <div
      className="mt-16 flex justify-end"
      style={{
        width: "100%",
      }}
    >
      <motion.img
        className="fixed object-cover"
        style={{
          zIndex: 1,
          scale: imageScale,
          width: "100px",
          top: imgPos?.y + (imgPos?.height - 100) / 2,
          left: imgPos?.x + (imgPos?.width - 100) / 2,
        }}
        src="face.svg"
      />
      <motion.img
        className="fixed object-cover"
        style={{
          scale: imageScale2,
          width: "100px",
          top: imgPos?.y + (imgPos?.height - 100) / 2,
          left: imgPos?.x + (imgPos?.width - 100) / 2,
        }}
        src="face_circle_1.svg"
      />
      <motion.img
        className="fixed object-cover"
        style={{
          scale: imageScale2,
          width: "130px",
          top: imgPos?.y + (imgPos?.height - 130) / 2,
          left: imgPos?.x + (imgPos?.width - 130) / 2,
        }}
        src="face_circle_2.svg"
      />
      <motion.img
        className="fixed object-cover"
        style={{
          scale: imageScale2,
          width: "130px",
          top: imgPos?.y + (imgPos?.height - 130) / 2,
          left: imgPos?.x + (imgPos?.width - 130) / 2,
        }}
        src="face_circle_3.svg"
      />
    </div>
  );
};

export const Yourself = ({ parentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  /* ------ Yourself paragraph animation START ------ */
  const paragraphOneOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  const paragraphOneTranslateY = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.showParagraphOne],
    ["1rem", "-2rem"]
  );

  /* ------ Yourself... paragraph animation END ------ */

  /* ------ outside the system paragraph animation START ----- */
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

  const paragraphTwoTranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphOne,
      animationOrder.showParagraphTwo,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    ["4rem", "0rem", "0rem", "4rem"]
  );

  const paragraphTwoLineOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFour,
      animationOrder.showParagraphTwoLine,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  const paragraphTwoLineTranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFour,
      animationOrder.showParagraphTwoLine,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    ["-4rem", "0rem", "0rem", "-4rem"]
  );
  /* ------ outside the system paragraph animation END ----- */

  /* ------ outside conventions paragraph animation START ----- */
  const paragraphThreeOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwo,
      animationOrder.showParagraphThree,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  const paragraphThreeTranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwo,
      animationOrder.showParagraphThree,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    ["10rem", "6rem", "6rem", "10rem"]
  );

  const paragraphThreeLineOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFour,
      animationOrder.showParagraphThreeLine,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  const paragraphThreeLineTranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFour,
      animationOrder.showParagraphThreeLine,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    ["-4rem", "0rem", "0rem", "-4rem"]
  );

  /* ------ outside conventions paragraph animation END ----- */

  /* ------ outside the status quo paragraph animation START ----- */
  const paragraphFourOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphThree,
      animationOrder.showParagraphFour,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  const paragraphFourTranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphThree,
      animationOrder.showParagraphFour,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    ["16rem", "10rem", "10rem", "16rem"]
  );

  const paragraphFourLineOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFour,
      animationOrder.showParagraphThreeLine,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    [0, 1, 1, 0]
  );

  const paragraphFourLineTranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphFour,
      animationOrder.showParagraphThreeLine,
      animationOrder.startHide,
      animationOrder.endHide,
    ],
    ["-4rem", "0rem", "0rem", "-4rem"]
  );
  /* ------ outside the status quo paragraph animation END ----- */

  return (
    <>
      <div
       className="fixed flex origin-center justify-center text-white"
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          width: "100vw",
        }}
      >
        <motion.div
          className="flex-col items-center justify-center"
          style={stylesWithCssVar({
            opacity: paragraphOneOpacity,
            "--y": paragraphOneTranslateY,
          })}
        >
          <Typography
            color="white"
            as="subtitle1"
            textAlign="center"
            p={{
              _: "0px 10px",
              md: "0px",
            }}
          >
            Yourself...
          </Typography>
        </motion.div>

        <div className="mr-20 mt-10 flex justify-center gap-10">
          <motion.div
            className="translate-y-centered-offset flex flex-col items-center justify-center"
            style={stylesWithCssVar({
              opacity: paragraphTwoOpacity,
              "--y": paragraphTwoTranslateY,
            })}
          >
            <h1 className="mb-12 text-center font-heading text-xl">
              <strong>outside</strong> <br /> the system
            </h1>

            <motion.figure
              className="translate-y-centered-offset absolute flex flex-col items-center justify-center"
              style={stylesWithCssVar({
                right: "-80%",
                top: "-4rem",
                opacity: paragraphTwoLineOpacity,
                "--y": paragraphTwoLineTranslateY,
              })}
            >
              <img src="/lines/para_line_1.svg" className="w-auto" />
            </motion.figure>
          </motion.div>

          <motion.div
            className="translate-y-centered-offset flex flex-col items-center justify-center"
            style={stylesWithCssVar({
              opacity: paragraphThreeOpacity,
              "--y": paragraphThreeTranslateY,
            })}
          >
            <h1 className="mb-12 text-center font-heading text-xl">
              <strong>outside</strong> <br /> conventions
            </h1>

            <motion.figure
              className="translate-y-centered-offset absolute flex flex-col items-center justify-center"
              style={stylesWithCssVar({
                top: "-55%",
                right: "3rem",
                opacity: paragraphThreeLineOpacity,
                "--y": paragraphThreeLineTranslateY,
              })}
            >
              <img src="/lines/para_line_2.svg" className="w-auto" />
            </motion.figure>
          </motion.div>

          <motion.div
            className="translate-y-centered-offset relative flex flex-col items-center justify-center"
            style={stylesWithCssVar({
              opacity: paragraphFourOpacity,
              "--y": paragraphFourTranslateY,
            })}
          >
            <h1 className="mb-12 text-center font-heading text-xl">
              <strong>outside</strong> <br /> the status quo
            </h1>

            <motion.figure
              className="translate-y-centered-offset absolute flex flex-col items-center justify-center"
              style={stylesWithCssVar({
                marginTop: `-80%`,
                marginLeft: `-50%`,
                opacity: paragraphFourLineOpacity,
                "--y": paragraphFourLineTranslateY,
              })}
            >
              <img src="/lines/para_line_3.svg" className="w-auto" />
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </>
  );
};
