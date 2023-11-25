import { motion, useScroll, useTransform } from "framer-motion";

const animationOrderRep = {
  initial: 0,
  showParagraphOne: 0.2,
  showParagraphTwo: 0.3,
  showCircleImage: 0.5,
  growCircleImage: 0.7,
  startHide: 0.85,
  endHide: 1,
};

export const WhiteCircle = ({ repParentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: repParentRef,
    offset: ["start end", "end end"],
  });

  const fadeOutOpacityS = useTransform(
    scrollYProgress,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    [1, 0.8]
  );

  const fadeOutOpacityStroke = useTransform(
    scrollYProgress,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    [0, "6"]
  );

  const fadeOutOpacityStrokeColor = useTransform(
    scrollYProgress,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    ["1E2430", "#1E2430"]
  );
  
  return (
    <svg
      width={520}
      height={520}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity={0.08} cx={260} cy={260} r={140} fill="#0BA5EC" />
      <circle opacity={0.16} cx={260} cy={260} r={90} fill="#0BA5EC" />
      <circle opacity={0.24} cx={260} cy={260} r={70} fill="#0BA5EC" />

      <g filter="url(#filter0_bdd_1094_44055)">
        <motion.circle
          style={{
            scale: fadeOutOpacityS,
            strokeWidth: fadeOutOpacityStroke,
            stroke: fadeOutOpacityStrokeColor,
          }}
          cx={260}
          cy={260}
          r={180}
          fill="#F0F5FF"
        />
      </g>
      <path
        d="M260.007 243.583C272.663 243.583 282.923 233.323 282.923 220.667C282.923 208.01 272.663 197.75 260.007 197.75C247.35 197.75 237.09 208.01 237.09 220.667C237.09 233.323 247.35 243.583 260.007 243.583Z"
        stroke="#1E2430"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M296.673 280.249C296.673 270.525 292.81 261.198 285.934 254.322C279.057 247.446 269.731 243.583 260.007 243.583C250.282 243.583 240.956 247.446 234.079 254.322C227.203 261.198 223.34 270.525 223.34 280.249"
        stroke="#1E2430"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_bdd_1094_44055"
          x={0}
          y={0}
          width={520}
          height={520}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={8} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1094_44055"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={16} />
          <feGaussianBlur stdDeviation={40} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.180392 0 0 0 0 0.564706 0 0 0 0 0.980392 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_1094_44055"
            result="effect2_dropShadow_1094_44055"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.180392 0 0 0 0 0.564706 0 0 0 0 0.980392 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1094_44055"
            result="effect3_dropShadow_1094_44055"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1094_44055"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
