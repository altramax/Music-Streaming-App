import styled from "styled-components";

const PrimaryMusicControllerStyle = styled.div`
.primary__control__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2%;
      width: 100%;
    }

.player__controls__group {
    display: flex;
    gap: 5px;
    .audio__tag {
      display: none;
    }
    .backward__control,
    .forward__control {
      width: 15px;
      cursor: pointer;
    }
    .forward__control {
      rotate: 180deg;
    }
  }

  .player__play__pause__group {
    img {
      width: 70px;
      cursor: pointer;
    }
  }

  .range__group {
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    gap:10px;
  }
  .player__range {
    width: 90%;
    display: block;
    cursor: pointer;
  }

  @media (min-width: 1080px){
    .primary__control__container{
        justify-content: start;
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
  
      .range__group {
        display: flex;
        font-size: 10px;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        gap:10px;
      }
      .player__range {
        width: 90%;
        display: block;
      }
  }
`;

export default PrimaryMusicControllerStyle