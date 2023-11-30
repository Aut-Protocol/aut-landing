import { useTransform, motion, useScroll, motionValue } from "framer-motion";
import Container from "common/components/Container";
import Typography from "common/components/Typography";
import Box from "common/components/Box";
import Image from "common/components/Image";
import NewLogo from "common/assets/image/new_logo.svg";
import Button from "common/components/Button";
import { PopupButton } from "@typeform/embed-react";
import useWindowSize from "common/components/window-size";
import { stylesWithCssVar } from "utils/motion";
import { memo, useContext, useEffect, useMemo, useRef } from "react";
import ArrowLoading from "containers/Countdown/ArrowLoading";
const formId = "yfd7X6z1";

import React, {  } from "react";

const initialState = {
  scrollYProgress: motionValue(0),
};

export const TopContentContext = React.createContext<typeof initialState>(initialState);

export const TopContentProvider = ({ children }) => {
  return (
    <TopContentContext.Provider value={initialState}>
      {children}
    </TopContentContext.Provider>
  );
};

const TopContent = () => {
  const { scrollYProgress: scrollY } = useContext(TopContentContext);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      scrollY.set(v)
    })
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], ["0", "-4rem"]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], ["0", "16rem"]);
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width < 768, [width]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const zIndex = useTransform(scrollYProgress, (pos) => (pos >= 0.3 ? 0 : 1));

  return (
    <motion.section
      className="top-content relative mb-[8rem] h-screen"
      style={{ zIndex }}
      ref={targetRef}
    >
      <Container
        pt={{
          _: "122px",
          xs: "122px",
          sm: "84px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Box
          style={{
            position: "fixed",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Logo and desc start */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            mt={{
              _: "-100px",
              sm: "0",
            }}
          >
            <motion.div
              style={stylesWithCssVar({
                scale,
                opacity,
                y: translateY,
              })}
            >
              <Image
                height={{
                  _: "56px",
                  xs: "80px",
                  sm: "80px",
                  md: "80px",
                  xxl: "120px",
                }}
                width="100%"
                src={NewLogo.src}
                alt="New_logo"
              />
              <Typography
                color="white"
                fontWeight="400"
                as="subtitle2"
                textAlign="center"
              >
                The Operating System of yourself
              </Typography>
              <Typography
                my={{
                  _: "7",
                  sm: "8",
                }}
                color="white"
                as="subtitle1"
                textAlign="center"
                p={{
                  _: "0px 10px",
                  md: "0px",
                }}
              >
                ĀutOS is the social map of your Web3 reputation. <br />A Web of
                Trust - where you get in, by opting out.
              </Typography>
            </motion.div>
          </Box>

          {/* Logo and desc end */}
          {/* Button start */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            mb={{ _: "6", sm: "12" }}
          >
            <PopupButton id={formId} as="span">
              <motion.div
                style={stylesWithCssVar({
                  opacity,
                  x: translateX,
                })}
              >
                <Button
                  type="submit"
                  title="Interact"
                  variant="roundOutlined"
                  className="gradient"
                  fontWeight="bold"
                  size="normal"
                  colors="primary"
                />
              </motion.div>
            </PopupButton>
          </Box>
          {/* Button end */}
          <motion.div
            className="absolute bottom-14 flex w-full justify-center"
            style={{
              opacity,
            }}
          >
            <Box
              flexBox
              style={{
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: 0,
                borderRadius: "6px",
                border: "1.5px solid #2F3746",
                background: "rgba(0, 0, 0, 0.64)",
                boxShadow:
                  "0px 16px 80px 0px #256BB0, 0px 0px 16px 0px rgba(37, 107, 176, 1), 0px 0px 16px 0px rgba(37, 107, 176, 1)",
                backdropFilter: "blur(8px)",
              }}
              height={{
                _: "100%",
                sm: "48px",
              }}
            >
              <Box
                flexBox
                flexDirection={{ _: "column", sm: "row" }}
                justifyContent="center"
              >
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      color: "#F0F5FF",
                      fontFize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineLeight: "125%",
                    }}
                  >
                    Āut{" "}
                  </Typography>{" "}
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#F0F5FF",
                      fontWeight: 400,
                      lineLeight: "125%",
                    }}
                  >
                    /ˈa͡ʊt/
                  </Typography>{" "}
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#818CA2",
                      fontWeight: 400,
                      lineLeight: "125%",
                      padding: "0px 5px",
                    }}
                  >
                    • noun •
                  </Typography>{" "}
                </div>
                <Typography
                  m="0"
                  style={{
                    fontVariantNumeric: "lining-nums proportional-nums",
                    fontStyle: "normal",
                    color: "#F0F5FF",
                    fontWeight: 400,
                    lineLeight: "125%",
                  }}
                  fontSize={{
                    _: "14px",
                    sm: "16px",
                  }}
                >
                  {isMobile ? (
                    <>
                      “Self” [greek] as in Self-Sovereign <br></br>
                      or Self-governance
                    </>
                  ) : (
                    `“Self” [greek] as in Self-Sovereign, or Self-governance`
                  )}
                </Typography>
              </Box>
            </Box>
          </motion.div>


          {/* <ArrowLoading></ArrowLoading> */}

          <motion.svg
            width="28"
            height="36"
            viewBox="0 0 28 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              bottom: "0rem",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: scrollOpacity,
            }}
          >
            <g filter="url(#filter0_d_458_17861)">
              <rect
                x="4.5"
                y="0.5"
                width="19"
                height="27"
                rx="9.5"
                stroke="#F0F5FF"
              />
            </g>
            <path
              id="arrow"
              d="M14 20l-4-4m4 4l4-4m-4 4V10"
              stroke="#F0F5FF"
              stroke-width="2"
              fill="none"
            />
            <defs>
              <filter
                id="filter0_d_458_17861"
                x="0"
                y="0"
                width="28"
                height="36"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_458_17861"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_458_17861"
                  result="shape"
                />
              </filter>
            </defs>
          </motion.svg>
        </Box>
      </Container>
    </motion.section>
  );
};

export default memo(TopContent);
