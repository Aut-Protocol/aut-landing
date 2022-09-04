import PortalArea from "./index.style";
import React from "react";
import Container from "common/components/UI/Container";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "common/assets/portal.json";
import Heading from "common/components/Heading";

const Portal = () => {
  return (
    <>
      <PortalArea id="portal">
        <Container>
          <Heading as="h1" content="…Time to Opt Āut" />
          <Player
            autoplay
            loop
            className="portal-player"
            src={animationData}
          />
        </Container>
      </PortalArea>
    </>
  );
};

export default Portal;
