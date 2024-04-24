import styled from "styled-components";

const CarouselStyle = styled.div`
  .carousel__container {
    width: 100%;
    height: 320px;
    overflow: hidden;
  }
  .carousel__group {
    display: flex;
    gap: 50px;
    padding: 20px;
    transition: transform 0.5s ease;
    overflow-x: scroll;
  }
  .slide{
    min-width: 100%;
  }
  .carousel__group__title{
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    .line{
      height: 2px;
      width: 30px;
      background-color: #000;
    }
    img{
      width: 20px;
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
