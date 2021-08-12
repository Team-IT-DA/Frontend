import styled from "styled-components";
import backgroundImage from "images/home_background.jpg";

const S = {
  Home: {
    HomeContainer: styled.section`
      min-height: 90vh;
      width: 100vw;
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.503)
        ),
        url(${backgroundImage});
      background-size: cover;
      background-position: center;
    `,
  },

  Hero: {
    HeroLayout: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      min-width: 1600px;
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
      font-size: ${({ theme }) => theme.fontSizes.extraLageTitleSize};
    `,

    Slogan: styled.div`
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
    `,

    ProductsListButton: styled.a`
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      border: 1px solid white;
      padding: 1rem;
      margin-top: 1rem;
      width: 15rem;
      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: #77777786;
        transition: background-color 0.3s;
      }
      &:not(:hover) {
        background-color: none;
        transition: background-color 0.3s;
      }
    `,
  },
};

export default S;
