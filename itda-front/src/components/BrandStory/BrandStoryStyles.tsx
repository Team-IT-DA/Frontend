import styled from "styled-components";

const S = {
  BrandStory: {
    BrandStoryLayout: styled.section`
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 90vh;
      width: 100%;
    `,

    Banner: styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
      height: 200px;
      background-color: ${({ theme }) => theme.colors.beige.light};
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-family: "Gowun Batang", serif;
      font-weight: 900;

      & > h3 {
        width: 80%;
        margin: auto 0;
      }
    `,

    Layer: styled.div`
      width: 45%;
      min-width: 700px;
    `,

    Title: styled.div`
      text-align: center;
      color: ${({ theme }) => theme.colors.purple.dark};
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
