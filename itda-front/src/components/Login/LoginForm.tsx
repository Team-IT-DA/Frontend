import S from "./LoginStyles";

const LoginForm = () => {
  return (
    <S.LoginLayout>
      <S.LoginTitleLayer>로그인</S.LoginTitleLayer>
      <S.LoginFormLayer>
        <S.LoginUsernameField
          id="outlined-basic"
          label="아이디"
          type="password"
          variant="outlined"
        />
        <S.LoginUsernameField
          id="outlined-password-input"
          label="비밀번호"
          type="password"
          variant="outlined"
        />
      </S.LoginFormLayer>
      <S.LoginSocialLayer>
        <div>카카오톡 로그인</div>
        <div>네이버 로그인</div>
      </S.LoginSocialLayer>
      <div>회원가입 하기</div>
    </S.LoginLayout>
  );
};

export default LoginForm;
