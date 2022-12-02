import { Player } from "@lottiefiles/react-lottie-player";
import themeGet from "@styled-system/theme-get";
import { base } from "common/components/base";
import styled from "styled-components";

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
`;

export default PortalArea;
