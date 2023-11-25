import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  return (
    <section
      ref={targetRef}
      className="relative mb-[8rem] flex h-screen flex-col items-center justify-center py-16 text-white before:pointer-events-none before:fixed"
    >
      <motion.div
        style={{ position, scale, opacity }}
        className="fixed z-10 flex flex-col items-center"
      >
        <h1 className="mb-12 text-center font-heading text-xl">
          Native, role-based Membership & Governance <br /> for Web3
          Communities.
        </h1>
      </motion.div>
    </section>
  );
};
