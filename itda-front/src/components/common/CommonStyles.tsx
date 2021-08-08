import styled from "styled-components";
import { ReactComponent as itdaLogo } from "components/common/icons/logo.svg";
import { ReactComponent as loginIcon } from "components/common/icons/hamburger.svg";
import { ReactComponent as cartIcon } from "components/common/icons/cart.svg";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdClose,
} from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import Button from "@material-ui/core/Button";

const S = {
  Header: {
    HeaderLayout: styled.div`
      position: relative;
      display: flex;
      justify-content: center;
      height: 100px;
      font-family: "Gowun Dodum", serif;
    `,

    HeaderLayer: styled.div`
      display: flex;
      min-width: 1200px;
      width: 80%;
    `,

    LeftBlock: styled.div`
      display: flex;
      width: 50%;
      & > nav {
        color: ${({ color }) => color};
      }
    `,

    Navigation: styled.nav`
      font-size: 1.5rem;
      width: calc(100% / 4);
      margin: auto 0;
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSizes.base};
    `,

    LogoBlock: styled.div`
      display: flex;
      align-items: center;
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

    ItdaLogo: styled(itdaLogo)`
      height: 70px;
      width: auto;
      & path {
        fill: ${({ color }) => color};
      }
      & line {
        stroke: ${({ color }) => color};
      }
    `,

    CartButton: styled(cartIcon)`
      height: 40px;
      width: auto;
      stroke: ${({ color }) => color};
      & path {
        fill: ${({ color }) => color};
      }
    `,

    LoginButton: styled(loginIcon)`
      height: 40px;
      width: auto;
      & path {
        stroke: ${({ color }) => color};
      }
    `,
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
    `,

    ProductImageHolderLayer: styled.div<{
      horizontal: boolean;
    }>`
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
      height: 350px;
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
      background-color: #f2f6f8;
      top: 0;
      position: fixed;
      padding: 1rem;
      right: 0;
      z-index: 99;
      height: 100vh;
      width: 430px;
      /* box-shadow: 5px 5px 5px #cacaca; */
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

    DrawerCloseIcon: styled(VscChromeClose)`
      color: ${({ theme }) => theme.colors.navy.normal};
      width: 1.5rem;
      height: 1.5rem;
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
      background-color: #f2f6f8;
      &:nth-child(1) {
        border-top: 1px solid #dfdbdb;
        padding-top: 18px;
      }
      /* box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.beige.light}; */
    `,

    DrawerCardDescription: styled.div`
      margin-left: 10px;
      padding: 5px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    `,

    DrawerCardCountDiv: styled.div`
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    `,

    DrawerCardCountUpDown: styled.div`
      display: grid;
      /* border: 1px solid #e0e0e0; */
      width: 35px;
      height: 50px;
      grid-template-columns: 1fr;
      grid-template-rows: 3fr 1fr;
      margin-top: 10px;
    `,

    DrawerCountUpIcon: styled(MdKeyboardArrowUp)``,
    DrawerCountDownIcon: styled(MdKeyboardArrowDown)``,

    DrawerCardCount: styled.div`
      padding: 5px;
      text-align: center;
    `,

    DrawerCardBottom: styled.div`
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #dfdbdb;
    `,

    DrawerCardDeleteButton: styled.button`
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.navy.light};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      &:hover {
        color: ${({ theme }) => theme.colors.navy.normal};
        cursor: pointer;
      }
    `,

    DrawerCardPrice: styled.div`
      margin: 10px 0;
      font-size: 13px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.navy.dark};
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
