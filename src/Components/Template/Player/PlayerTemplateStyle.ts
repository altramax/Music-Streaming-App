import styled from "styled-components";

const PlayerTemplateStyle = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 4;

  .player__container {
    background-color: rgb(255, 255, 255, 0.9);
    padding: 15px 20px;
    border: 0.2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    .audio__container {
      display: none;
    }
    .player__cover__img {
      display: none;
    }
  }

  .primary__control {
    width: 80%;
  }

  @media (min-width: 1080px) {
    .player__container {
      padding: 5px 40px;
      justify-content: space-between;
      gap: 40px;
      .player__cover__img {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        // .image {
        // }
        .player__music__image {
          background-color: #A8B2B8;
          display: block;
          width: 30px;
          height: 30px;
        }
        p {
          font-size: 10px;
          width: fit-content;
        }
      }
    }

    .primary__control {
      width: 60%;
    }
    //  .secondary__control{
    //   //  width: 10%;
    //   }
  }
`;

export default PlayerTemplateStyle;
