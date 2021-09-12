import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import theme from "styles/theme";

const inputBlockStyle = css`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const S = {
  MyPage: {
    Layout: styled.div`
      overflow-x: hidden;
      height: 100vh;
    `,

    HeaderLayout: styled.div`
      width: 100%;
      top: 0;
      box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.gray.extraLight};
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid #f2f2f2;
    `,
    MainLayout: styled.div`
      display: flex;
    `,

    SideTabLayout: styled.div``,

    ContentLayout: styled.div`
      width: 100%;
      height: 100%;
      padding: 3rem;
    `,

    ContentLayer: styled.div`
      /* position: fixed; */
      min-width: 768px;
      overflow-y: scroll;
    `,
  },

  MyPageTabs: {
    Layout: styled.div`
      width: 250px;
    `,

    Layer: styled.div``,
  },

  MyPageTab: {
    Layout: styled.div<{
      category: string;
      currentSelectedTab: string;
    }>`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      cursor: pointer;
      background-color: ${(props) =>
        props.currentSelectedTab === props.category
          ? `${props.theme.colors.gray.extraLight}`
          : "ffffff"};
      border-right: ${(props) =>
        props.currentSelectedTab === props.category
          ? `2px solid ${props.theme.colors.navy.normal}`
          : "none"};
      font-weight: ${(props) =>
        props.currentSelectedTab === props.category ? "900" : "200"};
      transition: background-color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.navy.normal};
        transition: color 0.3s;
      }
    `,
  },

  MyReview: {
    Layout: styled.div`
      width: 100%;
      height: 100%;
      /* border: 1px solid black; */
    `,

    Layer: styled.div`
      width: 80%;
      height: fit-content;
      margin: 1.5rem auto;
    `,

    ReviewInfoBox: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 1rem;
      font-weight: bold;
    `,

    ReviewProductDiv: styled.div`
      display: flex;
      width: 35%;
      align-items: center;
    `,

    ReviewContentBox: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
    `,

    ReviewImageHolder: styled.div`
      width: 33%;
      height: 300px;
    `,

    ReviewImage: styled.img`
      width: 100%;
      height: 100%;
    `,

    ReviewDescription: styled.div`
      width: 60%;
      padding: 2rem 0;
      border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
    `,

    ProductImageHolder: styled.div`
      width: 25%;
      height: 60px;
      margin-right: 1rem;
    `,

    ProductImage: styled.img`
      width: 100%;
      height: 100%;
    `,

    ProductName: styled.span``,

    WrittenDateDiv: styled.span`
      display: flex;
      align-items: center;
    `,
  },

  MyInfoBefore: {
    Layout: styled.div`
      width: 90%;
      height: 100%;
      margin: 0 auto;
    `,

    HeaderLayer: styled.div`
      font-family: "Gowun Batang", sans-serif;
      color: ${({ theme }) => theme.colors.gray.normal};
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-weight: bold;
      margin-bottom: 1.5rem;
    `,

    TitleLayer: styled.div`
      font-size: ${({ theme }) => theme.fontSizes.small};
      div {
        :first-child {
          font-weight: bold;
          font-size: ${({ theme }) => theme.fontSizes.xl};
          margin-bottom: 0.7rem;
        }
      }
      margin-bottom: 2rem;
    `,

    Divider3px: styled.div`
      width: 100%;
      border-top: 3px solid ${({ theme }) => theme.colors.gray.dark};
      margin: 1rem 0;
    `,

    Divider1px: styled.div`
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors.gray.dark};
      margin: 1rem 0;
    `,

    FormLayer: styled.div`
      width: 65%;
      margin: 2rem auto;
    `,

    FormBlock: styled.div`
      width: 60%;
      display: flex;
      margin: 0 auto 1.5rem;
    `,

    FormTitle: styled.div`
      display: flex;
      align-items: center;
      font-weight: bold;
      width: 100px;
      margin-right: 5rem;
    `,

    FormInput: styled(TextField)`
      width: 100%;
    `,

    ButtonLayer: styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
    `,
  },

  MyInfoAfter: {
    Layout: styled.div`
      min-width: 1024px;
      width: 90%;
      height: 100%;
      margin: 0 auto;
    `,

    HeaderLayer: styled.div`
      font-family: "Gowun Batang", sans-serif;
      color: ${({ theme }) => theme.colors.gray.normal};
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-weight: bold;
      margin-bottom: 1.5rem;
      height: 5rem;
    `,

    FormLayer: styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-end;
    `,

    FormInputsLayer: styled.div`
      width: 70%;
      & > div {
        margin: 1.5rem 0;
        height: 50px;
      }
    `,

    CurrentPasswordBlock: styled.div`
      ${inputBlockStyle}
    `,

    CurrentPasswordLabel: styled.div`
      text-align: left;
      width: 30%;
    `,

    CurrentPasswordInput: styled(TextField)`
      width: 50%;
    `,

    NewPasswordBlock: styled.div`
      ${inputBlockStyle}
    `,

    NewPasswordLabel: styled.div`
      text-align: left;
      width: 30%;
    `,

    NewPasswordInput: styled(TextField)`
      width: 50%;
    `,

    NewPasswordConfirmBlock: styled.div`
      ${inputBlockStyle}
    `,

    NewPasswordConfirmLabel: styled.div`
      text-align: left;
      width: 30%;
    `,

    NewPasswordConfirmInput: styled(TextField)`
      width: 50%;
    `,

    NameBlock: styled.div`
      ${inputBlockStyle}
    `,

    NameLabel: styled.div`
      text-align: left;
      width: 30%;
    `,

    NameInput: styled(TextField)`
      width: 50%;
    `,

    EmailBlock: styled.div`
      ${inputBlockStyle}
    `,

    EmailLabel: styled.div`
      text-align: left;
      width: 30%;
    `,

    EmailInput: styled(TextField)`
      width: 50%;
    `,

    EmailCheckButton: styled(Button)`
      color: ${({ theme }) => theme.colors.navy.light};
      border: 1px solid ${({ theme }) => theme.colors.navy.light};
      height: 50px;
      width: 50%;
    `,

    CellPhoneNumberBlock: styled.div`
      ${inputBlockStyle}
    `,

    CellPhoneNumberLabel: styled.div`
      text-align: left;
      width: 30%;
    `,

    CellPhoneNumberInput: styled(TextField)`
      width: 50%;
    `,

    CellPhoneNumberCheckButton: styled(Button)`
      color: ${({ theme }) => theme.colors.navy.light};
      border: 1px solid ${({ theme }) => theme.colors.navy.light};
      height: 50px;
      width: 50%;
    `,

    FormButtonsLayer: styled.div`
      height: 100%;
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > button {
        margin: 1rem 0;
      }
    `,

    ButtonLayer: styled.div`
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
      & > button {
        margin: 1rem;
      }
    `,

    ButtonExpireAccount: styled(Button)`
      background: ${({ theme }) => theme.colors.gray.normal};
      color: white;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.lg};
      height: 3.5rem;
      &:hover {
        background: ${({ theme }) => theme.colors.navy.normal};
      }
      width: 20%;
    `,

    ButtonConfirmEdit: styled(Button)`
      background: ${({ theme }) => theme.colors.navy.light};
      color: white;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.lg};
      height: 3.5rem;
      &:hover {
        background: ${({ theme }) => theme.colors.navy.normal};
      }
      width: 20%;
    `,
  },
  ReviewBox: {
    Wrapper: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100%;
      height: 100vh;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
    `,

    Layout: styled.div`
      width: 665px;
      height: 450px;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
    `,

    ReviewTextBox: styled(TextField)`
      width: 600px;
      margin: 0 auto;
    `,

    TopLayer: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: relative;
      h2 {
        margin-left: 2rem;
        color: ${({ theme }) => theme.colors.navy.dark};
      }
    `,

    TextFieldLayer: styled.div`
      width: 100%;
      height: 340px;
      display: flex;
      flex-direction: column;
      input {
        margin: 1rem 0 0 2rem;
      }
    `,

    BottomLayer: styled.div`
      width: 100%;
      position: relative;
      button {
        position: absolute;
        right: 2rem;
        bottom: 1rem;
      }
    `,
  },
};

export default S;
