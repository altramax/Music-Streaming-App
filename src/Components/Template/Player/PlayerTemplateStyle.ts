import styled from "styled-components";

const PlayerTemplateStyle = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 4;

  .player__container {
    background-color: 	rgb(255,255,255, 0.9);
    padding: 15px 20px;
    border: 0.2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    .player__cover__img {
      display: none;
    }
  }

  .player__controls__group {
    display: flex;
    gap: 5px;

    .audio__tag{
        display: none;
    }
    .backward__control,
    .forward__control {
      width: 15px;
    }
    .forward__control {
      rotate: 180deg;
    }
  }

  .player__play__pause__group {
    img {
      width: 70px;
    }
  }

  .player__range {
  }

  .player__details__group {
    .player__mobile__icon {
      width: 30px;
    }
    .player__desktop__icon {
      display: none;
      width: 0;
    }
  }

  @media (min-width: 1080px) {
    .player__container {
      padding: 5px 40px;
      justify-content: start;
      gap: 40px;
      .player__cover__img {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .player__music__image {
          display: block;
          width: 30px;
        }
        p{
            font-size: 10px;
            width: fit-content;
        }
      }
    }

    .player__controls__group {
        display: flex;
        gap: 5px;
        .backward__control,
        .forward__control {
          width: 15px;
        }
        .forward__control {
          rotate: 180deg;
        }
      }
    
      .player__play__pause__group {
        img {
          width: 40px;
        }
      }

    .player__range {
        width: 70%;
    }

    .player__details__group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .player__mobile__icon {
        display: none;
      }
      .player__desktop__icon {
        width: 15px;
        display: block;
      }
    }
  }
`;

export default PlayerTemplateStyle;
