import styled from "styled-components";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { HiX } from "react-icons/hi";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
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
    Icon: styled(HiX)<{ hoverEffect?: boolean }>`
      color: ${({ theme }) => theme.colors.gray.light};
      cursor: pointer;
      :hover {
        color: ${props =>
          props.hoverEffect
            ? props.theme.colors.navy.normal
            : props.theme.colors.gray.light};
      }
    `,
  },
  GradientButton: styled(Button)<{
    disabled?: boolean;
    width: string;
  }>`
    background: ${props =>
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
  RadioButton: {
    Layout: styled.div`
      display: flex;
      align-items: center;
    `,
    Button: styled(Radio)`
      color: ${({ theme }) => theme.colors.mint.normal};
      padding: 1px;
    `,
    Text: styled.div`
      font-size: 13px;
    `,
  },
  RadioButtonWithCancel: {
    Layout: styled.div`
      display: flex;
      align-items: center;
    `,
    Button: styled(Radio)`
      color: ${({ theme }) => theme.colors.mint.normal};
      padding: 1px;
    `,
    Text: styled.div`
      font-size: 13px;
    `,
  },

  TextInput: {
    Small: styled(TextField)`
      width: 100px;
    `,
    Medium: styled(TextField)`
      width: 200px;
    `,
    Large: styled(TextField)`
      width: 400px;
    `,
  },
  SelectBox: {
    NativeSelect: styled(NativeSelect)`
      border: 1px solid ${({ theme }) => theme.colors.gray.light};
      padding: 3px 10px;
      border-radius: 4px;
      background-color: none;
    `,
  },
};

export default S;
