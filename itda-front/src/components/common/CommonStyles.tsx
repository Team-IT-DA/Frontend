import styled from "styled-components";

const S = {
  Header: {
    HeaderContainer: styled.div`
      display: flex;
      justify-content: center;
    `,

    HeaderLayout: styled.div`
      display: flex;
      width: 80%;
    `,

    LeftBlock: styled.div`
      display: flex;
      width: 50%;
    `,

    Navigation: styled.nav`
      font-size: 1.5rem;
      width: calc(100% / 4);
      margin: auto 0;
      cursor: pointer;
    `,

    LogoBlock: styled.div`
      display: flex;
      align-items: center;
      height: 10rem;
      & > svg {
        cursor: pointer;
      }
    `,

    RightBlock: styled.div`
      display: flex;
      justify-content: flex-end;
      width: 50%;
      margin: auto 0;
      & > svg {
        margin: 2rem;
        cursor: pointer;
      }
    `
  },

  ProductCard: {
    CardContainer: styled.div<{
      horizontal: boolean;
      size: { width: string; height: string };
    }>`
      display: flex;
      flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
      width: ${({ size }) => size.width};
      height: ${({ size }) => size.height};
      border: 1px solid #cecece;
      border-radius: 10px;
    `,

    ProductImageHolder: styled.div<{
      horizontal: boolean;
    }>`
      overflow: hidden;
      ${({ horizontal }) =>
        horizontal
          ? `border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      margin-right:10px;
      `
          : `border-top-right-radius: 10px;
      border-top-left-radius: 10px;`};
    `,

    ProductImage: styled.img`
      width: 100%;
      height: 100%;
      &:hover {
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
      }
    `,

    ProductDescription: styled.div`
      display: flex;
      flex-direction: column;
    `,

    ProductTitle: styled.div`
      font-size: 15px;
      margin: 5px 0;
    `,

    ProductPrice: styled.div`
      font-size: 13px;
      font-weight: bold;
    `,
  },
};

export default S;

//layout => layer => block
