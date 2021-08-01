import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const S = {
  LoginLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7rem auto;
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

  LoginUsernameField: styled(TextField)``,

  LoginSocialLayer: styled.div`
    display: flex;
  `,
};

export default S;
