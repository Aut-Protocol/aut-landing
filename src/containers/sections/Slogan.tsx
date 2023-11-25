import { stylesWithCssVar } from "utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Typography from "common/components/Typography";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.95,
  endTextFadeInEnd: 1,
};

export const Slogan = ({ parentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [0, 1, 1, 0.5]
  );

  const translateY = useTransform(scrollYProgress, [0, 0.5], ["1rem", "-2rem"]);

  const xPos = useTransform(
    scrollYProgress,
    [0.4, animationOrder.createBranchEnd, animationOrder.endTextFadeInStart], // Only animate between these points
    ["-100%", "0%", "100%"]
  );

  return (
    <div
      className="fixed flex origin-center justify-center text-white"
      style={{
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
      }}
    >
      <motion.div
        className="flex-col items-center justify-center "
        style={stylesWithCssVar({
          opacity,
          y: translateY,
          "--scale": scale,
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
      </motion.div>

      <div
        style={{
          width: "120px",
          marginRight: "-18px",
          marginTop: "10px",
          overflow: "hidden",
          position: "absolute",
          right: 0,
        }}
      >
        <motion.figure style={{ x: xPos }}>
          <img src="/own-self.svg" className="w-auto" />
        </motion.figure>
      </div>
    </div>
  );
};
