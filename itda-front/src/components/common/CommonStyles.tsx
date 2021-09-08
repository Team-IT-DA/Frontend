import styled, { keyframes, css } from "styled-components";
import { ReactComponent as itdaLogo } from "images/icons/logo.svg";
import { ReactComponent as loginIcon } from "images/icons/hamburger.svg";
import { ReactComponent as cartIcon } from "images/icons/cart.svg";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdClose,
} from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { HiChevronDoubleUp } from "react-icons/hi";
import Button from "@material-ui/core/Button";

interface ICloseButton {
  isClicked: undefined | boolean;
}

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
      position: relative;
      ${({ horizontal }) =>
        horizontal
          ? `border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      margin-right:10px;
      `
          : `border-top-right-radius: 10px;
      border-top-left-radius: 10px;`};
    `,

    ProductImage: styled.img<{
      horizontal: boolean;
    }>`
      width: ${({ horizontal }) => (horizontal ? `100px` : "100%")};
      height: ${({ horizontal }) => (horizontal ? "100%" : "350px")};
      &:hover {
        transform: scale(1.01);
        transition: 0.2s ease-out;
      }
      border: 1px solid ${({ theme }) => theme.colors.gray.x_light};
    `,

    ProductDescriptionLayer: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,

    ProductTitle: styled.div<{
      horizontal: boolean;
      size: { width: number; height: number; fontSize: number };
    }>`
      ${({ horizontal }) =>
        horizontal
          ? `display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;`
          : ``}
      width: ${({ horizontal, size }) => {
        if (horizontal) return `${size.width - size.height}px`;
      }};
      height: 29px;
      font-size: ${({ size }) => `${size.fontSize}px`};
      font-weight: bold;
      padding: 0px 0px 10px 5px;
      /* margin: 5px 0; */
      overflow: hidden;
      /* white-space: pre-wrap;
      text-overflow: ellipsis; */
    `,

    ProductPrice: styled.div<{ horizontal: boolean }>`
      font-size: ${props =>
        props.horizontal
          ? props.theme.fontSizes.xs
          : props.theme.fontSizes.base};
      font-weight: bold;
      padding: 0px 0px 10px 5px;
    `,

    ProductDescription: styled.div`
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray.normal};
      padding: 0px 0px 10px 5px;
    `,
  },

  SideDrawer: {
    DrawerLayout: styled.div<{ isClicked: undefined | boolean }>`
      background-color: #f2f6f8;
      height: 100vh;
      width: 430px;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99999;
      padding: 1rem;

      @keyframes slideIn {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0%);
        }
      }

      @keyframes slideOut {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(100%);
        }
      }

      ${({ isClicked }) => {
        return isClicked === undefined
          ? css`
              transform: translateX(100%);
            `
          : css`
              animation-fill-mode: forwards;
              animation-duration: 0.5s;
              animation-timing-function: easeOutSine;
              animation-name: ${({
                isClicked,
              }: {
                isClicked: undefined | boolean;
              }) => {
                return isClicked ? "slideIn" : "slideOut";
              }};
            `;
      }}
    `,

    DrawerHeaderLayer: styled.div`
      display: flex;
      height: 4%;
      justify-content: space-between;
      padding: 5px 17px 0 10px;
      font-weight: bold;
    `,

    DrawerCardCloseButton: styled.button<ICloseButton>`
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
        border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
        padding-top: 18px;
      }
      /* box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.beige.light}; */
    `,

    DrawerCardDescription: styled.div`
      margin-left: 10px;
      & > div {
        display: flex;
        /* flex-direction: column; */
        align-items: flex-end;
        justify-content: space-around;
      }
    `,

    DrawerCardCountDiv: styled.div`
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    `,

    DrawerCardBottom: styled.div`
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
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

    DrawerMoveToCartButton: styled(Button)`
      width: 100%;
      padding: 15px 0;
      background: ${({ theme }) => theme.colors.navy.light};
      border: none;
      border-radius: 5px;
      margin-top: 2%;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.navy.normal};
      }
    `,
  },
  TopButton: {
    Icon: styled(HiChevronDoubleUp)`
      color: ${({ theme }) => theme.colors.navy.normal};
      width: 1.5rem;
      height: 1.5rem;
    `,
    Layout: styled.div`
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0px 1px 2px 1px ${({ theme }) => theme.colors.gray.light};
    `,
  },
};

export default S;
