import styled from "styled-components";

const SearchLayoutStyle = styled.div`
  .SearchLayout__container {
    width: 100%;
    height: 80vh;
    // overflow: hidden;
    padding: 20px;
  }
  .SearchLayout__group {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 50px;
    padding: 20px;
    height: 100px;
    transition: transform 0.5s ease;
    // overflow-x: scroll;
  }
  .slide{
    min-width: 100%;
  }
  // .SearchLayout__group__title{
  //   display: flex;
  //   padding: 20px;
  //   justify-content: space-between;
  //   align-items: center;
  //   font-size: 15px;
  //   .line{
  //     height: 2px;
  //     width: 30px;
  //     background-color: #000;
  //   }
  //   img{
  //     width: 20px;
  //   }
  //   .right{
  //     rotate: 180deg;
  //   }
  // }

  // .inner{
  //   overflow-x: auto;
  // }

  @media(min-width: 768px){
    // .SearchLayout__group__title{
    //     .line{
    //      width: 80%;
    //     }
    // }
  }
`;
export default SearchLayoutStyle;
