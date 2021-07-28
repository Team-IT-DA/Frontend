import styled from "styled-components";

const S = {
  Header: {
    leftDiv: styled.div``,
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

  SideDrawer: {
    DrawerContainer: styled.div`
      height: 100vh;
      width: 350px;
      /* border: 1px solid black; */
      box-shadow: 5px 5px 5px #cacaca;
    `,

    DrawerCardList: styled.div`
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 550px;
    `,

    DrawerCardContainer: styled.div`
      display: flex;
      flex-direction: column;
      padding: 2px;
      margin: 10px 7px;
      box-shadow: 5px 5px 5px #cacaca;
    `,

    DrawerCardDescription: styled.div`
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      margin-left: 10px;
      /* border: 1px solid orange; */
    `,

    DrawerCardCountDiv: styled.div`
      display: flex;
      align-items: center;
      /* border: 1px solid green; */
      font-size: 13px;
    `,

    DrawerCardCountUpDown: styled.div`
      display: grid;
      border: 1px solid #e0e0e0;
      width: 50px;
      height: 40px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      margin-top: 10px;
      div {
        text-align: center;
        &:nth-child(1) {
          display: flex;
          align-items: center;
          font-size: 12px;
          justify-content: center;
          border-right: 1px solid #e0e0e0;
        }
        &:nth-child(2) {
          border-bottom: 1px solid #e0e0e0;
        }
      }
    `,
    DrawerCardCount: styled.div`
      grid-row: 1/3;
    `,

    DrawerCardPrice: styled.div`
      margin: 10px 0;
      font-size: 13px;
      font-weight: 600;
    `,
  },
};

export default S;

//layout => layer => block
