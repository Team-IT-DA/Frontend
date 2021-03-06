import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const S = {
  SignUp: {
    SignUpLayout: styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding-top: 5rem;
    `,

    UserSignUpLayer: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > * {
        margin: 1rem;
      }
    `,

    NameInput: styled(TextField)`
      width: 25%;
    `,

    TelephoneInput: styled(TextField)`
      width: 25%;
    `,

    EmailBlock: styled.div`
      display: flex;
      justify-content: space-between;
      width: 25%;
    `,

    EmailInput: styled(TextField)`
      width: 60%;
    `,

    DuplicateCheckButton: styled(Button)`
      width: 30%;
      background: ${({ theme }) => theme.colors.navy.normal};
      color: white;
      font-size: ${({ theme }) => theme.fontSizes.base};
      &: hover {
        background: ${({ theme }) => theme.colors.navy.light};
      }
    `,

    Password: styled(TextField)`
      width: 25%;
    `,

    PasswordConfirm: styled(TextField)`
      width: 25%;
    `,

    AdminSignUpLayer: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > * {
        margin: 1rem;
      }
    `,

    BlankLine: styled.div`
      border: 1px dashed ${({ theme }) => theme.colors.gray.x_light};
      width: 25%;
    `,

    AdminVerificationCode: styled(TextField)`
      width: 25%;
    `,

    SignUpButtonLayer: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > * {
        margin: 1rem;
      }
    `,

    SignUpButton: styled(Button)`
      width: 25%;
      height: 4rem;
      background: ${({ theme }) => theme.colors.navy.normal};
      color: white;
      font-size: ${({ theme }) => theme.fontSizes.base};
      &: hover {
        background: ${({ theme }) => theme.colors.navy.light};
      }
    `,
  },
  SignUpComplete: {
    Layout: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      height: fit-content;
      margin: 3rem auto;
    `,

    TitleLayer: styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 1rem;
      border-bottom: 2px solid ${({ theme }) => theme.colors.navy.light};
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
    `,

    InfoLayer: styled.div`
      display: flex;
      flex-direction: column;
      dl {
        padding: 1rem;
      }

      dt {
        width: 4rem;

        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSizes.small};
      }
    `,

    ButtonLayer: styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 14rem;
        padding: 1rem;
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.colors.navy.light};
        color: white;
        border-radius: 3px;
      }
    `,

    LineDivider: styled.div`
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors.navy.light};
    `,
  },
};

export default S;
