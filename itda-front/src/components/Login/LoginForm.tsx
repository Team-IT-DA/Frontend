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
        <a href="https://kauth.kakao.com/oauth/authorize?client_id=ee6e1a4937fbdd837c05bf548215a3ae&redirect_uri=http://localhost:3000/kakao/callback&response_type=code">
          <S.LoginAsKakaoIcon />
        </a>
        <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=boxzCRuNeP0Gvv5BGhcM&state=STATE_STRING&redirect_uri=http://localhost:3000/naver/callback">
          <S.LoginAsNaverIcon />
        </a>
      </S.LoginSocialLayer>
      <S.LoginSignUpLayer>회원가입 하기</S.LoginSignUpLayer>
    </S.LoginLayout>
  );
};

export default LoginForm;
