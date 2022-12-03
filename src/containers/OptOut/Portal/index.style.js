import { Player } from "@lottiefiles/react-lottie-player";
import { base } from "common/components/base";
import styled from "styled-components";
import BubbleImage from "common/assets/image/bubble.svg";
import themeGet from "@styled-system/theme-get";

export const PlayerWrapper = styled(Player)`
  ${base}
`;

const PortalArea = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;

  ${themeGet("mediaQueries.md")} {
    &:before {
      content: " ";
      display: block;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-105deg);
      left: -800px;
      z-index: 9999;
      top: -100px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage.src});
    }
  }
`;

export default PortalArea;
