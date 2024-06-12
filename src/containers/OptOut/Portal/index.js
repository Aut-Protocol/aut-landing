import PortalArea from "./portal.style";
import React from "react";
import Container from "common/components/Container";
import { OptOutData } from "common/data";
import Typography from "common/components/Typography";

import dynamic from 'next/dynamic';

const LottiePlayerComponent = dynamic(() => import('common/components/LottierPlayer'), {
  ssr: false,
});

const Portal = () => {
  const { title, animationData } = OptOutData.portal;
  return (
    <>
      <PortalArea id="portal" className="snap center">
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
          <LottiePlayerComponent autoplay
              loop
              width={{
                _: "250px",
                md: "450px",
                lg: "480px",
                xxl: "720px",
              }}
              height={{
                _: "300px",
                md: "450px",
                lg: "480px",
                xxl: "720px",
              }}
              src={animationData} />
        </Container>
      </PortalArea>
    </>
  );
};

export default Portal;
