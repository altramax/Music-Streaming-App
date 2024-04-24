import styled from "styled-components";

const EmptyStateStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-state {
    padding: 10px;
    img {
      width: 100%;
      margin-bottom: 16px;
    }
    h2 {
      color: #051226;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
      line-height: 150%;
      text-align: center;
      width: 100%;
    }
    p {
      color: #546680;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      text-align: center;
    }
  }

  @media (min-width: 1080px) {
    .empty-state {


      img {
        display: block;
        margin:auto;    
        width: 50%;
      }
    }
  }
`;
export default EmptyStateStyle;
