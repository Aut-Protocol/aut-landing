import { stylesWithCssVar } from "utils/motion";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Typography from "common/components/Typography";
import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import autSelfLine from "common/assets/image/own-self.svg";

export const sloganAnimationOrder = {
  initial: 0,
  startFadeIn: 0.1,
  sloganEnd: 0.25,
  yourselfStart: 0.35,
  outsideStart: 0.38,
  break: 0.6,
  reputationStart: 0.7,
  interactionsStart: 0.8,
  end: 0.85,
  final: 0.95,
};

const variants = {
  hidden: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  visible: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const finalTextVariant = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const TypographyWithStrike = styled("div")`
  @keyframes strike {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  .strike {
    position: relative;
  }
  .strike::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 10px; /* Increase height to allow for a more visible wave */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="10" viewBox="0 0 100 10"><path d="M0 5 Q 25 3, 50 5 T 100 5" fill="none" stroke="white" stroke-width="3"/></svg>');
    background-repeat: repeat-x;
    background-size: 100px 10px; /* Adjust as needed */
    animation-name: strike;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

const Slogan = ({ parentRef, bottomRef }) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  const sloganImgCtrl = useAnimation();

  const sloganOpacity = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.initial,
      sloganAnimationOrder.startFadeIn,
      sloganAnimationOrder.sloganEnd,
      sloganAnimationOrder.yourselfStart,
    ],
    [0, 1, 1, 0]
  );

  const sloganTranslateY = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.initial,
      sloganAnimationOrder.startFadeIn,
      sloganAnimationOrder.sloganEnd,
    ],
    ["-2rem", "-4rem", "-5rem"]
  );

  const yourselfOpacity = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.sloganEnd,
      sloganAnimationOrder.yourselfStart,
      sloganAnimationOrder.outsideStart,
      sloganAnimationOrder.break,
      sloganAnimationOrder.reputationStart,
    ],
    [0, 1, 1, 1, 0]
  );

  const yourselfTranslateY = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.sloganEnd,
      sloganAnimationOrder.yourselfStart,
      sloganAnimationOrder.reputationStart,
    ],
    ["-4rem", "-9rem", "-9rem"]
  );

  const imgAnimation: any = {
    hidden: {
      x: `-100%`,
    },
    visible: {
      x: `0%`,
    },
  };

  const outsideSystemCtrl = useAnimation();
  const outsideConventionsCtrl = useAnimation();
  const outsideStatusQuo = useAnimation();
  const showFinalTextCtrl = useAnimation();

  const [hasStrike, enableStrike] = useState(false);
  const isMounted = useRef(true); // Ref to track if the component is mounted
  const timeouts = useRef([]); // Ref to store timeout IDs
  const started = useRef(false);
  const startedFinalText = useRef(false);
  const startedSloganImg = useRef(false);

  useEffect(() => {
    scrollYProgress.on("change", async (v) => {
      if (!isMounted.current) return;

      if (v >= sloganAnimationOrder.startFadeIn && !startedSloganImg.current) {
        sloganImgCtrl.start("visible");
        startedSloganImg.current = true;
      } else if (
        v <= sloganAnimationOrder.startFadeIn &&
        startedSloganImg.current
      ) {
        sloganImgCtrl.start("hidden");
        startedSloganImg.current = false;
      }

      if (v >= sloganAnimationOrder.outsideStart && !started.current) {
        outsideSystemCtrl.start("visible");

        // Set timeouts and store their IDs
        timeouts.current.push(
          setTimeout(() => {
            if (isMounted.current) outsideConventionsCtrl.start("visible");
          }, 200)
        );

        timeouts.current.push(
          setTimeout(() => {
            if (isMounted.current) outsideStatusQuo.start("visible");
          }, 400)
        );

        timeouts.current.push(
          setTimeout(() => {
            if (isMounted.current) enableStrike(true);
          }, 600)
        );

        started.current = true;
      } else if (v <= sloganAnimationOrder.outsideStart && started.current) {
        outsideSystemCtrl.start("hidden");
        outsideConventionsCtrl.start("hidden");
        outsideStatusQuo.start("hidden");
        enableStrike(false);
        started.current = false;
        timeouts.current.forEach(clearTimeout);
      }

      if (v >= sloganAnimationOrder.final && !startedFinalText.current) {
        showFinalTextCtrl.start("visible");
        startedFinalText.current = true;
      } else if (v <= sloganAnimationOrder.final && startedFinalText.current) {
        showFinalTextCtrl.start("hidden");
        startedFinalText.current = false;
      }
    });

    return () => {
      isMounted.current = false; // Indicate the component has been unmounted
      timeouts.current.forEach(clearTimeout);
      timeouts.current = []; // Clear refs to timeout IDs
      try {
        // Stop any animation controllers
        outsideSystemCtrl.stop();
        outsideConventionsCtrl.stop();
        outsideStatusQuo.stop();
        enableStrike(false);
      } catch (error) {
        // Handle or ignore errors
      }
    };
  }, [scrollYProgress]);

  const reputationOpacity = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.outsideStart,
      sloganAnimationOrder.break,
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.interactionsStart,
    ],
    [0, 0, 1, 0]
  );

  const interactionOpacity = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.interactionsStart,
      sloganAnimationOrder.end,
    ],
    [0, 1, 0]
  );

  const { scrollYProgress: bottomRefYScrollProgress } = useScroll({
    target: bottomRef,
    offset: ["start end", "end end"],
  });

  const finalTextOpacity = useTransform(
    bottomRefYScrollProgress,
    [0, 0.3],
    [1, 0]
  );

  return (
    <div
      className="fixed flex w-full flex-col items-center justify-center text-white"
      style={{
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
      }}
    >
      <motion.div
        className="absolute flex flex-col items-end justify-center"
        style={stylesWithCssVar({
          top: "50%",
          opacity: sloganOpacity,
          y: sloganTranslateY,
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
          Āut Is Your Own Self.
        </Typography>
        <div
          style={{
            width: "130px",
            marginRight: "-25px",
            overflow: "hidden",
            marginTop: "-10px",
          }}
        >
          <motion.figure
            initial="hidden"
            animate={sloganImgCtrl}
            variants={imgAnimation}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <img src={autSelfLine.src} className="w-auto" alt={"own-self"} />
          </motion.figure>
        </div>
      </motion.div>

      <motion.div
        className="flex-col items-center justify-center"
        style={stylesWithCssVar({
          opacity: yourselfOpacity,
          y: yourselfTranslateY,
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

      <motion.div
        style={{
          opacity: yourselfOpacity,
        }}
        className="absolute flex flex-col items-end justify-center"
      >
        <div className="flex h-0 items-center justify-center gap-6">
          <motion.div
            variants={variants}
            animate={outsideSystemCtrl}
            initial="hidden"
            exit={{ opacity: 0 }}
            style={{
              marginBottom: "8rem",
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* <img alt="line1" src="/lines/para_line_1.svg" /> */}
            <Typography
              fontWeight="bold"
              color="white"
              as="subtitle2"
              textAlign="center"
            >
              Outside
            </Typography>
            <TypographyWithStrike>
              <Typography
                className={hasStrike ? "strike" : ""}
                fontWeight="bold"
                color="white"
                as="subtitle1"
                textAlign="center"
              >
                the system
              </Typography>
            </TypographyWithStrike>
          </motion.div>
          <motion.div
            variants={variants}
            animate={outsideConventionsCtrl}
            initial="hidden"
            exit={{ opacity: 0 }}
            style={{
              marginLeft: "-2rem",
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* <img src="/lines/para_line_2.svg" alt="line2" /> */}
            <Typography
              fontWeight="bold"
              color="white"
              as="subtitle2"
              textAlign="center"
            >
              Outside
            </Typography>
            <TypographyWithStrike>
              <Typography
                className={hasStrike ? "strike" : ""}
                fontWeight="bold"
                color="white"
                as="subtitle1"
                textAlign="center"
              >
                conventions
              </Typography>
            </TypographyWithStrike>
          </motion.div>
          <motion.div
            variants={variants}
            animate={outsideStatusQuo}
            initial="hidden"
            exit={{ opacity: 0 }}
            style={{
              marginBottom: "-8rem",
              marginLeft: "rem",
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* <img alt="line3" src="/lines/para_line_3.svg" /> */}
            <Typography
              fontWeight="bold"
              color="white"
              as="subtitle2"
              textAlign="center"
            >
              Outside
            </Typography>
            <TypographyWithStrike>
              <Typography
                className={hasStrike ? "strike" : ""}
                fontWeight="bold"
                color="white"
                as="subtitle1"
                textAlign="center"
              >
                the status quo
              </Typography>
            </TypographyWithStrike>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="absolute flex flex-col items-end justify-center"
        style={{
          top: "50%",
        }}
      >
        <div className="flex flex-col">
          <motion.div
            style={stylesWithCssVar({
              opacity: reputationOpacity,
            })}
          >
            <Typography
              color="white"
              as="subtitle1"
              textAlign="left"
              p={{
                _: "0px 10px",
                md: "0px",
              }}
            >
              Here’s something about <br />
              reputation…
            </Typography>
          </motion.div>

          <motion.div
            style={stylesWithCssVar({
              marginLeft: "2rem",
              opacity: interactionOpacity,
            })}
          >
            <Typography
              color="white"
              as="subtitle1"
              textAlign="left"
              p={{
                _: "0px 10px",
                md: "0px",
              }}
            >
              … and here about <br /> interactions
            </Typography>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={finalTextVariant}
        animate={showFinalTextCtrl}
        exit={{ opacity: 0 }}
        initial="hidden"
        className="absolute flex flex-col items-end justify-center"
      >
        <motion.div
          style={{
            opacity: finalTextOpacity,
          }}
          className="flex flex-col gap-8"
        >
          <Typography
            color="#262626"
            as="subtitle1"
            textAlign="left"
            p={{
              _: "0px 10px",
              md: "0px",
            }}
          >
            … and here the final <br />
            state about network
          </Typography>
          <Typography
            color="#262626"
            as="subtitle1"
            textAlign="left"
            p={{
              _: "0px 10px",
              md: "0px",
            }}
          >
            It could actually take <br /> two sub steps to reveal <br /> more
            (two paragraphs) <br /> text if we want
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default memo(Slogan);
