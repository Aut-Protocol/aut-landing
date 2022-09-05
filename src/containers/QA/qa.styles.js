import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

export const Grid = styled.div`
  gap: 0px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  flex: 1;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ExpandibleButtonTitle = styled.h2`
  border: 1px solid #ddd;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

export const ExpandibleButtonContent = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${(props) => (props.open ? "1" : "0")};
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.open ? "15px" : "0 15px")};
  transition: all 6.3s;

  p {
    margin: 0;
  }
`;
