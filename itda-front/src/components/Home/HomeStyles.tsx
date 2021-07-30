import styled from "styled-components";

const S = {
  Home : {
    HomeContainer: styled.section`
    height: 100vh;
    width: 100vw;
    border: 1px solid red;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.603)), url(images/home_background.jpg);
    background-size: cover;
    background-position: center;
  `
  },

  Hero : {
    HeroContainer: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: -6rem;
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
      font-size: 2rem;
    `,

    ProductsListButton: styled.a`
      font-size: 1.5rem;
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
    BrandStoryContainer: styled.section`
      height: 100vh;

    `
  }


}

export default S;