import S from "./LoginStyles";

const LoginForm = () => {
  return (
    <S.LoginLayout>
      <S.LoginTitleLayer>로그인</S.LoginTitleLayer>
      <S.LoginFormLayer>
        <S.LoginUsernameField
          id="outlined-basic"
          label="아이디"
          variant="outlined"
        />
        <S.LoginPasswordField
          id="outlined-password-input"
          label="비밀번호"
          type="password"
          variant="outlined"
        />
        <S.LoginButton>로그인하기</S.LoginButton>
      </S.LoginFormLayer>
      <S.LoginSocialLayer>
        <S.LoginAsKakaoIcon />
        <S.LoginAsNaverIcon />
      </S.LoginSocialLayer>
      <S.LoginSignUpLayer>회원가입 하기</S.LoginSignUpLayer>
    </S.LoginLayout>
  );
};

export default LoginForm;
