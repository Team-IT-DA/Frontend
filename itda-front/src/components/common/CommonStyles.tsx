import styled from "styled-components";
import { ReactComponent as itdaLogo } from "components/common/icons/logo.svg";
import { ReactComponent as loginIcon } from "components/common/icons/hamburger.svg";
import { ReactComponent as cartIcon } from "components/common/icons/cart.svg";
import Button from "@material-ui/core/Button";

const S = {
  Header: {
    HeaderContainer: styled.div`
      display: flex;
      justify-content: center;
      font-family: "Gowun Batang", serif;
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
    `,

    ItdaLogo: styled(itdaLogo)``,

    CartButton: styled(cartIcon)``,

    LoginButton: styled(loginIcon)``,
  },

  ProductCard: {
    CardLayout: styled.div<{
      horizontal: boolean;
      size: { width: number; height: number; fontSize: number };
    }>`
      display: flex;
      flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
      width: ${({ size }) => `${size.width}px`};
      height: ${({ size }) => `${size.height}px`};
      border: 1px solid #cecece;
      border-radius: 10px;
    `,

    ProductImageHolderLayer: styled.div<{
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

    ProductDescriptionLayer: styled.div`
      display: flex;
      flex-direction: column;
    `,

    ProductTitle: styled.div<{
      horizontal: boolean;
      size: { width: number; height: number; fontSize: number };
    }>`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: ${({ horizontal, size }) => {
        if (horizontal) return `${size.width - size.height}px`;
      }};
      height: 35px;
      font-size: ${({ size }) => `${size.fontSize}px`};
      margin: 5px 0;
      overflow: hidden;
      white-space: pre-wrap;
      text-overflow: ellipsis;
    `,

    ProductPrice: styled.div`
      font-size: 13px;
      font-weight: bold;
    `,
  },

  SideDrawer: {
    DrawerLayout: styled.div`
      height: 100vh;
      width: 350px;
      box-shadow: 5px 5px 5px #cacaca;
    `,

    DrawerHeaderLayer: styled.div`
      display: flex;
      height: 4%;
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

    DrawerCardListLayer: styled.div`
      display: flex;
      flex-direction: column;
      height: 80%;
      overflow-y: scroll;
    `,

    DrawerCardLayout: styled.div`
      display: flex;
      flex-direction: column;
      padding: 2px;
      margin: 10px 7px;
      background: white;
      box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.beige.light};
    `,

    DrawerCardDescription: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 10px;
    `,

    DrawerCardCountDiv: styled.div`
      display: flex;
      align-items: center;
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
        color: ${({ theme }) => theme.colors.navy.light};
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

    DrawerMoveToCartBtn: styled(Button)`
      width: 100%;
      padding: 15px 0;
      background: ${({ theme }) => theme.colors.navy.light};
      border: none;
      border-radius: 5px;
      margin-top: 2%;
      &:hover {
        cursor: pointer;
        color: white;
        background: ${({ theme }) => theme.colors.navy.normal};
      }
    `,
  },
};

export default S;
