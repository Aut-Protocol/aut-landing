import PortalArea, { PlayerWrapper } from "./index.style";
import React from "react";
import Container from "common/components/Container";
import { Player } from "@lottiefiles/react-lottie-player";
import Heading from "common/components/Heading";
import { OptOutData } from "common/data";
import Typography from "common/components/Typography";

const Portal = () => {
  const { title, animationData } = OptOutData.portal;
  return (
    <>
      <PortalArea id="portal" className="snap">
        <Container
          pt={{
            _: "50px",
            md: "84px",
            xxl: "112px",
          }}
        >
          <Typography textAlign="center" mt="0" mb="15px" color="white" as="h2">
            {title}
          </Typography>
          <PlayerWrapper
            autoplay
            loop
            width={{
              _: "300px",
              md: "500px",
              lg: "545px",
              xxl: "720px",
            }}
            height={{
              _: "300px",
              md: "500px",
              lg: "545px",
              xxl: "720px",
            }}
            src={animationData}
          />
        </Container>
      </PortalArea>
    </>
  );
};

export default Portal;
