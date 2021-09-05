import styled from "styled-components";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { HiX } from "react-icons/hi";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import theme from "styles/theme";
const S = {
  StepperButton: {
    Layout: styled.div`
      display: flex;
      width: 5.5rem;
      height: 2rem;
      border: 1px solid ${({ theme }) => theme.colors.gray.x_light};
      border-radius: 4px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        font-size: 15px;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;

        background: none;
        font-weight: bold;
      }
    `,
    MinusIcon: styled(FaMinus)`
      width: 10px;
      color: ${({ theme }) => theme.colors.gray.dark};
    `,
    PlusIcon: styled(FaPlus)`
      width: 10px;
      color: ${({ theme }) => theme.colors.gray.dark};
    `,
  },
  CheckButton: {
    Checked: styled(IoIosCheckmarkCircle)`
      color: ${({ theme }) => theme.colors.navy.normal};
      width: 1.7rem;
      height: 1.7rem;
      cursor: pointer;
    `,
    Unchecked: styled(IoIosCheckmarkCircleOutline)`
      color: ${({ theme }) => theme.colors.navy.normal};
      width: 1.7rem;
      height: 1.7rem;
      cursor: pointer;
    `,
  },
  CancelButton: {
    Icon: styled(HiX)`
      color: ${({ theme }) => theme.colors.gray.light};
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.colors.navy.normal};
      }
    `,
  },
  GradientButton: styled(Button)<{
    disabled?: boolean;
    width: string;
  }>`
    background: ${(props) =>
      props.disabled
        ? props.theme.colors.gray.light
        : `linear-gradient(45deg, ${props.theme.colors.navy.light} 30%,${props.theme.colors.mint.normal}  90%)`};
    border-radius: 3px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    height: 48;
    width: ${({ width }) => width};
    box-shadow: 0 3px 5px 2px ${({ theme }) => theme.colors.gray.light};
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
  `,

  ColorButton: {
    Layer: styled(Button)<{
      isWhiteButton: boolean;
      baseColor: string;
      width: string;
      height: string;
    }>`
      width: ${({ width }) => width};
      height: ${({ height }) => height};
      background-color: ${({ isWhiteButton, baseColor }) =>
        isWhiteButton ? "#fff" : baseColor};
      color: ${({ isWhiteButton, baseColor }) =>
        isWhiteButton ? baseColor : "#fff"};
      border: 1px solid ${({ baseColor }) => baseColor};
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.lg};
      &:hover {
        background: ${({ baseColor, isWhiteButton }) =>
          isWhiteButton ? "#f0f0f0" : baseColor};
        color: ${({ baseColor, isWhiteButton }) =>
          isWhiteButton ? baseColor : "#fff"};
      }
    `,
  },

  Pagination: {
    Layer: styled.ul`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
    `,

    Number: styled.li<{ isClicked: boolean }>`
      margin-right: 0.5rem;
      color: ${({ theme, isClicked }) =>
        isClicked ? theme.colors.black : "#e2e2e2"};
      &:hover {
        color: ${({ theme }) => theme.colors.navy.normal};
        cursor: pointer;
      }
    `,
  },
  StepperSubmitButton: styled.button`
    width: 3rem;
    height: 2rem;
    background-color: white;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.gray.light};
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.mint.normal};
      color: ${({ theme }) => theme.colors.mint.normal};
    }
  `,
};

export default S;
