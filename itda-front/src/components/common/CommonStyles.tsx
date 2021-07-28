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
    DrawerHeader: styled.div`
      display: flex;
      height: 3%;
      justify-content: space-between;
      padding: 5px 17px 0 10px;
      font-weight: bold;
    `,

    DrawerCardCloseButton: styled.button`
      background: none;
      border: none;
      &:hover {
        color: #acacac;
        cursor: pointer;
      }
    `,

    DrawerContainer: styled.div`
      height: 100vh;
      width: 350px;
      box-shadow: 5px 5px 5px #cacaca;
    `,

    DrawerCardList: styled.div`
      display: flex;
      flex-direction: column;
      height: 80%;
      overflow-y: scroll;
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
      width: 70px;
      height: 40px;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 2fr 1fr;
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

    DrawerCardBottom: styled.div`
      display: flex;
      justify-content: space-between;
    `,

    DrawerCardDeleteButton: styled.button`
      background: none;
      border: none;
      &:hover {
        color: #acacac;
        cursor: pointer;
      }
    `,

    DrawerCardPrice: styled.div`
      margin: 10px 0;
      font-size: 13px;
      font-weight: 600;
    `,

    DrawerBottom: styled.div`
      display: flex;
      height: 15%;
      flex-direction: column;
      padding: 15px;
      justify-content: space-between;
      align-items: flex-end;
    `,

    DrawerTotalPrice: styled.span`
      font-size: 20px;
      font-weight: bold;
    `,

    DrawerDeliveryFee: styled.span`
      font-size: 14px;
      color: #c2c2c2;
    `,

    DrawerMoveToCartBtn: styled.button`
      width: 100%;
      padding: 15px 0;
      background: linear-gradient(#b6b6b6, #979797);
      border: none;
      border-radius: 5px;
      margin-top: 2%;
      &:hover {
        cursor: pointer;
        color: white;
      }
    `,
  },
};

export default S;

//layout => layer => block
