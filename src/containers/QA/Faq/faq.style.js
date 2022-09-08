import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Collapse from "rc-collapse";

const Section = styled.section`
  @media (max-width: 1280px) {
    padding-top: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 70px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .container {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 55px;
    @media (max-width: 990px) {
      flex-wrap: wrap;
      padding: 0px;
    }
  }
`;

export const RcCollapse = styled(Collapse)`
  min-width: 375px;
  flex: 1;
  display: grid;
  column-gap: 10px;
  gap: 22px;
  .rc-collapse-item {
    background-color: #707070;
    .rc-collapse-header {
      height: 80px;
      background-color: #333333;
      font-size: 1.563rem;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      z-index: 100;
      position: relative;
      .icon {
        margin-right: 32px;
        position: relative;
        width: 30px;
        height: 30px;
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .plus {
        display: inline;
      }
      .minus {
        display: none;
      }
    }
    h4 {
      font-weight: normal !important;
      margin-left: 35px;
      margin-bottom: 0px;
    }
    .rc-collapse-content {
      padding: 0 25px 0 25px;
    }
    .rc-collapse-content-box {
      padding: 15px 0 15px;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.87;
      margin: 0;
    }
  }
  .rc-collapse-item-active {
    .rc-collapse-header {
      .minus {
        display: inline;
      }
      .plus {
        display: none;
      }
    }
  }
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 47px;
  align-items: flex-start;
  @media (max-width: 990px) {
    flex-wrap: wrap;
    gap: 22px;
  } ;
`;

export default Section;
