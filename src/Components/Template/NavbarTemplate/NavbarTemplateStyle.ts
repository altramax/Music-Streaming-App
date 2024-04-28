  import styled from "styled-components";

const NavbarTemplateStyle = styled.div`
z-index: 100;
position: relative;
  .nav__container {
    background-color: #574fd8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
    padding-top: 50px;
    // border-top-left-radius: 10px;
    // border-bottom-left-radius: 10px;
    width: 100%;
  }
  .nav__header {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      display: block;
    }
    p {
      display: none;
      width: 0;
    }
  }

  .nav__body {
    width: 100%;
    margin-top: 40px;
  }

  .nav__body__groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    text-decoration: none;
    p {
      display: none;
      width: 0;
      color: #fff;
    }
  }
  .active{
    background: rgb(255, 255, 255);
    background: linear-gradient(
      117deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.15) 40%,
      rgba(87, 79, 216, 1) 78%
    );
  }

  @media (min-width: 768px) {
    .nav__header {
      img {
        width: 40px;
      }
      p {
        display: block;
        width: fit-content;
        margin-top: 15px;
      }
    }
    .nav__body__groups {
      justify-content: start;
      gap: 5px;
      p {
        display: block;
        width: fit-content;
        font-size: 14px;
      }
      .nav__body__groups__sub {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
        margin: auto;
        width: 80%;
      }
    }
  }
  @media (min-width: 1080px) {
    .nav__body__groups {
      .nav__body__groups__sub {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
        margin: auto;
        width: 50%;
      }
      // padding-left: 40px;
      gap: 20px;
    }
  }
`;

export default NavbarTemplateStyle;
