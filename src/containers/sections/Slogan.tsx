import { stylesWithCssVar } from "utils/motion";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Typography from "common/components/Typography";
import { useEffect } from "react";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  createBranchStart: 0.65,
  createBranchEnd: 0.8,
  endTextFadeInStart: 1,
  endTextFadeInEnd: 1,
};

export const Slogan = ({ parentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  const ctrls = useAnimation();


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
    ],
    [0, 1]
  );

  const translateY = useTransform(scrollYProgress, [0, 0.5], ["1rem", "-2rem"]);

  const imgAnimation: any = {
    hidden: {
      x: `-100%`
    },
    visible: {
      x: `0%`
    },
  };

  useEffect(() => {
    translateY.on("change", (v) => {
      if (v === "-2rem") {
        ctrls.start("visible");
      } else {
        ctrls.start("hidden");
      }
    })

  }, [ctrls, translateY]);


  return (
    <div
      className="fixed flex flex-col items-end text-white"
      style={{
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
      }}
    >
      <motion.div
        className="flex-col items-center justify-center"
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

      <motion.div
        style={{
          width: "130px",
          marginRight: "-25px",
          overflow: "hidden",
          marginTop: "-10px",
          opacity: opacity,
          y: translateY,
        }}
      >
        <motion.figure
          initial="hidden"
          animate={ctrls}
          variants={imgAnimation}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <img src="/own-self.svg" className="w-auto" alt={"own-self"} />
        </motion.figure>
      </motion.div>
    </div>
  );
};
