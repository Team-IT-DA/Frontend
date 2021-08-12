import styled from "styled-components";

const S = {
  BrandStory: {
    BrandStoryLayout: styled.section`
      position: relative;
      height: 90vh;
      min-width: 1600px;
    `,

    Banner: styled.div`
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 220px;
      background-color: #f8f1f1;
      font-size: ${({ theme }) => theme.fontSizes.largeTitleSize};
      font-family: "Gowun Batang", serif;
      font-weight: 900;

      & > h3 {
        width: 80%;
        margin: auto 0;
      }
    `,

    Layer: styled.div`
      position: absolute;
      width: 45%;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,

    Title: styled.div`
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-family: "Gowun Batang", serif;
    `,

    Introduction: styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      font-family: "Nanum Gothic", sans-serif;
      & > p {
        line-height: 55px;
        font-size: ${({ theme }) => theme.fontSizes.xxl};
      }
    `,
  },
};

export default S;
