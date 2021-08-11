import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ReactComponent as kakaoLogin } from "images/icons/kakaoLogin.svg";
import { ReactComponent as naverLogin } from "images/icons/naverLogin.svg";

const S = {
  LoginLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem auto;
  `,

  LoginTitleLayer: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.titleSize};
    font-weight: bold;
    margin-bottom: 2rem;
  `,

  LoginFormLayer: styled.div`
    display: flex;
    flex-direction: column;
  `,

  LoginUsernameField: styled(TextField)`
    width: 20rem;
    margin: 0.5rem 0 1rem 0;
  `,

  LoginPasswordField: styled(TextField)`
    width: 20rem;
    margin-bottom: 1rem;
  `,

  LoginButton: styled(Button)`
    background: ${({ theme }) => theme.colors.navy.light};
    color: white;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    height: 3.5rem;
    &:hover {
      background: ${({ theme }) => theme.colors.navy.normal};
    }
  `,

  LoginSocialLayer: styled.div`
    display: flex;
    width: 8rem;
    margin: 1rem auto;
    justify-content: space-around;
  `,

  LoginAsKakaoIcon: styled(kakaoLogin)``,

  LoginAsNaverIcon: styled(naverLogin)`
    width: 3rem;
    height: 3rem;
  `,

  LoginSignUpLayer: styled.div`
    color: ${({ theme }) => theme.colors.purple.dark};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: bold;
    &:hover {
      color: ${({ theme }) => theme.colors.navy.light};
    }
  `,
};

export default S;
