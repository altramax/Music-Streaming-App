import styled from "styled-components";

const SearchTemplateStyle = styled.div`
  .dashboard__header {
    position: sticky;
    top: 0;
    z-index: 30;
    background-color: #ffb5a7;
    // height: 140px;
    padding: 20px 0;
    color: #fff;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .text__group {
      line-height: 200%;
      width: 70%;
      text-align: center;
    }
    .search__input {
        margin-top: 20px;
        padding: 10px;
        width: 80%;
        border-radius: 5px;
        border: none;
        input{
            width: 100%;
        }
        img{
            cursor: pointer;
         position: absolute;
         width: 20px;
         margin: 28px 0 0 -35px;
        }
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

  .searchTemplate__body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
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

  @media (min-width: 1080px) {
    .dashboard__header {
        flex-direction: row;
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
      .search__input {
        width: 35%;
    }
      .text__group {
        // margin-right: 80px;
        width: 25%;
        text-align: start;
      }
    }
  }
`;

export default SearchTemplateStyle;
