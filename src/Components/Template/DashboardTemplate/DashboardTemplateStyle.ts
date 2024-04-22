import styled from "styled-components";

const DashboardTemplateStyle = styled.div`
  .dashboard__container {
    z-index: 1;
    position: relative;
    overflow: auto;
    height: 100dvh;
    .dashboard__header {
      position: sticky;
      top:0;
      z-index: 30;
      background-color: #ffb5a7;
      height: 140px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .text__group {
        line-height: 200%;
      }
      .main__header__img {
        display: none;
        width: 0;
      }
      h2 {
        img {
          margin-bottom: -5px;
          width: 30px;
        }
      }
    }
    .dashboard__body{

    }
    .card__group__container::-webkit-scrollbar {
      display: none;
    }
    .card__group__container{
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-snap-align: center;
      -ms-overflow-style: 
      scrollbar-width: none;  

      
      .card__groups{
        padding: 20px;
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 50px;
        position: relative;
        overflow: auto;
      }
    }
  }

  @media (min-width: 1080px) {
    .dashboard__container {
      .dashboard__header {
        justify-content: space-between;
        height: 150px;
        .main__header__img {
          display: block;
          width: 380px;
          margin-left: -40px;
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
          margin-top: -50px;
        }
        .text__group{
          margin-right: 80px;
        }
      }
    }
  }
`;

export default DashboardTemplateStyle;
