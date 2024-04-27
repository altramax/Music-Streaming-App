import styled from "styled-components";

const SecondaryMusicControllerStyle = styled.div`
  .player__details__group {
    img {
      width: 30px;
    }
    .player__mobile__icon {
    }
    .player__desktop__icons {
    }
  }

  .player__desktop__icons {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 13px;
    padding: 10px;
  }

  .show {
    background-color: rgb(255, 255, 255, 0.5);
    width: 70px;
    animation: popout 0.5s ease;
    transform-origin: bottom-bottom;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 70px;
    gap: 13px;
    padding: 10px;
  }

  .hide {
    display: none;
  }

  @keyframes popout {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }

  @media (min-width: 1080px) {
    .player__details__group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      //   width: 20%;
      .player__mobile__icon {
        display: none;
      }
      .player__desktop__icon {
        width: 15px;
        display: block;
      }

      .hide {
        display: block;
      }
      .player__desktop__icons {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 13px;
        padding: 10px;
        cursor: pointer;
        div {
          display: flex;
          justify-content: end;
          align-items: center;
        }
      }
    }
  }
`;

export default SecondaryMusicControllerStyle;
