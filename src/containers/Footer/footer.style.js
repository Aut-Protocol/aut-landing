import styled from "styled-components";

const FooterArea = styled.footer`
  background: #000;
  width: 100%;
  .container {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 45px;
    padding-bottom: 50px;
    width: calc(100% - 40px);

    @media (max-width: 768px) {
      flex-direction: column;
      grid-gap: 20px;
      align-items: center;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 70px;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    form {
      flex-direction: column;
      align-items: center;
    }
  }

  img {
    height: 4.62rem;
  }
`;
export const CopyText = styled.p`
  margin: 0;
  color: #fff;
`;
export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 2rem;
    // position: absolute;
    bottom: 75px;
    right: 75px;

    img {
      height: 20px;
    }
  }
`;

export default FooterArea;
