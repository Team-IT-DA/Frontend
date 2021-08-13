import styled from "styled-components";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { HiX } from "react-icons/hi";
import { FaPlus, FaMinus } from "react-icons/fa";
const S = {
  CounterButton: {
    Layout: styled.div`
      display: flex;
      width: 5.5rem;
      height: 2rem;
      border: 1px solid #dddfe1;
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
};

export default S;
