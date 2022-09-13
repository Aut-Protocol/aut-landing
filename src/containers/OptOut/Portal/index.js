import PortalArea from "./index.style";
import React from "react";
import Container from "common/components/UI/Container";
import { Player } from "@lottiefiles/react-lottie-player";
import Heading from "common/components/Heading";
import { OptOutData } from "common/data";

const Portal = () => {
  const { title, animationData } = OptOutData.portal;
  return (
    <>
      <PortalArea id="portal">
        <Container>
          <Heading as="h1" content={title} />
          <Player autoplay loop className="portal-player" src={animationData} />
        </Container>
      </PortalArea>
    </>
  );
};

export default Portal;
