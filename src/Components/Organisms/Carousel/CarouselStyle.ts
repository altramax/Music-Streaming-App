import styled from "styled-components";

const CarouselStyle = styled.div`
  .carousel__container {
    width: 100%;
    height: 320px;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
  }
  .carousel__group::-webkit-scrollbar{
    display: none;
  }
  
  .carousel__group {
    display: flex;
    gap: 50px;
    padding: 20px;
    transition: transform 0.5s ease;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .slide{
    min-width: 100%;
  }
  .carousel__group__title{
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #A8B2B8;
    .line{
      height: 1px;
      width: 30px;
      background-color: #A8B2B8;
    }
    img{
      width: 17px;
    }
    .right{
      rotate: 180deg;
    }
  }

  .inner{
    overflow-x: auto;
  }

  @media(min-width: 768px){
    .carousel__group__title{
        .line{
         width: 80%;
        }
    }
  }
`;
export default CarouselStyle;
