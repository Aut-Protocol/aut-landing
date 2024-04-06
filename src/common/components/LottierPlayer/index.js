import React, { useEffect, useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { base } from "common/components/base";
import styled from "styled-components";

export const PlayerWrapper = styled(Player)`
  ${base}
`;

const LottiePlayer = ({src, style = {}, ...rest}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <PlayerWrapper
          autoplay
          loop
          controls
          src={src}
          style={style}
          {...rest}
        />
      )}
    </div>
  );
};

export default LottiePlayer;