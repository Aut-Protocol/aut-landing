import styled from "styled-components";

const NewsletterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;


  .form-fields {
    display: flex;
    grid-gap: 12px;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    border: none;
    width: 100%;
    input {
      font-size: 18px;
      height: 40px;
      color: white;
      background: transparent;
    }
  }

  h4 {
    font-family: 'Avenir', sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 1.38;
    margin: 0 0 25px;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 480px) {
      // font-size: 16px;
    }
  }

  .submit-btn {

    @media screen and (max-width: 991px) {
      justify-content: center;
    }

    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    width: 100%;

    button {
      width: 50%;
      font-size: 1.25rem;
      text-transform: uppercase;
      height: 3rem;
      min-height: 3rem;
      max-heigth: 3rem;
    }
  }

  // @media (max-width: 576px) {
  //   width: 100%;
  //   .submit-btn {
  //     button {
  //       width: 100%;
  //       min-width: unset;
  //       height: 45px;
  //       min-height: 45px;
  //       font-size: 22px;
  //     }
  //   }


    .form-fields {
      width: 100%;
    }

    .form-field {
      width: 100%;
      input {
        font-size: 14px;
        height: 35px;
      }
    }
  }
`;

export default NewsletterFormWrapper;
