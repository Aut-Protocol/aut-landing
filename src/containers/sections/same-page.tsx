import { stylesWithCssVar } from "utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

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

export const SamePage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
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

  const xPos = useTransform(
    scrollYProgress,
    [animationOrder.fadeInEnd, animationOrder.createBranchEnd, animationOrder.endTextFadeInStart], // Only animate between these points
    ["-100%", "0%", "100%"]
  );

  return (
    <section ref={targetRef}>
      <div className="relative h-[250vh]">
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
              "--scale": scale,
            })}
          >
            <h1 className="mb-12 text-center font-heading text-xl">
              Aut Is Your Own Self.
            </h1>
          </motion.div>

          <div
            style={{
              width: "120px",
              marginRight: "-18px",
              marginTop: "20px",
              overflow: "hidden",
              position: "absolute",
              right: 0
            }}
          >
            <motion.figure style={{ x: xPos }}>
              <img src="/own-self.svg" className="w-auto" />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};
