import styled from "styled-components";
import backgroundImage from "images/home_background.jpg";

const S = {
  Home : {
    HomeContainer: styled.section`
    min-height: 90vh;
    width: 100vw;
    background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.503)), url(${backgroundImage});
    background-size: cover;
    background-position: center;
  `
  },

  Hero : {
    HeroContainer: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font-family: "Gowun Dodum", serif;
      margin-top: -8rem;
      position: absolute;
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0%);

      & > * {
        margin: 1rem;
        color: white;
      }
    `,

    Title: styled.div`
      font-size: 5rem;
    `,

    Slogan: styled.div`
      font-size: ${({theme})=> theme.fontSizes.titleSize};
    `,

    ProductsListButton: styled.a`
      font-size: ${({theme})=> theme.fontSizes.xxxl};
      border: 1px solid white;
      padding: 1rem;
      margin-top: 1rem;
      width: 15rem;
      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: #77777786;
      }
    `,
  },

  BrandStory : {
    BrandStoryLayout: styled.section`
      position: relative;
      height: 90vh;
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
      background-color: #F8F1F1;
      font-size: 3rem;
      font-family: 'Gowun Batang', serif;
      font-weight: 900;

      & > h3 {
        width: 80%;
        margin: auto 0;
      }
    `,

    Layer: styled.div`
      position: absolute;
      width: 45%;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,

    Title: styled.div`
      text-align: center;
      font-size: 2.5rem;
      font-family: 'Gowun Batang', serif;
    `,

    Introduction: styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      font-family: 'Nanum Gothic', sans-serif;
      & > p {
        line-height: 55px;
        font-size: ${({theme})=> theme.fontSizes.xxl};
      }
    `
  }

}

export default S;